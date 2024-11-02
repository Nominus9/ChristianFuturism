import { Hypercube } from "./hypercube.js";

export function createTesseractSVG() {
  const svg = `
    <svg viewBox="-100 -100 200 200" class="w-full h-full">
      <g class="hypercube-render-group">
        <!-- Edges will be dynamically added here -->
      </g>
    </svg>
  `;
  return svg;
}

function renderHypercube(container) {
  const hypercube = new Hypercube();
  const renderGroup = container.querySelector(".hypercube-render-group");

  let time = 0;
  const edges = [
    [0, 1],
    [1, 3],
    [3, 2],
    [2, 0],
    [4, 5],
    [5, 7],
    [7, 6],
    [6, 4],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
    [8, 9],
    [9, 11],
    [11, 10],
    [10, 8],
    [12, 13],
    [13, 15],
    [15, 14],
    [14, 12],
    [8, 12],
    [9, 13],
    [10, 14],
    [11, 15],
    [0, 8],
    [1, 9],
    [2, 10],
    [3, 11],
    [4, 12],
    [5, 13],
    [6, 14],
    [7, 15],
  ];

  function animate() {
    time += 0.02;

    // Rotate in multiple dimensions
    hypercube.rotate4D(
      time * 0.3, // XY
      time * 0.2, // XZ
      time * 0.1, // XW
      time * 0.15, // YZ
      time * 0.25, // YW
      time * 0.3 // ZW
    );

    // Project to 3D
    const projected = hypercube.project4Dto3D(0);

    // Clear previous render
    renderGroup.innerHTML = "";

    // Draw edges
    edges.forEach(([i, j]) => {
      const [x1, y1] = projected[i];
      const [x2, y2] = projected[j];

      // Scale the coordinates
      const scale = 80;

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", x1 * scale);
      line.setAttribute("y1", y1 * scale);
      line.setAttribute("x2", x2 * scale);
      line.setAttribute("y2", y2 * scale);
      line.setAttribute("stroke", "#6ef4a5"); // Using our theme green
      line.setAttribute("stroke-width", "0.5");
      line.setAttribute("opacity", "0.5");

      renderGroup.appendChild(line);
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Just keep the tesseract functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the tesseract
  const container = document.querySelector(".tesseract-container-center");
  if (container) {
    container.innerHTML = createTesseractSVG();
    renderHypercube(container);
  } else {
    console.error("Tesseract container not found");
  }
});

// Add some CSS for the tesseract container
const style = document.createElement("style");
style.textContent = `
  .tesseract-container-center {
    pointer-events: none;
    transform: scale(1.5);
    transition: transform 0.5s ease-out;
  }
  
  .hypercube-render-group line {
    transition: all 0.1s ease-out;
  }
`;
document.head.appendChild(style);
