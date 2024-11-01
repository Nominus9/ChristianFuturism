document.addEventListener("DOMContentLoaded", () => {
  const manifestoContent = document.getElementById("manifesto-content");

  const manifestoStructure = {
    title: "CHRISTIAN FUTURISM:",
    subtitle: "PRINCIPLES AND ARGUMENTS",
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
      <!-- Massive pulsing hands background -->
      <div class="fixed inset-0 pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh]">
          <img 
            src="/assets/hands.png"
            class="w-full h-full object-cover animate-super-gentle-pulse filter brightness-150 contrast-150" 
            style="opacity: 0.085"
            alt="" 
          />
        </div>
      </div>

      <!-- Main layout -->
      <div class="flex justify-center relative z-10">
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
            <!-- Header -->
            <header class="mb-16 text-center lg:text-left">
              <h1 class="text-4xl md:text-5xl mb-2 font-light tracking-wide">
                ${manifestoStructure.title}
              </h1>
              <h2 class="text-3xl md:text-4xl mb-6 font-light tracking-wide">
                ${manifestoStructure.subtitle}
              </h2>
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
                      ? `
                    <div class="mt-4 text-sm text-black/60">
                      Citations: ${section.citations.join(", ")}
                    </div>
                  `
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
    </div>
  `;

  // Add intersection observer for ToC highlighting
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
