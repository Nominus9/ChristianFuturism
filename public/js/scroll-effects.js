class ScrollHandler {
  constructor() {
    this.sections = document.querySelectorAll(".section:not(.hero)");
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setTimeout(() => {
              entry.target.classList.add("animation-complete");
            }, 1500);
            console.log(`${entry.target.id} is now visible`);
          } else if (entry.target.classList.contains("animation-complete")) {
            entry.target.classList.remove("visible", "animation-complete");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    this.sections.forEach((section) => {
      observer.observe(section);
      console.log(`Observing section: ${section.id}`);
    });
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  new ScrollHandler();

  const hero = document.querySelector(".hero");
  const imageContainer = document.querySelector(".hero__image-container");
  const title = document.querySelector(".hero__title");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollProgress = scroll / viewportHeight;

    if (scrollProgress < 1) {
      imageContainer.style.transform = `translateY(-${scroll * 0.2}px) scale(${
        1 - scrollProgress * 0.1
      })`;
      title.style.transform = `translateY(-${scroll * 0.1}px)`;
      hero.style.opacity = 1 - scrollProgress;
    }
  });
});
