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
});
