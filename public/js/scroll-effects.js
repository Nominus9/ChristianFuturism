document.addEventListener("DOMContentLoaded", () => {
  const hands = document.querySelector(".hands-container");
  const title = document.querySelector(".title-animate");
  const visionBox = document.querySelector(".vision-box");
  const heroSection = document.querySelector(".hero");

  // Fade in title on load
  title.querySelectorAll("span").forEach((span, i) => {
    setTimeout(() => {
      span.style.opacity = 1;
    }, 200 * (i + 1));
  });

  // Handle scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrolled < viewportHeight) {
      const progress = scrolled / viewportHeight;
      hands.style.opacity = 1 - progress * 1.5; // Fade out faster than scroll
      hands.style.transform = `scale(${1.1 + progress * 0.1})`; // Subtle zoom
    }

    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.offsetHeight;
    const scrollProgress = scrollPosition / heroHeight;

    // Expand vision box based on scroll
    if (scrollPosition > heroHeight * 0.8) {
      visionBox.classList.add("expanded");
      visionBox.style.opacity = Math.min(scrollProgress, 1);
    } else {
      visionBox.classList.remove("expanded");
    }
  });

  // Make entire box clickable
  visionBox.addEventListener("click", () => {
    window.location.href = "/manifesto.html";
  });
});
