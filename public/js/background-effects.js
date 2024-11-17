class DataStream {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.streams = [];
    this.init();
  }

  init() {
    this.resize();
    this.createStreams();
    this.animate();
    window.addEventListener("resize", () => this.resize());
  }

  createStreams() {
    const streamCount = Math.floor(this.canvas.width / 20);
    for (let i = 0; i < streamCount; i++) {
      this.streams.push({
        x: i * 20,
        y: Math.random() * this.canvas.height,
        speed: 1 + Math.random() * 3,
        characters: this.generateCharacters(),
      });
    }
  }

  generateCharacters() {
    // Mix of Matrix-style characters and Christian symbols
    return "⟁⟰⟱✝†⚔️☨".split("");
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.streams.forEach((stream) => {
      this.ctx.fillStyle = "rgba(110, 244, 165, 0.8)";
      this.ctx.font = "12px monospace";
      this.ctx.fillText(
        stream.characters[Math.floor(Math.random() * stream.characters.length)],
        stream.x,
        stream.y
      );

      stream.y += stream.speed;
      if (stream.y > this.canvas.height) {
        stream.y = 0;
      }
    });

    requestAnimationFrame(() => this.animate());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  canvas.classList.add("data-streams");
  document.querySelector(".space-background").appendChild(canvas);
  new DataStream(canvas);
});

document.fonts.ready.then(() => {
  console.log(
    "Fonts loaded:",
    Array.from(document.fonts)
      .map((font) => `${font.family} - ${font.status}`)
      .join("\n")
  );
});
