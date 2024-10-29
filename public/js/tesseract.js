import { HypercubeGeometry } from "./hypercube.js";

// tesseract.js
export function createTesseractSVG() {
  const hypercube = new HypercubeGeometry();
  let angles = [0, 0, 0];

  function animate() {
    const svg = document.querySelector(".hypercube");
    if (svg) {
      svg.innerHTML = renderHypercube(hypercube, angles);
    }
    requestAnimationFrame(animate);
  }

  // Start animation after a short delay
  setTimeout(animate, 100);

  return `
      <div class="tesseract-animation" role="button" tabindex="0">
          <svg viewBox="0 0 200 200" class="w-full h-full">
              <g class="hypercube">
                  ${renderHypercube(hypercube, angles)}
              </g>
          </svg>
      </div>
  `;
}

function renderHypercube(hypercube, angles) {
  // Get projected vertices
  const rotated4D = hypercube.rotate4D(...angles);
  const vertices2D = hypercube.project4Dto2D(rotated4D);
  const edges = hypercube.getEdges(vertices2D);

  // Render edges
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

export { HypercubeGeometry }; // Export for future use
