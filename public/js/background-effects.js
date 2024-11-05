class DataStream {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.streams = [];
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.createStreams();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createStreams() {
    const numberOfStreams = Math.floor(this.canvas.width / 30);

    for (let i = 0; i < numberOfStreams; i++) {
      this.streams.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        length: Math.random() * 150 + 50,
        speed: Math.random() * 2 + 1,
        width: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.streams.forEach((stream) => {
      this.ctx.beginPath();
      this.ctx.strokeStyle = `rgba(110, 244, 165, ${stream.opacity})`;
      this.ctx.lineWidth = stream.width;
      this.ctx.moveTo(stream.x, stream.y);
      this.ctx.lineTo(stream.x, stream.y - stream.length);
      this.ctx.stroke();

      stream.y += stream.speed;
      if (stream.y > this.canvas.height + stream.length) {
        stream.y = -stream.length;
        stream.x = Math.random() * this.canvas.width;
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  canvas.classList.add("data-streams");
  document.querySelector(".space-background").appendChild(canvas);
  new DataStream(canvas);
});
