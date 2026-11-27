// 팀 페이지(team/)의 언어 바꾸기. 홈(site.js)과 같은 언어 선택 규칙과 저장 값을 쓴다.
import { chooseLocale, copy, resolveLocale, resources, storageKey, supportedLocales } from './localization.mjs';

const selector = document.querySelector('#language-select');
const PRODUCT_ROOT = new URL('../', document.querySelector('#minou-home').href);

function applyLocale(locale) {
  const words = copy[locale];
  const files = resources(locale, PRODUCT_ROOT);
  document.documentElement.lang = locale;
  document.title = words['team.title'];
  document.querySelector('meta[name="description"]').content = words['team.description'];
  for (const node of document.querySelectorAll('[data-i18n]')) node.textContent = words[node.dataset.i18n];
  for (const node of document.querySelectorAll('[data-label]')) node.setAttribute('aria-label', words[node.dataset.label]);
  const links = { product: files.product, privacy: '../' + files.privacy };
  for (const link of document.querySelectorAll('[data-link]')) link.href = links[link.dataset.link];
  const alt = document.querySelector('.person-alt');
  alt.lang = /[가-힣]/.test(alt.textContent) ? 'ko' : 'en';
  selector.value = locale;
}

let saved;
try { saved = localStorage.getItem(storageKey); } catch { /* Storage is optional. */ }
const requested = resolveLocale(new URL(location.href).searchParams.get('lang'));
applyLocale(requested || chooseLocale(saved, navigator.languages?.length ? navigator.languages : [navigator.language]));
selector.closest('label').hidden = false;
selector.addEventListener('change', () => {
  if (!supportedLocales.includes(selector.value)) return;
  applyLocale(selector.value);
  try { localStorage.setItem(storageKey, selector.value); } catch { /* This visit keeps the selection. */ }
  const current = new URL(location.href);
  if (current.searchParams.has('lang')) {
    current.searchParams.set('lang', selector.value);
    history.replaceState(history.state, '', current);
  }
});
