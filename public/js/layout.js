import { createTesseractSVG } from "./tesseract.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");

  const main = document.createElement("main");
  console.log("Main element created:", main);

  main.className = "relative min-h-screen px-4 md:px-8 py-8 overflow-auto";

  // main content
  main.innerHTML = `
      <!-- Hero Section with Floating Text -->
      <section class="min-h-screen flex items-center justify-center mb-32">
        <div class="text-center">
          <h1 class="text-6xl md:text-7xl mb-6 text-black">Christian Futurism</h1>
          <h2 class="text-2xl mb-12 text-black/80 font-light">Principles & Arguments</h2>
          
          <div class="max-w-3xl mx-auto">
            <p class="text-lg leading-relaxed mb-6">
              An emerging movement bridging tim3eless faith with advancing technology
            </p>
            <ul class="space-y-4 text-left list-inside text-lg mb-12">
              <li>Embracing technological progress as a divine gift for kingdom advancement</li>
              <li>Integrating Christian ethics into artificial intelligence development</li>
              <li>Building decentralized communities rooted in biblical principles</li>
              <li>Fostering spiritual growth through innovative mediums</li>
            </ul>
  
            <div class="bg-white/30 p-6 rounded-lg inline-flex items-center gap-4">
              <input 
                type="email" 
                placeholder="email@example.com" 
                class="px-4 py-2 bg-white/50 rounded border border-black/10"
              >in 
              <button class="px-4 py-2 bg-black/5 rounded hover:bg-black/10">
                Subscribe
              </button>
            </div>

            <!-- New Tesseract placement -->
            <div class="tesseract-container-center w-40 h-40 mx-auto mb-16">
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
            { title: "AI Art × Christianity", desc: "Explore recording" },
            { title: "AI × Christianity", desc: "Explore recording" },
            {
              title: "Decentralized technology × Christianity",
              desc: "Explore recording",
            },
          ]
            .map(
              (item) => `
            <div class="aspect-square bg-white/20 rounded-lg overflow-hidden group">
              <div class="w-full h-full p-6 flex flex-col justify-between 
                backdrop-blur-sm transition-all duration-300 group-hover:backdrop-blur-md">
                <h4 class="text-lg text-black">${item.title}</h4>
                <span class="text-black/60 text-sm">${item.desc}</span>
              </div>
            </div>
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
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          ${[
            {
              title: "Sermon AI",
              desc: "Neural networks trained on centuries of Christian wisdom",
            },
            {
              title: "Craft Interface",
              desc: "Building beautiful tools for digital ministry",
            },
            {
              title: "Value Atomics",
              desc: "Encoding Christian values into digital systems",
            },
          ]
            .map(
              (item) => `
            <div class="aspect-square bg-white/20 rounded-lg overflow-hidden group">
              <div class="w-full h-full p-6 flex flex-col justify-between 
                backdrop-blur-sm transition-all duration-300 group-hover:backdrop-blur-md">
                <h4 class="text-xl text-black">${item.title}</h4>
                <p class="text-black/70">${item.desc}</p>
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
});
