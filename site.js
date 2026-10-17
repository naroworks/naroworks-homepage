const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const gallery = document.querySelector(".product-gallery");
const galleryPrevious = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");
const shots = [...document.querySelectorAll(".shot-link")];
const viewer = document.querySelector(".image-viewer");
let currentShot = 0;
let lastTrigger;
let scrollFrame = 0;
const entranceAnimations = [];

document.getElementById("year").textContent = new Date().getFullYear();

// 본문은 항상 보이고 애니메이션만 점진적으로 더합니다.
if (!motionPreference.matches && Element.prototype.animate) {
  document.querySelectorAll(".hero-line").forEach((line, index) => {
    entranceAnimations.push(
      line.animate(
        [
          { opacity: 0, transform: "translateY(32px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 900,
          delay: index * 130,
          easing: "cubic-bezier(.2,.7,.2,1)",
          fill: "backwards",
        },
      ),
    );
  });
  entranceAnimations.push(
    document
      .querySelector(".hero-orbit")
      .animate(
        [{ transform: "rotate(-34deg)" }, { transform: "rotate(-12deg)" }],
        { duration: 1800, easing: "cubic-bezier(.2,.7,.2,1)" },
      ),
  );
}

// 스크롤 등장: 동작을 허용한 브라우저에서만 숨김 class를 붙이고, 화면에 들어오면 한 번 보여 줍니다.
const revealTargets = [...document.querySelectorAll("[data-reveal]")];
let revealObserver;
function revealAll() {
  revealTargets.forEach((target) => target.classList.add("is-in"));
}
if (!motionPreference.matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // 갤러리는 가로로 넘겨야 보이는 화면까지 한 번에 순서대로 등장시킵니다.
        const group =
          entry.target === gallery
            ? entry.target.querySelectorAll("[data-reveal]")
            : [entry.target];
        group.forEach((target) => target.classList.add("is-in"));
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );
  revealTargets
    .filter((target) => !gallery.contains(target))
    .forEach((target) => revealObserver.observe(target));
  revealObserver.observe(gallery);
} else {
  revealAll();
}

function updateGallery() {
  scrollFrame = 0;
  const maximumScroll = gallery.scrollWidth - gallery.clientWidth;
  galleryPrevious.disabled = gallery.scrollLeft < 2;
  galleryNext.disabled = gallery.scrollLeft >= maximumScroll - 2;
}
function queueGalleryUpdate() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateGallery);
}
function scrollGallery(direction) {
  const distance =
    gallery.querySelector("figure").getBoundingClientRect().width +
    parseFloat(getComputedStyle(gallery).columnGap);
  gallery.scrollBy({
    left: direction * distance,
    behavior: motionPreference.matches ? "instant" : "smooth",
  });
}
document.querySelector(".gallery-navigation").hidden = false;
galleryPrevious.addEventListener("click", () => scrollGallery(-1));
galleryNext.addEventListener("click", () => scrollGallery(1));
gallery.addEventListener("scroll", queueGalleryUpdate, { passive: true });
window.addEventListener("resize", queueGalleryUpdate, { passive: true });
motionPreference.addEventListener("change", () => {
  if (motionPreference.matches) {
    entranceAnimations.forEach((animation) => animation.cancel());
    revealObserver?.disconnect();
    revealAll();
    document.documentElement.classList.remove("motion-ready");
  }
  queueGalleryUpdate();
});
updateGallery();

function showShot(index) {
  currentShot = (index + shots.length) % shots.length;
  const shot = shots[currentShot];
  const image = document.querySelector(".viewer-image");
  image.src = shot.href;
  image.alt = shot.querySelector("img").alt;
  document.querySelector(".viewer-caption").textContent =
    `${currentShot + 1} / ${shots.length} · ${shot.dataset.caption}`;
}
if (typeof viewer.showModal === "function") {
  shots.forEach((shot, index) =>
    shot.addEventListener("click", (event) => {
      // 수정 키를 이용한 새 탭 열기는 브라우저 기본 동작을 유지합니다.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      lastTrigger = shot;
      showShot(index);
      viewer.showModal();
    }),
  );
  document
    .querySelector(".viewer-close")
    .addEventListener("click", () => viewer.close());
  document
    .querySelector(".viewer-prev")
    .addEventListener("click", () => showShot(currentShot - 1));
  document
    .querySelector(".viewer-next")
    .addEventListener("click", () => showShot(currentShot + 1));
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showShot(currentShot + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  viewer.addEventListener("close", () =>
    lastTrigger?.focus({ preventScroll: true }),
  );
}
