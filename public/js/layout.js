import { createTesseractSVG } from "./tesseract.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");

  const main = document.createElement("main");
  console.log("Main element created:", main);

  main.innerHTML = `

    <!-- Vision Section -->
    <section class="min-h-screen flex items-center justify-center mb-32 relative z-20">
      <div class="text-center parallax-container">
        
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
                Vision
              </p>
              <ul class="space-y-4 text-left list-inside text-lg mb-6">
                ${[
                  "I. Mankind has been given a dominion mandate that encompasses the whole of the cosmos",
                  "II. Technology, rightly-ordered towards the flourishing of the Imago Dei, refracts the glory of God and does not obscure it",
                  "III. Our duty to direct all of human life towards Christ is the other side of our technological duty to subdue and orient matter and the cosmos towards the flourishing of life;",
                  "IV. This calling can only be fulfilled through, and is the necessary outworking of, the Kingdom established by Christ through his church;",
                  "V. All Christians must reject the modern innovations of pietistic and quietistic eschatology, which de-emphasize the role and agency of the institutional church in the plan of salvation and re-creation;",
                  "VI. Futurism is originally and inherently Christian. Optimistic futurism cannot sustain itself if unmoored from its Christian origins;",
                  "VII. The ongoing unfolding of human history along broadly futurist and theistic lines is a prediction and a confirmation of the ultimate truth of Christianity.",
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
              <a href="/manifesto.html" class="manifesto-link group inline-flex items-center space-x-2 relative">
                <span class="relative z-10 text-lg">READ FULL MANIFESTO</span>
                <span class="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                <div class="absolute inset-0 bg-white/5 -z-1 rounded transition-all duration-300 
                  group-hover:bg-white/10 group-hover:scale-105"></div>
              </a>
            </div>
          </div>

          <!-- New Tesseract placement -->
          <div class="tesseract-container-center w-40 h-40 mx-auto mb-16 parallax-element" data-speed="0.1">
            ${createTesseractSVG()}
          </div>
  
        </div>
      </div>

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

    <!-- Community -->
    <section class="mb-32 relative overflow-hidden">
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h3 class="text-3xl text-black font-light mb-8">Join Our Community</h3>
        <p class="text-xl mb-12 text-black/70">Stay updated with the latest in Christian Futurism</p>
        <div class="flex gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-black/10 w-full max-w-sm
            focus:outline-none focus:border-green-400/50 transition-colors duration-300"
          >
          <button class="px-6 py-3 rounded-lg bg-black/5 hover:bg-black/10 transition-colors duration-300">
            Subscribe
          </button>
        </div>
        <div class="mt-8 flex justify-center gap-8">
          <div class="text-center">
            <div class="text-2xl font-bold">2.5K+</div>
            <div class="text-black/60">Community Members</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold">150+</div>
            <div class="text-black/60">Weekly Discussions</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold">45+</div>
            <div class="text-black/60">Active Projects</div>
          </div>
        </div>
      </div>
      <!-- Decorative background -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10"></div>
        <div class="absolute inset-0 bg-grid-pattern animate-grid-flow"></div>
      </div>
    </section>

    <!-- Digital Scripture Window -->
    <section class="mb-32">
      <div class="max-w-4xl mx-auto">
        <div class="scripture-window relative overflow-hidden rounded-xl backdrop-blur-sm
          border border-white/20 bg-white/5 p-8 group">
          <!-- Decorative Elements -->
          <div class="absolute top-3 left-3 flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-green-400/40"></div>
            <div class="w-3 h-3 rounded-full bg-blue-400/40"></div>
            <div class="w-3 h-3 rounded-full bg-purple-400/40"></div>
          </div>
          
          <!-- Verse Content -->
          <div class="mt-6 space-y-4 relative">
            <div class="flex items-start space-x-4">
              <div class="text-4xl text-green-400/30 font-mono">"</div>
              <div>
                <p class="text-xl leading-relaxed mb-4 verse-text">
                  For God has not given us a spirit of fear, but of power and of love and of a sound mind.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-black/60 font-mono">2 Timothy 1:7</span>
                  <button class="refresh-verse px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 
                    transition-all duration-300 flex items-center space-x-2 group">
                    <span>New Verse</span>
                    <svg class="w-4 h-4 transform transition-transform group-hover:rotate-180" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Decorations -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-transparent 
            transform rotate-45 translate-x-16 -translate-y-16"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/10 to-transparent 
            transform -rotate-45 -translate-x-16 translate-y-16"></div>
          
          <!-- Scanning Line Effect -->
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent
            transform -translate-y-full animate-scan"></div>
        </div>
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

  // Add the gentle pulse animation
  document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>
      @keyframes super-gentle-pulse {
        0% { 
          opacity: 0.02; 
          transform: translate(-50%, -50%) scale(1.1);
        }
        50% { 
          opacity: 0.03; 
          transform: translate(-50%, -50%) scale(1.12);
        }
        100% { 
          opacity: 0.02; 
          transform: translate(-50%, -50%) scale(1.1);
        }
      }

      .animate-super-gentle-pulse {
        animation: super-gentle-pulse 12s ease-in-out infinite;
      }
    </style>
  `
  );

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];
});
