// Space Recordings Section with snap points and arrows
const SpaceRecordingsSection = `
  <section class="mb-32 overflow-hidden relative">
    <h3 class="text-3xl text-black font-light mb-16 text-center">
      Links to Space Recordings
    </h3>
    
    <!-- Arrow Navigation -->
    <button class="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300" id="scroll-left">
      ←
    </button>
    
    <button class="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300" id="scroll-right">
      →
    </button>

    <!-- Scrolling Container -->
    <div class="relative max-w-6xl mx-auto">
      <div class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4 px-4">
        ${spaceRecordings
          .map(
            (recording) => `
            <div class="flex-none w-80 snap-center">
              <a href="${recording.link}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="block bg-white/5 rounded-lg overflow-hidden group hover:bg-white/10 transition-all duration-300">
                <img src="${recording.image}" 
                     alt="${recording.title}" 
                     class="w-full h-48 object-cover"/>
                <div class="p-6">
                  <h4 class="text-lg font-medium mb-2">${recording.title}</h4>
                  <p class="text-sm text-white/70">${recording.desc}</p>
                  <span class="text-xs text-white/50 mt-4 block">${recording.date}</span>
                </div>
              </a>
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

// Add scroll behavior
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".snap-x");
  const leftBtn = document.getElementById("scroll-left");
  const rightBtn = document.getElementById("scroll-right");

  leftBtn?.addEventListener("click", () => {
    container.scrollBy({ left: -320, behavior: "smooth" });
  });

  rightBtn?.addEventListener("click", () => {
    container.scrollBy({ left: 320, behavior: "smooth" });
  });
});
