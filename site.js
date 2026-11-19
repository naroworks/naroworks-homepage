import { chooseLocale, copy, resolveLocale, resources, storageKey, supportedLocales } from './localization.mjs';

const selector = document.querySelector('#language-select');
// Read the canonical destinations once from the links that also work without JavaScript.
const PRODUCT_ROOT = new URL('../', document.querySelector('#minou-home').href);
const FOUNDER_LINKEDIN = document.querySelector('#founder-profile').href;
const video = document.querySelector('#stitch');
const playback = document.querySelector('.playback');
const recordingFile = document.querySelector('.recording-file');
let locale;

function updatePlayback() {
  const playing = !video.paused && !video.ended;
  playback.classList.toggle('is-playing', playing);
  playback.querySelector('span').textContent = copy[locale][playing ? 'pause' : video.ended ? 'replay' : 'play'];
}

function showRecordingLink() {
  playback.hidden = true;
  recordingFile.hidden = false;
}

function applyLocale(next) {
  locale = next;
  const words = copy[locale];
  const files = resources(locale, PRODUCT_ROOT);
  document.documentElement.lang = locale;
  document.title = words.title;
  for (const field of ['title', 'description']) {
    for (const meta of document.querySelectorAll(`meta[property="og:${field}"], meta[name="twitter:${field}"], meta[name="${field}"]`)) {
      meta.content = words[field];
    }
  }
  document.querySelector('meta[property="og:locale"]').content = files.ogLocale;
  document.querySelector('meta[property="og:image:alt"]').content = words.catAlt;

  for (const node of document.querySelectorAll('[data-i18n]')) node.textContent = words[node.dataset.i18n];
  for (const node of document.querySelectorAll('[data-label]')) node.setAttribute('aria-label', words[node.dataset.label]);
  for (const img of document.querySelectorAll('[data-alt]')) img.alt = words[img.dataset.alt];
  for (const img of document.querySelectorAll('[data-media]')) img.src = files[img.dataset.media];
  const links = { ...files, linkedin: FOUNDER_LINKEDIN };
  for (const link of document.querySelectorAll('[data-link]')) link.href = links[link.dataset.link];
  recordingFile.href = files.recording;
  video.pause();
  video.poster = files.poster;
  if (video.getAttribute('src') !== files.recording) {
    video.src = files.recording;
    video.load();
  }
  playback.hidden = false;
  recordingFile.hidden = true;
  selector.value = locale;
  updatePlayback();
}

let saved;
try { saved = localStorage.getItem(storageKey); } catch { /* Storage is optional. */ }
const url = new URL(location.href);
const requested = resolveLocale(url.searchParams.get('lang'));
applyLocale(requested || chooseLocale(saved, navigator.languages?.length ? navigator.languages : [navigator.language]));
selector.closest('label').hidden = false;
selector.addEventListener('change', () => {
  if (!supportedLocales.includes(selector.value)) return;
  applyLocale(selector.value);
  try { localStorage.setItem(storageKey, locale); } catch { /* This visit keeps the selection. */ }
  const current = new URL(location.href);
  if (current.searchParams.has('lang')) {
    current.searchParams.set('lang', document.documentElement.lang);
    history.replaceState(history.state, '', current);
  }
});

video.controls = false;
for (const event of ['play', 'pause', 'ended']) video.addEventListener(event, updatePlayback);
video.addEventListener('error', showRecordingLink);
playback.addEventListener('click', async () => {
  if (!video.paused) {
    video.pause();
    return;
  }
  try {
    await video.play();
  } catch (error) {
    if (error.name !== 'AbortError') showRecordingLink();
  }
});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', event => {
  if (event.matches) video.pause();
});
