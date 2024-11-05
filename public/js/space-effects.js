class ParticleSystem {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;

    this.init();
  }

  init() {
    this.canvas.className = "particle-overlay";
    document.querySelector(".space-effects").appendChild(this.canvas);
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    const particleCount = 100; // Keep it subtle

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        life: 1,
        maxLife: Math.random() * 3 + 2,
      });
    }
  }

  bindEvents() {
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((particle, index) => {
      // Subtle movement
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Fade effect
      particle.life -= 0.01;

      if (particle.life <= 0) {
        particle.life = particle.maxLife;
        particle.x = Math.random() * this.canvas.width;
        particle.y = Math.random() * this.canvas.height;
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(110, 244, 165, ${particle.life * 0.2})`;
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ParticleSystem();
});
