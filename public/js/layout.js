import { createTesseractSVG } from "./tesseract.js";

// Define our data
const spaceRecordings = [
  {
    title: "e/acc x Christianity",
    desc: "Exploring the intersection of divine creativity and artificial intelligence",
    image: "assets/space-recordings/1.png",
    link: "https://x.com/CConnorMahoney/status/1751376217964487075",
    date: "2024-01-28",
  },
  {
    title: "Christian Futurism Builders Space I",
    desc: "Connecting Christian Builders to shape the future of technology",
    image: "assets/space-recordings/2.png",
    link: "https://x.com/CConnorMahoney/status/1757521521658994777",
    date: "2024-02-12",
  },
  {
    title: "Christian Futurism Builders Space II",
    desc: "Building digital communities of faith",
    image: "assets/space-recordings/3.png",
    link: "https://x.com/CConnorMahoney/status/1771290951752814636",
    date: "2024-03-23",
  },
  {
    title: "Christian Builders Space - A vision of the Christian Future",
    desc: "Christian Futurism Builders Space III",
    image: "assets/space-recordings/builders-III.png",
    link: "https://x.com/CConnorMahoney/status/1771290951752814636",
    date: "2024-03-23",
  },
  {
    title: "Decentralization x Christianity",
    desc: "Distributing the church through decentralized technology",
    image: "assets/space-recordings/4.png",
    link: "https://x.com/CConnorMahoney/status/1798056171716444648",
    date: "2024-02-11",
  },
  {
    title: "AI x Christianity",
    desc: "Discussing the theological implications of artificial minds",
    image: "assets/space-recordings/5.png",
    link: "https://x.com/CConnorMahoney/status/1822457036761645187",
    date: "2024-08-20",
  },
  {
    title: "AI Art x Christianity",
    desc: "Exploring the intersection of divine creativity and artificial intelligence",
    image: "assets/space-recordings/4.png",
    link: "https://x.com/CConnorMahoney/status/1835151225706488146",
    date: "2024-09-17",
  },
];

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
  
    <!-- Space Recordings Scroll -->
    <section class="mb-32 overflow-hidden relative">
      <h3 class="text-3xl text-black font-light mb-16 text-center">
        Links to Space Recordings
      </h3>

      <!-- Arrow Navigation -->
      <button 
        class="hidden md:flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 z-10 
        w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur-sm
        border border-white/10 hover:border-white/20 transition-all duration-300 group" 
        id="scroll-left">
        <span class="transform transition-transform duration-300 group-hover:-translate-x-1">←</span>
        <!-- Mini tesseract decoration -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          ${createTesseractSVG()}
        </div>
      </button>
      
      <button 
        class="hidden md:flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 z-10 
        w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur-sm
        border border-white/10 hover:border-white/20 transition-all duration-300 group" 
        id="scroll-right">
        <span class="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        <!-- Mini tesseract decoration -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          ${createTesseractSVG()}
        </div>
      </button>

      <!-- Scrolling Container -->
      <div class="relative max-w-6xl mx-auto">
        <div class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4 px-4"
             id="recordings-container">
          ${spaceRecordings
            .map(
              (recording) => `
              <div class="flex-none w-80 snap-center">
                <a href="${recording.link}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="block bg-white/5 rounded-lg overflow-hidden group relative
                   hover:bg-white/10 transition-all duration-300">
                  <img src="${recording.image}" 
                       alt="${recording.title}" 
                       class="w-full h-48 object-cover"/>
                  <div class="p-6">
                    <h4 class="text-lg font-medium mb-2 group-hover:text-green-400 transition-colors">
                      ${recording.title}
                    </h4>
                    <p class="text-sm text-white/70">${recording.desc}</p>
                    <span class="text-xs text-white/50 mt-4 block">${
                      recording.date
                    }</span>
                  </div>
                  
                  <!-- Card decoration -->
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    ${createTesseractSVG()}
                  </div>
                </a>
              </div>
            `
            )
            .join("")}
        </div>

        <!-- Scroll Progress Indicator -->
        <div class="hidden md:block h-1 bg-white/10 mt-6 mx-4 rounded-full overflow-hidden">
          <div class="h-full bg-green-400/30 rounded-full transition-all duration-300" id="scroll-progress"></div>
        </div>
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
            title: "SeraphAI",
            desc: "Neural networks trained on centuries of Christian wisdom",
            image: "assets/builders/seraph-ai.jpeg",
          },
          {
            title: "Pulpit AI",
            desc: "Helping busy pastors turn sermons into content; AI for everything after you preach",
            image: "assets/builders/pulpit.png",
          },
          {
            title: "Ecclesia Bible App",
            desc: "The AI-enhanced Bible App",
            image: "assets/builders/ecclesia.jpeg",
          },
          {
            title: "Codex Translation Editor",
            desc: "Empowering Translators with Cutting-Edge AI",
            image: "assets/builders/codex-logo.png",
          },
          {
            title: "Nominus9",
            desc: "Catholic anon who made this website. @nominus9 on X",
            image: "assets/builders/nominus9.png",
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

  // Add scroll behavior right here
  const container = document.getElementById("recordings-container");
  const leftBtn = document.getElementById("scroll-left");
  const rightBtn = document.getElementById("scroll-right");
  const progressBar = document.getElementById("scroll-progress");

  if (container && leftBtn && rightBtn && progressBar) {
    // Update progress bar
    const updateProgress = () => {
      const progress =
        (container.scrollLeft /
          (container.scrollWidth - container.clientWidth)) *
        100;
      progressBar.style.width = `${progress}%`;
    };

    // Scroll handlers
    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -320, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: 320, behavior: "smooth" });
    });

    // Update progress on scroll
    container.addEventListener("scroll", updateProgress);

    // Initial progress update
    updateProgress();
  }
});
