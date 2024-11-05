class ScrollNav {
  constructor() {
    this.nav = document.querySelector(".section-nav");
    this.sections = [
      { id: "hero", next: "Vision" },
      { id: "vision", next: "Space Recordings" },
      { id: "recordings", next: "Christian Builders" },
      { id: "builders", next: null },
    ];
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => this.updateNav());
    this.nav.addEventListener("click", () => this.scrollToNext());
    // Show initial state
    this.updateNav();
  }

  updateNav() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < this.sections.length; i++) {
      const section = document.getElementById(this.sections[i].id);
      const nextSection = this.sections[i].next;

      if (
        section &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        if (nextSection) {
          this.nav.querySelector(".section-nav__text").textContent =
            nextSection;
          this.nav.dataset.nextSection = this.sections[i + 1].id;
          this.nav.style.opacity = "1";
        } else {
          this.nav.style.opacity = "0";
        }
        break;
      }
    }
  }

  scrollToNext() {
    const nextSectionId = this.nav.dataset.nextSection;
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  new ScrollNav();
});
