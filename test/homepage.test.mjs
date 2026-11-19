import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import { copy, resources, supportedLocales } from '../localization.mjs';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root));
const html = read('index.html').toString();
const rootUrl = 'https://product.example/';
const assetDigests = {
  ko: ['e4e946aae0cf482d', 'c9f966ee10624e6f'],
  'ja-JP': ['ec900dbaa888e607', '3bbc1770f41dd850'],
  'zh-Hant-TW': ['4ddf5409e511d824', '0cab752646965bf4'],
  'en-US': ['2f56dd08569be9aa', 'd948e945f07b24eb'],
};
const markets = {
  ko: ['ko', 'kr', 'ko'], 'ja-JP': ['ja', 'jp', 'ja'],
  'zh-Hant-TW': ['zh-TW', 'tw', 'zh_TW'], 'en-US': ['en', 'sg', 'en'],
};

test('각 언어에서 해당 지역의 녹화·첫 프레임·캡처와 링크를 사용한다', () => {
  for (const locale of supportedLocales) {
    const files = resources(locale, rootUrl);
    const [folder, market, language] = markets[locale];
    for (const key of ['recording', 'poster', 'sock', 'fabric']) {
      assert.ok(files[key].startsWith(`assets/minou/${folder}/`));
      assert.ok(read(files[key]).length > 0);
    }
    const digests = [files.recording, files.poster].map(path =>
      createHash('sha256').update(read(path)).digest('hex').slice(0, 16));
    assert.deepEqual(digests, assetDigests[locale]);
    assert.equal(files.product, rootUrl + (locale === 'ko' ? '' : folder + '/'));
    assert.equal(files.appStore, `https://apps.apple.com/${market}/app/id6830531773`);
    assert.equal(new URL(files.googlePlay).searchParams.get('hl'), language);
    assert.equal(new URL(files.googlePlay).searchParams.get('id'), 'com.naroworks.minou');
    assert.equal(files.privacy, `privacy/${folder}/`);
    assert.ok(existsSync(new URL(files.privacy + 'index.html', root)));
  }
});

test('정적 HTML에 영어 본문·그림·연락처와 법정 표기가 들어 있다', () => {
  const en = copy['en-US'];
  for (const [, key, value] of html.matchAll(/data-i18n="([^"]+)">([^<]*)</g)) {
    assert.equal(value, en[key], key);
  }
  for (const [, key, value] of html.matchAll(/data-alt="([^"]+)" alt="([^"]*)"/g)) {
    assert.equal(value, en[key], key);
  }
  for (const [, key] of html.matchAll(/data-label="([^"]+)"/g)) assert.ok(en[key], key);
  for (const key of ['intro', 'knitting', 'physicsBody', 'framesBody', 'connectionIntro', 'connectionFit', 'connectionNext', 'aboutBody', 'founder']) {
    assert.ok(html.includes(en[key]), key);
  }
  const footer = html.slice(html.indexOf('<footer>'));
  for (const key of ['name', 'registration', 'address', 'representative']) {
    assert.ok(footer.includes(en['company.' + key]), key);
  }
  assert.ok(footer.includes('mailto:contact@naroworks.com'));
  assert.ok(footer.includes('3ded36b356c0813f96fdfa2e56a66511'));
  assert.ok(html.includes('CEO &amp; Founder'));
  for (const locale of supportedLocales) assert.match(copy[locale]['company.registration'], /482-88-03565/);
  assert.match(en['company.representative'], /Hyungkee Park/);
  for (const [, src] of html.matchAll(/(?:src|poster)="([^"]+)"/g)) {
    assert.ok(existsSync(new URL(src, root)), src);
  }
  assert.match(html, /<html lang="en-US">/);
  assert.match(html, /<video [^>]*controls[^>]*poster="assets\/minou\/en\/stitch.webp"/);
  assert.doesNotMatch(html, /\b(?:autoplay|loop)\b/i);
});

test('작품마다 완성품 화면 한 장과 해당 작품을 입은 세 자세를 순서대로 보여 준다', () => {
  const samples = [
    ['bobble', 'bobbleName', ['idle_0', 'walk_2', 'doze_3']],
    ['cable-scarf', 'scarfName', ['idle_0', 'stretch_3', 'groom_2']],
    ['argyle-socks', 'socksName', ['gaze_0', 'cheer_2', 'stretch_3']],
  ];
  const figures = [...html.matchAll(/<figure class="piece">([\s\S]*?)<\/figure>/g)];
  assert.equal(figures.length, samples.length);
  for (const [i, [slug, name, poses]] of samples.entries()) {
    const figure = figures[i][1];
    assert.ok(figure.includes(`<figcaption data-i18n="${name}">`));
    const images = [...figure.matchAll(/<img\b[^>]*src="([^"]+)"[^>]*data-alt="([^"]+)"[^>]*>/g)];
    const paths = ['3d', ...poses].map(view => `assets/minou/connect/${slug}-${view}.webp`);
    assert.deepEqual(images.map(match => match[1]), paths);
    for (const [index, [tag, path]] of images.entries()) {
      const size = index === 0 ? 640 : 512;
      assert.ok(tag.includes(`width="${size}" height="${size}"`), path);
      assert.equal(read(path).toString('ascii', 8, 12), 'WEBP', path);
    }
    for (const locale of supportedLocales) {
      const descriptions = images.map(match => copy[locale][match[2]]);
      assert.ok(descriptions.every(value => value?.trim()), locale);
      assert.equal(new Set(descriptions).size, 4, locale);
    }
  }
});

test('네 언어의 소개와 섹션 구성이 일치하고 주소는 법정 표기에만 나온다', () => {
  const sections = [...html.matchAll(/<section\b[^>]*aria-labelledby="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(sections, ['hero-title', 'bench-title', 'tech-title', 'connection-title', 'company-title']);
  const titles = ['3D와 2D의 연결', '3Dと2Dをつなぐ', '連結 3D 與 2D', 'Connecting 3D and 2D'];
  const city = /경기도|고양시|고양에서|고양의|京畿道|高陽市|Goyang|Gyeonggi/i;
  const retired = /운영하는 일|育てる日々|經營.{0,8}的日常|work behind|코딩 에이전트|コーディングエージェント|程式開發代理|coding agents/i;
  const ad = /광고|広告|廣告|\bad[- ]free\b|\badvertis|\bads\b/i;
  assert.doesNotMatch(html.split('<footer>')[0], city);
  for (const pattern of [retired, ad]) assert.doesNotMatch(html, pattern);
  for (const [i, locale] of supportedLocales.entries()) {
    const words = copy[locale];
    const { 'company.address': address, ...body } = words;
    assert.match(address, city);
    const all = Object.values(body).join('\n');
    for (const pattern of [city, retired, ad, /\b72\b/]) assert.doesNotMatch(all, pattern, locale);
    assert.doesNotMatch(words.founderBody, /혼자|ひとり|一人|獨自|alone|himself|single-handed/i);
    assert.equal(words.connectionTitle, titles[i]);
    for (const part of ['15', '90']) assert.ok(words.framesBody.includes(part), locale);
    assert.match(words.framesBody, /6|six/i);
    for (const part of ['AI', '90']) assert.ok(words.connectionFit.includes(part), locale);
  }
  assert.match(copy.ko.intro, /^나로웍스는 소프트웨어 개발 및 운영사이며, /);
  for (const words of Object.values(copy)) assert.doesNotMatch(words.intro, /고양|Goyang|高陽/);
});

test('홈페이지에는 미누 한 제품과 해당 제품 자산만 남아 있다', () => {
  const content = ['index.html', 'localization.mjs', 'site.js', 'styles.css', 'README.md', 'ASSET_PROVENANCE.md'];
  const retired = /boxle|bandlog|복슬|밴드로그|バンドネコ/i;
  for (const file of content) assert.doesNotMatch(read(file).toString(), retired, file);
  const publicPaths = readdirSync(new URL('assets/', root), { recursive: true });
  for (const file of publicPaths) assert.doesNotMatch(file, retired);
  for (const file of readdirSync(root)) assert.doesNotMatch(file, retired);
  assert.match(html, /id="minou-home"/);
});

test('검색 엔진 확인과 새 미리보기 이미지의 크기를 보존한다', () => {
  assert.match(html, /name="naver-site-verification" content="42f74fa5d4e53dd009983a190f6ee95a3938af54"/);
  assert.match(html, /rel="canonical" href="https:\/\/www\.naroworks\.com\/"/);
  const og = read('assets/og.png');
  assert.deepEqual([og.readUInt32BE(16), og.readUInt32BE(20)], [1200, 630]);
  assert.match(html, /property="og:image:width" content="1200"/);
  assert.match(html, /property="og:image:height" content="630"/);
});
