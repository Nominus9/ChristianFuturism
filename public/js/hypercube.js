// hypercube.js
export class HypercubeGeometry {
  // hypercube.js
  constructor() {
    // Increase initial scale
    const scale = 50; // Try bigger number here
    this.vertices4D = [
      [-1, -1, -1, -1],
      [1, -1, -1, -1],
      [-1, 1, -1, -1],
      [1, 1, -1, -1],
      [-1, -1, 1, -1],
      [1, -1, 1, -1],
      [-1, 1, 1, -1],
      [1, 1, 1, -1],
      [-1, -1, -1, 1],
      [1, -1, -1, 1],
      [-1, 1, -1, 1],
      [1, 1, -1, 1],
      [-1, -1, 1, 1],
      [1, -1, 1, 1],
      [-1, 1, 1, 1],
      [1, 1, 1, 1],
    ].map((v) => v.map((coord) => coord * scale));
  }

  // hypercube.js
  rotate4D(angle1, angle2, angle3) {
    const time = Date.now() / 2000; // Slower base time

    // Even gentler rotations
    angle1 = Math.sin(time * 0.2) * 0.3; // XY rotation
    angle2 = Math.cos(time * 0.15) * 0.2; // XZ rotation
    angle3 = Math.sin(time * 0.1) * 0.1; // XW rotation - very gentle

    const cos1 = Math.cos(angle1);
    const sin1 = Math.sin(angle1);
    const cos2 = Math.cos(angle2);
    const sin2 = Math.sin(angle2);
    const cos3 = Math.cos(angle3);
    const sin3 = Math.sin(angle3);

    let rotated = [...this.vertices4D];

    // More controlled rotations using sine waves
    rotated = rotated.map((vertex) => {
      const [x, y, z, w] = vertex;

      // Combined smoother rotation
      const newX = x * cos1 * cos2 - y * sin1;
      const newY = x * sin1 + y * cos1;
      const newZ = z * cos2 + x * sin2 * 0.5;
      const newW = w * cos3 + x * sin3 * 0.2;

      return [newX, newY, newZ, newW];
    });

    return rotated;
  }

  project4Dto2D(vertices4D) {
    console.log(
      "Edges being drawn:",
      this.getEdges(this.project4Dto2D(vertices4D))
    );

    const distance4D = 30;
    const distance3D = 50;
    const center = [100, 100];
    const projectionScale = 5; // Increased scale

    const projected = vertices4D.map((vertex) => {
      // ... existing projection code ...
      const final = [
        proj3D[0] * z * 2 + center[0],
        proj3D[1] * z * 2 + center[1],
      ];
      console.log(`Vertex projected to: ${final}`);
      return final;
    });

    return projected;
  }

  // Helper: Matrix multiplication
  multiplyMatrixVector(matrix, vector) {
    return matrix.map((row) =>
      row.reduce((sum, value, i) => sum + value * vector[i], 0)
    );
  }

  // Get edges connecting vertices
  getEdges(vertices2D) {
    // Define edges of the hypercube
    const edges = [
      // Edges of the inner cube
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
      // Edges to the outer cube
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
      // Edges connecting the cubes
      [0, 8],
      [1, 9],
      [2, 10],
      [3, 11],
      [4, 12],
      [5, 13],
      [6, 14],
      [7, 15],
    ];

    return edges.map(([i, j]) => ({
      x1: vertices2D[i][0],
      y1: vertices2D[i][1],
      x2: vertices2D[j][0],
      y2: vertices2D[j][1],
    }));
  }
}
