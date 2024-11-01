import { createTesseractSVG } from "./tesseract.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");

  const main = document.createElement("main");
  console.log("Main element created:", main);

  main.className = "relative min-h-screen px-4 md:px-8 py-8 overflow-auto";

  // main content
  main.innerHTML = `
      <!-- Hero Section with Floating Text -->
      <section class="min-h-screen flex items-center justify-center mb-32 relative">
        <div class="text-center parallax-container">
          <h1 class="text-6xl md:text-7xl mb-6 text-black parallax-element font-bold tracking-wider" data-speed="0.5">
            Christian Futurism
          </h1>
          <h2 class="text-2xl mb-12 text-black/80 font-light parallax-element tracking-wide" data-speed="0.4">
            Principles & Arguments
          </h2>
          
          <div class="max-w-3xl mx-auto relative">
            <!-- Backdrop Tesseract -->
            <div class="tesseract-container-center absolute inset-0 opacity-30 scale-150" data-speed="0.2">
              ${createTesseractSVG()}
            </div>
            
            <!-- Manifesto Content -->
            <div class="manifesto-box parallax-element relative" data-speed="0.3">
              <div class="absolute inset-0 bg-grid-pattern animate-grid-flow"></div>
              <div class="relative z-10">
                <p class="text-xl leading-relaxed mb-6 animate-text-glow">
                  An emerging movement bridging timeless faith with advancing technology
                </p>
                <ul class="space-y-4 text-left list-inside text-lg mb-6">
                  ${[
                    "Embracing technological progress as a divine gift for kingdom advancement",
                    "Integrating Christian ethics into artificial intelligence development",
                    "Building decentralized communities rooted in biblical principles",
                    "Fostering spiritual growth through innovative mediums",
                  ]
                    .map(
                      (text, index) => `
                    <li class="flex items-center space-x-2 transform transition-all duration-500 hover:translate-x-2">
                      <span class="inline-block w-2 h-2 bg-green-400/50 rounded-full pulse-dot"></span>
                      <span class="tech-text">${text}</span>
                    </li>
                  `
                    )
                    .join("")}
                </ul>
                <a href="#" class="manifesto-link group inline-flex items-center space-x-2 relative">
                  <span class="relative z-10 text-lg">READ FULL MANIFESTO</span>
                  <span class="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <div class="absolute inset-0 bg-white/5 -z-1 rounded transition-all duration-300 
                    group-hover:bg-white/10 group-hover:scale-105"></div>
                </a>
              </div>
            </div>

            <div class="bg-white/30 p-6 rounded-lg inline-flex items-center gap-4 parallax-element mt-8" data-speed="0.15">
              <input 
                type="email" 
                placeholder="email@example.com" 
                class="px-4 py-2 bg-white/50 rounded border border-black/10 text-lg"
              >
              <button class="px-4 py-2 bg-black/5 rounded hover:bg-black/10 text-lg tracking-wide">
                Subscribe
              </button>
            </div>

            <!-- New Tesseract placement -->
            <div class="tesseract-container-center w-40 h-40 mx-auto mb-16 parallax-element" data-speed="0.1">
              ${createTesseractSVG()}
            </div>
  
          </div>
        </div>

        <!-- Add fade overlay -->
        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
      </section>
  
      <!-- Space Recordings Grid -->
      <section class="mb-32">
        <h3 class="text-3xl text-black font-light mb-16 text-center">
          Links to Space Recordings
        </h3>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          ${[
            {
              title: "AI Art × Christianity",
              desc: "Exploring the intersection of divine creativity and artificial intelligence",
              image:
                "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
              link: "https://twitter.com/i/spaces/1zqJVPDXPMnKB",
            },
            {
              title: "AI × Christianity",
              desc: "Discussing the theological implications of artificial minds",
              image:
                "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg",
              link: "https://twitter.com/i/spaces/1YqJDqDNkoXJV",
            },
            {
              title: "Decentralized technology × Christianity",
              desc: "Building digital communities of faith",
              image:
                "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
              link: "https://twitter.com/i/spaces/1mrGmkjXPRwxy",
            },
          ]
            .map(
              (item) => `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" 
              class="aspect-square bg-white/20 rounded-lg overflow-hidden group relative
                before:absolute before:inset-0 before:border-2 before:border-transparent before:z-20
                before:transition-all before:duration-500
                hover:before:border-white/30 hover:before:scale-95
                after:absolute after:inset-0 after:border-2 after:border-transparent after:z-20
                after:transition-all after:duration-500 after:delay-100
                hover:after:border-white/20 hover:after:scale-90">
              <img src="${item.image}" alt="${item.title}" 
                class="absolute inset-0 w-full h-full object-cover transition-all duration-500 
                  group-hover:scale-110 group-hover:rotate-1">
              <div class="w-full h-full p-6 flex flex-col justify-between relative z-10
                backdrop-blur-sm transition-all duration-300
                bg-black/30 group-hover:bg-black/50
                before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/60 before:to-transparent">
                <h4 class="text-lg text-white relative z-10 transition-transform duration-300
                  group-hover:translate-x-2">${item.title}</h4>
                <span class="text-white/80 text-sm relative z-10 transition-all duration-300
                  group-hover:text-white group-hover:translate-x-2">${item.desc}</span>
              </div>
            </a>
          `
            )
            .join("")}
        </div>
      </section>
  
      <!-- Builders Grid -->
      <section class="mb-32">
        <h3 class="text-3xl text-black font-light mb-16 text-center">
          Christian Futurism Builders
        </h3>
        <div class="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          ${[
            {
              title: "Sermon AI",
              desc: "Neural networks trained on centuries of Christian wisdom",
              image:
                "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
            },
            {
              title: "Craft Interface",
              desc: "Building beautiful tools for digital ministry",
              image:
                "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
            },
            {
              title: "Value Atomics",
              desc: "Encoding Christian values into digital systems",
              image:
                "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            },
            {
              title: "Faith Labs",
              desc: "Experimental approaches to digital worship",
              image:
                "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg",
            },
            {
              title: "Divine Data",
              desc: "Analyzing patterns in spiritual growth",
              image:
                "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg",
            },
          ]
            .map(
              (item) => `
            <div class="aspect-square bg-white/20 rounded-lg overflow-hidden group relative
              before:absolute before:inset-0 before:border before:border-white/10 before:z-20
              before:transition-all before:duration-500 before:rounded-lg
              hover:before:border-white/30 hover:before:scale-95
              after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]
              after:opacity-0 after:transition-opacity after:duration-500
              hover:after:opacity-100">
              <img src="${item.image}" alt="${item.title}" 
                class="absolute inset-0 w-full h-full object-cover transition-all duration-500 
                  group-hover:scale-110 group-hover:rotate-1">
              <div class="w-full h-full p-6 flex flex-col justify-between relative z-10
                backdrop-blur-sm transition-all duration-300
                bg-gradient-to-b from-black/30 to-black/60
                group-hover:from-black/40 group-hover:to-black/70">
                <h4 class="text-xl text-white transform transition-all duration-300
                  group-hover:translate-y-2 group-hover:text-green-300">${item.title}</h4>
                <p class="text-white/80 transform transition-all duration-300 
                  group-hover:translate-y-1 group-hover:text-white">${item.desc}</p>
                
                <!-- Tech decoration elements -->
                <div class="absolute top-2 right-2 w-8 h-8 border border-white/20 rounded-full
                  transform transition-all duration-500 opacity-0 rotate-0
                  group-hover:opacity-100 group-hover:rotate-180"></div>
                <div class="absolute bottom-2 left-2 w-12 h-1 bg-white/20
                  transform transition-all duration-500 scale-x-0
                  group-hover:scale-x-100"></div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
    `;

  document.body.appendChild(main);
  console.log("Main appended to body");

  // Make sure body is scrollable
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";

  // Add parallax scroll effect
  const parallaxElements = document.querySelectorAll(".parallax-element");
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach((element) => {
          const speed = element.dataset.speed || 0.5;
          const yPos = -(scrolled * speed);
          const opacity = Math.max(0, 1 - scrolled * 0.002);

          element.style.transform = `translateY(${yPos}px)`;
          element.style.opacity = opacity;
        });

        ticking = false;
      });

      ticking = true;
    }
  });

  // Add initial fade-in animation styles
  const style = document.createElement("style");
  style.textContent = `
    .parallax-element {
      will-change: transform, opacity;
      transition: transform 0.2s ease-out, opacity 0.2s ease-out;
      opacity: 0;
      transform: translateY(20px);
    }

    .parallax-element.fade-in {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes staggerFadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // Trigger initial fade-in animation
  setTimeout(() => {
    parallaxElements.forEach((element, index) => {
      element.style.animation = `staggerFadeIn 0.8s ease-out ${
        index * 0.1
      }s forwards`;
    });
  }, 100);
});
