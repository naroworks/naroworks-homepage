import assert from 'node:assert/strict';
import test from 'node:test';
import { copy, supportedLocales, resolveLocale, chooseLocale } from '../localization.mjs';

test('언어·지역·문자 체계를 지원하는 네 언어로 정규화한다', () => {
  for (const [tag, expected] of [['ko-KR','ko'],['ja','ja-JP'],['ja-JP','ja-JP'],['en-GB','en-US'],['en-US','en-US'],['zh-TW','zh-Hant-TW'],['zh-Hant','zh-Hant-TW'],['zh-Hant-TW','zh-Hant-TW'],['zh-HK','zh-Hant-TW']]) {
    assert.equal(resolveLocale(tag), expected, tag);
  }
  for (const tag of ['fr-FR','de-DE','zh-CN','zh-Hans','zh','',undefined]) assert.equal(resolveLocale(tag), null, tag);
  assert.equal(resolveLocale('zh-Hans-TW'), null);
});

test('저장한 선택을 우선하고 기기 언어를 인식하지 못하면 영어로 표시한다', () => {
  assert.equal(chooseLocale('ja-JP', ['ko-KR']), 'ja-JP');
  assert.equal(chooseLocale('invalid', ['zh-TW']), 'zh-Hant-TW');
  assert.equal(chooseLocale(null, ['fr-FR', 'ja-JP']), 'ja-JP');
  assert.equal(chooseLocale(null, ['fr-FR']), 'en-US');
  assert.equal(chooseLocale(undefined, []), 'en-US');
});

test('네 언어의 본문·접근성 문구와 갤러리 리소스가 빠짐없이 존재한다', () => {
  const keys = Object.keys(copy.ko).sort();
  assert.deepEqual(Object.keys(copy), supportedLocales);
  for (const locale of supportedLocales) {
    assert.deepEqual(Object.keys(copy[locale]).sort(), keys, locale);
    for (const value of Object.values(copy[locale])) {
      if (Array.isArray(value)) assert.ok(value.every(item => typeof item === 'string' && item.length > 0));
      else assert.ok(typeof value === 'string' && value.length > 0);
    }
    assert.equal(copy[locale].captions.length, 5);
    assert.equal(copy[locale].imageAlts.length, 5);
    assert.match(copy[locale]['company.registration'], /482-88-03565/);
  }
});
