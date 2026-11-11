import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, access } from 'node:fs/promises';
import { minouCopy, minouLocales, minouPlay } from '../minou-localization.mjs';
import { supportedLocales } from '../localization.mjs';

test('미누는 언어마다 그 이름과 미누 홈, 그 나라 App Store로 잇는다', () => {
  assert.deepEqual(Object.keys(minouCopy), supportedLocales);
  assert.equal(minouCopy.ko['minou.name'], '미누');
  assert.equal(minouCopy['ja-JP']['minou.name'], 'ミヌー');
  assert.equal(minouCopy['en-US']['minou.name'], 'Minou');
  assert.equal(minouLocales.ko.url, 'https://minou.naroworks.com/');
  assert.equal(minouLocales.ko.appStore, 'https://apps.apple.com/kr/app/id6830531773');
  for (const locale of supportedLocales) assert.match(minouLocales[locale].appStore, /^https:\/\/apps\.apple\.com\/[a-z]{2}\/app\/id6830531773$/);
  assert.equal(minouPlay, 'https://play.google.com/store/apps/details?id=com.naroworks.minou');
});

test('모든 언어의 설명과 화면 5장, 두 해상도의 파일이 준비돼 있다', async () => {
  for (const locale of supportedLocales) {
    const copy = minouCopy[locale];
    assert.deepEqual(Object.keys(copy).sort(), Object.keys(minouCopy.ko).sort());
    for (const value of Object.values(copy)) assert.ok(Array.isArray(value) ? value.every(Boolean) : value.length > 0);
    assert.equal(copy.captions.length, 5);
    assert.equal(copy.imageAlts.length, 5);
    for (let i = 1; i <= 5; i++) for (const width of [440, 880]) await access(new URL(`../assets/minou/${minouLocales[locale].asset}/${String(i).padStart(2, '0')}-${width}.webp`, import.meta.url));
  }
  await access(new URL('../assets/minou/symbol.webp', import.meta.url));
  await access(new URL('../assets/minou/idle.webp', import.meta.url));
});

test('미누는 복슬 다음, 회사 소개 앞에 있고 두 스토어와 미누 홈으로 바로 간다', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.ok(html.indexOf('id="boxle"') < html.indexOf('id="minou"'));
  assert.ok(html.indexOf('id="minou"') < html.indexOf('id="about"'));
  const product = html.slice(html.indexOf('id="minou"'), html.indexOf('id="about"'));
  assert.ok(product.includes('https://apps.apple.com/sg/app/id6830531773'));
  assert.ok(product.includes(minouPlay));
  assert.ok(product.includes('https://minou.naroworks.com/en/'));
  assert.doesNotMatch(product, /boxle|bandlog|is-paused|aria-disabled/);
  for (const key of Object.keys(minouCopy.ko).filter(k => k.startsWith('minou.'))) assert.ok(product.includes(`"${key}"`), key);
});
