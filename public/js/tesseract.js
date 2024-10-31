import { HypercubeGeometry } from "./hypercube.js";

export function createTesseractSVG() {
  const hypercube = new HypercubeGeometry();
  let angles = [0, 0, 0];
  let animationFrameId = null;

  function animate() {
    const svg = document.querySelector(".hypercube");
    if (svg) {
      svg.innerHTML = renderHypercube(hypercube, angles);
      animationFrameId = requestAnimationFrame(animate);
    }
  }

  // Clean up previous animation if it exists
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  // Start animation after a short delay
  setTimeout(() => {
    const element = document.querySelector(".tesseract-animation");
    if (element) {
      element.addEventListener("mouseenter", () => {
        console.log("Mouse enter");
        hypercube.setHovered(true);
      });
      element.addEventListener("mouseleave", () => {
        console.log("Mouse leave");
        hypercube.setHovered(false);
      });
    }
    animate();
  }, 100);

  return `
      <div class="tesseract-animation" role="button" tabindex="0">
          <svg viewBox="-50 -50 400 400" class="w-full h-full">
              <g class="hypercube">
                  ${renderHypercube(hypercube, angles)}
              </g>
          </svg>
      </div>
  `;
}

function renderHypercube(hypercube, angles) {
  const rotated4D = hypercube.rotate4D(...angles);
  const vertices2D = hypercube.project4Dto2D(rotated4D);
  const edges = hypercube.getEdges(vertices2D);

  return edges
    .map(
      (edge) => `
      <line 
          x1="${edge.x1}" y1="${edge.y1}" 
          x2="${edge.x2}" y2="${edge.y2}"
          stroke="rgba(0,255,0,0.5)" 
          stroke-width="1"
      />
  `
    )
    .join("");
}
