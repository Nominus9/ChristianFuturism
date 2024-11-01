// hypercube.js
class Hypercube {
  constructor() {
    this.vertices = this.createVertices();
    this.statePosition = { x: 0, y: 0, z: 0 };
    this.screenPosition = { x: 0.5, y: 0.5 };
  }

  createVertices() {
    const size = 100;
    return [
      [-size, -size, -size, -size],
      [size, -size, -size, -size],
      [size, size, -size, -size],
      [-size, size, -size, -size],
      [-size, -size, size, -size],
      [size, -size, size, -size],
      [size, size, size, -size],
      [-size, size, size, -size],
      [-size, -size, -size, size],
      [size, -size, -size, size],
      [size, size, -size, size],
      [-size, size, -size, size],
      [-size, -size, size, size],
      [size, -size, size, size],
      [size, size, size, size],
      [-size, size, size, size],
    ];
  }

  project4Dto2D(vertices4D) {
    this.updateState();
    const center = [0, 0];
    const distance3D = 1000;
    const distance4D = 1500;

    return vertices4D.map((vertex) => {
      let [x, y, z, w] = vertex;
      const w_factor = distance4D / (distance4D - w);
      const z_factor = distance3D / (distance3D - z);

      x *= w_factor;
      y *= w_factor;
      z *= w_factor;

      return [x * z_factor + center[0], y * z_factor + center[1]];
    });
  }

  getEdges(vertices2D) {
    const edgeIndices = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
      [8, 9],
      [9, 10],
      [10, 11],
      [11, 8],
      [12, 13],
      [13, 14],
      [14, 15],
      [15, 12],
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

    return edgeIndices.map(([i, j]) => ({
      x1: vertices2D[i][0],
      y1: vertices2D[i][1],
      x2: vertices2D[j][0],
      y2: vertices2D[j][1],
    }));
  }

  updateState() {
    const time = Date.now() / 1000;
    this.statePosition = {
      x: Math.sin(time * 0.5) * 0.5,
      y: Math.cos(time * 0.3) * 0.5,
      z: 0,
    };

    const projected = this.project4Dto2D([[0, 0, 0, 0]])[0];
    this.screenPosition = {
      x: projected[0] / window.innerWidth + 0.5,
      y: projected[1] / window.innerHeight + 0.5,
    };
  }

  getScreenPosition() {
    return this.screenPosition;
  }
}

export { Hypercube };
