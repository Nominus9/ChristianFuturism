document.addEventListener("DOMContentLoaded", () => {
  const manifestoContent = document.getElementById("manifesto-content");

  const manifestoStructure = {
    title: "PRINCIPLES AND ARGUMENTS",
    abstract: `This manifesto presents a theological and philosophical framework for integrating Christian 
      faith with emerging technologies, arguing for active participation in technological 
      development as a fulfillment of divine mandate.`,
    sections: [
      {
        type: "intro",
        title: "Introduction",
        content: `The rapid advancement of technology presents both unprecedented challenges and opportunities 
          for Christian thought and practice. This manifesto proposes a framework for understanding and 
          engaging with technological progress through a Christian lens.`,
        id: "introduction",
      },
      {
        type: "principle",
        number: "I",
        title: "Cosmic Dominion Mandate",
        content:
          "Mankind has been given a dominion mandate that encompasses the whole of the cosmos.",
        citations: ["Genesis 1:28", "Psalm 8:6"],
        id: "dominion-mandate",
      },
      {
        type: "principle",
        number: "II",
        title: "Technological Development as Divine Calling",
        content:
          "The development of technology is a legitimate expression of our divine mandate to cultivate and keep creation.",
        citations: ["Genesis 2:15"],
        id: "tech-development",
      },
      {
        type: "principle",
        number: "III",
        title: "Ethical Integration",
        content:
          "Christian ethics must be integrated into technological development from inception to implementation.",
        citations: ["Proverbs 3:5-6", "Colossians 3:17"],
        id: "ethical-integration",
      },
      {
        type: "principle",
        number: "IV",
        title: "Redemptive Innovation",
        content:
          "Technology should be developed with redemptive purpose, seeking to heal and restore creation.",
        citations: ["Romans 8:19-22"],
        id: "redemptive-innovation",
      },
      {
        type: "principle",
        number: "V",
        title: "Active Engagement",
        content:
          "Christians are called to actively engage in technological development rather than passive observation.",
        citations: ["Matthew 5:13-16"],
        id: "active-engagement",
      },
      {
        type: "principle",
        number: "VI",
        title: "Balanced Progress",
        content:
          "Technological advancement should be pursued with wisdom, balancing innovation with responsibility.",
        citations: ["James 1:5", "1 Thessalonians 5:21"],
        id: "balanced-progress",
      },
      {
        type: "principle",
        number: "VII",
        title: "Kingdom Advancement",
        content:
          "Technology should be leveraged for the advancement of God's kingdom and human flourishing.",
        citations: ["Matthew 6:33", "Jeremiah 29:7"],
        id: "kingdom-advancement",
      },
    ],
  };

  manifestoContent.innerHTML = `
    <div class="min-h-screen relative overflow-hidden">
      <!-- Shader should already be at z-index 0 -->
      
      <!-- Main layout -->
      <div class="flex justify-center content-layer">
        <!-- ToC Sidebar -->
        <div class="w-72 hidden lg:block shrink-0">
          <div class="fixed h-screen p-8 overflow-y-auto">
            <div class="mb-8">
              <a href="/" class="inline-flex items-center space-x-2 text-black/60 hover:text-black 
                transition-colors duration-300 group">
                <span class="transform transition-transform group-hover:-translate-x-1">←</span>
                <span>Back to Home</span>
              </a>
            </div>
            <nav class="space-y-6">
              <h2 class="text-sm font-medium text-black/50 uppercase tracking-wider">Contents</h2>
              <ol class="space-y-3">
                ${manifestoStructure.sections
                  .map(
                    (section) => `
                  <li class="hover:translate-x-2 transition-transform">
                    <a href="#${section.id}" 
                      class="toc-item text-sm text-black/70 hover:text-black block py-1 transition-colors duration-300">
                      ${
                        section.type === "principle"
                          ? `Principle ${section.number}: `
                          : ""
                      }
                      ${section.title}
                    </a>
                  </li>
                `
                  )
                  .join("")}
              </ol>
            </nav>
          </div>
        </div>

        <!-- Main Content -->
        <main class="flex-1 px-4 md:px-8 py-16 lg:pl-80 lg:pr-16">
          <div class="max-w-3xl">
            <!-- Fixed Header -->
            <div class="fixed top-6 right-6 text-lg text-black/30 font-light tracking-wider">
              Christian Futurism
            </div>

            <!-- Header -->
            <header class="mb-24 text-center lg:text-left relative pt-16">
              <h1 class="text-4xl md:text-5xl mb-6 font-light tracking-wide">
                ${manifestoStructure.title}
              </h1>
              <div class="w-16 h-px bg-black/20 mb-6 mx-auto lg:mx-0"></div>
              <p class="text-lg text-black/70 max-w-2xl mx-auto lg:mx-0 italic">
                ${manifestoStructure.abstract}
              </p>
            </header>

            <!-- Article -->
            <article class="prose prose-lg max-w-none">
              ${manifestoStructure.sections
                .map(
                  (section) => `
                <section id="${section.id}" class="mb-16 principle-section">
                  ${
                    section.type === "principle"
                      ? `<span class="text-sm font-medium text-black/50">Principle ${section.number}</span>`
                      : ""
                  }
                  <h2 class="text-2xl mb-4 font-medium">${section.title}</h2>
                  <p class="text-lg leading-relaxed">${section.content}</p>
                  ${
                    section.citations
                      ? `<div class="mt-4 text-sm text-black/60">
                        Citations: ${section.citations.join(", ")}
                      </div>`
                      : ""
                  }
                </section>
              `
                )
                .join("")}
            </article>
          </div>
        </main>
      </div>

      <!-- Mobile ToC Button -->
      <button 
        id="mobile-toc-toggle"
        class="fixed bottom-6 right-6 z-50 lg:hidden bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-4 hover:bg-white transition-colors duration-300"
        aria-label="Toggle Table of Contents"
      >
        <svg class="w-6 h-6 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <!-- Mobile ToC Overlay -->
      <div id="mobile-toc" 
        class="fixed inset-0 z-40 lg:hidden translate-x-full transition-transform duration-300 ease-in-out">
        <div class="absolute inset-0 bg-black/20 backdrop-blur-sm" id="mobile-toc-backdrop"></div>
        <div class="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 shadow-lg">
          <nav class="space-y-6">
            <!-- Same ToC content as desktop -->
            ${manifestoStructure.sections
              .map(
                (section) => `
              <a href="#${section.id}" 
                class="block text-sm text-black/70 hover:text-black py-2 transition-colors duration-300">
                ${
                  section.type === "principle"
                    ? `Principle ${section.number}: `
                    : ""
                }
                ${section.title}
              </a>
            `
              )
              .join("")}
          </nav>
        </div>
      </div>
    </div>
  `;

  // Mobile ToC functionality
  const mobileToggle = document.getElementById("mobile-toc-toggle");
  const mobileToc = document.getElementById("mobile-toc");
  const mobileBackdrop = document.getElementById("mobile-toc-backdrop");

  mobileToggle?.addEventListener("click", () => {
    mobileToc?.classList.toggle("translate-x-full");
  });

  mobileBackdrop?.addEventListener("click", () => {
    mobileToc?.classList.add("translate-x-full");
  });

  document.querySelectorAll("#mobile-toc a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileToc?.classList.add("translate-x-full");
    });
  });

  // ToC highlighting
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".toc-item").forEach((item) => {
            if (item.getAttribute("href") === `#${entry.target.id}`) {
              item.classList.add("text-black", "font-medium");
            } else {
              item.classList.remove("text-black", "font-medium");
            }
          });
        }
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px",
    }
  );

  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});
