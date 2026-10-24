import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, access } from 'node:fs/promises';
import { boxleCopy, boxleLocales } from '../boxle-localization.mjs';
import { supportedLocales } from '../localization.mjs';

test('각 언어는 복슬의 그 언어 이름·링크·화면으로 연결한다(영어는 2026-10-24부터 boxle)', () => {
  assert.deepEqual(Object.keys(boxleCopy), supportedLocales);
  assert.equal(boxleCopy['en-US']['boxle.name'], 'boxle');
  assert.equal(boxleLocales['en-US'].url, 'https://boxle.kr/en/');
  assert.equal(boxleLocales['en-US'].asset, 'en-US');
  assert.equal(boxleLocales['ja-JP'].url, 'https://boxle.kr/ja/');
  assert.equal(boxleLocales['zh-Hant-TW'].url, 'https://boxle.kr/zh-Hant/');
});

test('모든 언어의 설명과 화면 5장, 두 해상도의 파일이 준비돼 있다', async () => {
  for (const locale of supportedLocales) {
    const copy = boxleCopy[locale];
    assert.deepEqual(Object.keys(copy).sort(), Object.keys(boxleCopy.ko).sort());
    for (const value of Object.values(copy)) assert.ok(Array.isArray(value) ? value.every(Boolean) : value.length > 0);
    assert.equal(copy.captions.length, 5);
    assert.equal(copy.imageAlts.length, 5);
    for (let i=1; i<=5; i++) for (const width of [440,880]) await access(new URL(`../assets/boxle/${boxleLocales[locale].asset}/${String(i).padStart(2,'0')}-${width}.webp`, import.meta.url));
  }
});

test('복슬은 밴드로그 바로 다음에 있고 두 갤러리는 독립적으로 접근한다', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.ok(html.indexOf('id="products"') < html.indexOf('id="boxle"'));
  assert.ok(html.indexOf('id="boxle"') < html.indexOf('id="about"'));
  assert.equal((html.match(/class="product-gallery"/g) ?? []).length, 2);
  assert.equal((html.match(/class="gallery-shot"/g) ?? []).length, 10);
  const product = html.slice(html.indexOf('id="boxle"'), html.indexOf('id="about"'));
  assert.ok(product.includes('https://apps.apple.com/app/id6823910868'));
  assert.ok(product.includes('https://play.google.com/store/apps/details?id=kr.boxle.app'));
  assert.ok(product.includes('See more on the boxle site'));
  assert.ok(product.includes('https://boxle.kr/en/'));
  assert.doesNotMatch(product, /assets\/bandlog\//);
});
