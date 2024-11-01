import { Hypercube } from "./hypercube.js";

export function createTesseractSVG() {
  const hypercube = new Hypercube();
  let angles = [0, 0, 0];
  let animationFrameId = null;

  function animate() {
    const svg = document.querySelector(".hypercube");
    if (svg) {
      svg.innerHTML = renderHypercube(hypercube, angles);
      animationFrameId = requestAnimationFrame(animate);
    }
  }

  // Clean up previous animation
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  // Start animation and attach listeners after a short delay
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

  // Return the HTML string
  return `
      <div class="tesseract-animation" role="button" tabindex="0">
          <svg 
              viewBox="-150 -150 300 300" 
              width="300" 
              height="300" 
              class="w-full h-full"
              style="border: 1px solid blue"
          >
              <g class="hypercube">
                  ${renderHypercube(hypercube, angles)}
              </g>
          </svg>
      </div>
  `;
}

function renderHypercube(hypercube, angles) {
  try {
    const rotated4D = hypercube.rotate4D(...angles);
    console.log("Post-rotation vertices:", rotated4D.slice(0, 2));

    const vertices2D = hypercube.project4Dto2D(rotated4D);
    console.log("Projected vertices:", vertices2D.slice(0, 2));

    const edges = hypercube.getEdges(vertices2D);
    console.log("First edge:", edges[0]);

    return edges
      .map((edge) => {
        // Validate edge values
        if (
          isNaN(edge.x1) ||
          isNaN(edge.y1) ||
          isNaN(edge.x2) ||
          isNaN(edge.y2)
        ) {
          console.error("Invalid edge:", edge);
          return "";
        }
        return `
                    <line 
                        x1="${edge.x1}" y1="${edge.y1}" 
                        x2="${edge.x2}" y2="${edge.y2}"
                        stroke="rgb(0,255,0)" 
                        stroke-width="2"
                        style="opacity: 1"
                    />
                `;
      })
      .join("");
  } catch (error) {
    console.error("Error in renderHypercube:", error);
    return "";
  }
}
