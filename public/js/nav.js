class Navigation {
  static init() {
    const nav = document.querySelector("nav");

    // Handle scroll transparency
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("bg-black/40");
        nav.classList.remove("bg-black/20");
      } else {
        nav.classList.add("bg-black/20");
        nav.classList.remove("bg-black/40");
      }
    });

    // Highlight current page in nav
    const currentPath = window.location.pathname;
    document.querySelectorAll("nav a").forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("text-green-400");
        link.classList.remove("text-white/70");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", Navigation.init);
