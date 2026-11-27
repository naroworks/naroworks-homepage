import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { copy } from '../localization.mjs';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root)).toString();
const team = read('team/index.html');

test('팀 페이지는 홈 꼬리에서 잇고 검색에는 넣지 않는다', () => {
  assert.match(team, /<meta name="robots" content="noindex">/);
  assert.match(read('index.html').slice(read('index.html').indexOf('<footer>')), /<a href="team\/" data-i18n="company.team">Team<\/a>/);
  assert.doesNotMatch(read('sitemap.xml'), /team/);
  assert.doesNotMatch(read('robots.txt'), /team/, '막으면 noindex를 못 읽는다');
});

test('정적 HTML의 영어 글이 문구 표와 같고 그림 · 링크가 있다', () => {
  const en = copy['en-US'];
  for (const [, key, value] of team.matchAll(/data-i18n="([^"]+)">([^<]*)</g)) {
    assert.equal(value.replace(/&amp;/g, '&'), en[key], key);
  }
  for (const [, src] of team.matchAll(/(?:src|href)="(\.\.\/[^"?#]+)/g)) {
    assert.ok(existsSync(new URL(src.replace(/^\.\.\//, ''), root)), src);
  }
  assert.ok(team.includes('href="https://www.linkedin.com/in/hyungkee-park-84623a12a/"'));
  assert.ok(team.includes('mailto:contact@naroworks.com'));
  assert.ok(team.includes('mailto:hyungkee.park@minouknit.com'), '대표 연락처');
  assert.ok(existsSync(new URL('team.js', root)));
});

test('네 언어 모두 대표와 이전 경력을 적고, 개인 메일 · 사진은 넣지 않는다', () => {
  for (const [locale, words] of Object.entries(copy)) {
    for (const n of [1, 2, 3]) assert.ok(words[`team.career${n}Org`] && words[`team.career${n}Role`], `${locale} ${n}`);
    assert.match(words['team.role'], /Founder & CEO/);
  }
  assert.doesNotMatch(team, /gmail\.com|\.jpe?g"/i);
});
