class ScrollHandler {
  constructor() {
    this.sections = document.querySelectorAll(".section:not(.hero)");
    this.hero = document.querySelector(".hero");
    this.imageContainer = document.querySelector(".hero__image-container");
    this.title = document.querySelector(".hero__title");
    this.hypercube = document.querySelector(".tesseract-container-center");
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollProgress = scroll / viewportHeight;

      if (scrollProgress < 1) {
        // Parallax effects
        this.imageContainer.style.transform = `translateY(-${
          scroll * 0.2
        }px) scale(${1 - scrollProgress * 0.1})`;
        this.title.style.transform = `translateY(-${scroll * 0.1}px)`;
        this.hero.style.opacity = 1 - scrollProgress;

        // Make hypercube rotate faster with scroll
        if (this.hypercube) {
          this.hypercube.style.transform = `scale(1.5) rotateX(${
            scroll * 0.1
          }deg) rotateY(${scroll * 0.1}deg)`;
        }
      }
    });

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
});
