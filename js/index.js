document.addEventListener("DOMContentLoaded", () => {
  const bannerSlides = document.querySelectorAll(".banner-slide");
  const bannerDots = document.querySelectorAll(".banner-dot");
  const prevBanner = document.getElementById("prevBanner");
  const nextBanner = document.getElementById("nextBanner");
  const bestTabs = document.querySelectorAll(".best-tab");

  let currentBannerIndex = 0;
  let bannerInterval;

  function showBanner(index) {
    bannerSlides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    bannerDots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    currentBannerIndex = index;
  }

  function nextBannerSlide() {
    showBanner((currentBannerIndex + 1) % bannerSlides.length);
  }

  function prevBannerSlide() {
    showBanner((currentBannerIndex - 1 + bannerSlides.length) % bannerSlides.length);
  }

  function startBannerAutoSlide() {
    bannerInterval = setInterval(nextBannerSlide, 5000);
  }

  function resetBannerAutoSlide() {
    clearInterval(bannerInterval);
    startBannerAutoSlide();
  }

  if (bannerSlides.length && prevBanner && nextBanner) {
    prevBanner.addEventListener("click", () => {
      prevBannerSlide();
      resetBannerAutoSlide();
    });

    nextBanner.addEventListener("click", () => {
      nextBannerSlide();
      resetBannerAutoSlide();
    });

    bannerDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        showBanner(Number(dot.dataset.index));
        resetBannerAutoSlide();
      });
    });

    showBanner(0);
    startBannerAutoSlide();
  }

  bestTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      bestTabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});
