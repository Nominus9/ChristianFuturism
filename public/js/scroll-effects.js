class ScrollHandler {
  constructor() {
    this.sections = document.querySelectorAll(".section:not(.hero)");
    this.init();
  }

  init() {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            console.log(`${entry.target.id} is now visible`); // Debug
          }
        });
      },
      {
        threshold: 0.1, // Trigger earlier
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before section comes into view
      }
    );

    // Observe all sections
    this.sections.forEach((section) => {
      observer.observe(section);
      console.log(`Observing section: ${section.id}`); // Debug
    });
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  new ScrollHandler();
});
