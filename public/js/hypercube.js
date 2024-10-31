// hypercube.js
export class HypercubeGeometry {
  // Keep constructor same as before...

  constructor() {
    const scale = 25;
    this.isHovered = false;
    // Initialize vertices4D right here in constructor
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
    this.transitionProgress = 0;
    this.state = "rotating"; // 'rotating', 'transitioning', 'cruciform'
    console.log("Initialized vertices:", this.vertices4D); // Debug
  }

  setHovered(value) {
    this.isHovered = value;
    if (value) {
      this.state = "transitioning";
      this.transitionProgress = 0;
    } else {
      this.state = "rotating";
    }
  }

  rotate4D(angle1, angle2, angle3) {
    const time = Date.now() / 2000; // Slower rotation

    // Simple rotation
    return this.vertices4D.map((vertex) => {
      const [x, y, z, w] = vertex;

      // Just do a simple XY rotation for now
      const angle = time;
      const rotX = x * Math.cos(angle) - y * Math.sin(angle);
      const rotY = x * Math.sin(angle) + y * Math.cos(angle);

      return [rotX, rotY, z, w];
    });
  }

  project4Dto2D(vertices4D) {
    const center = [150, 150];

    return vertices4D.map((vertex) => {
      const [x, y, z, w] = vertex;

      // Simple projection - just use x and y for now
      return [x + center[0], y + center[1]];
    });
  }
  /*
  project4Dto2D(vertices4D) {
    const center = [150, 150];
    const distance3D = 200;
    const distance4D = 300;

    // Smooth transition progress
    if (this.state === "transitioning") {
      this.transitionProgress += 0.02; // Adjust for speed
      if (this.transitionProgress >= 1) {
        this.state = "cruciform";
      }
    }

    return vertices4D.map((vertex) => {
      let [x, y, z, w] = vertex;

      if (this.state !== "rotating") {
        // Interpolate between current position and cruciform
        const progress = Math.min(1, this.transitionProgress);
        const cruciformX = x * (1 + Math.abs(w) * 0.5);
        const cruciformY = w * 50;

        x = x * (1 - progress) + cruciformX * progress;
        y = y * (1 - progress) + cruciformY * progress;
      }

      // Regular projection code...
      const w_factor = 1 / Math.max(1, distance4D - w);
      x *= w_factor;
      y *= w_factor;
      z *= w_factor;

      const z_factor = 1 / (1 - z / distance3D);
      return [x * z_factor + center[0], y * z_factor + center[1]];
    });
  }
  
  project4Dto2D(vertices4D) {
    const center = [150, 150];
    const distance3D = 200;
    const distance4D = 300;

    console.log("Incoming vertices4D:", vertices4D); // Check input

    const projected = vertices4D.map((vertex) => {
      let [x, y, z, w] = vertex;

      console.log("Processing vertex:", { x, y, z, w }); // Check each vertex

      const w_factor = 1 / Math.max(1, distance4D - w);
      const projectedX = x * w_factor;
      const projectedY = y * w_factor;
      const projectedZ = z * w_factor;

      console.log("After w projection:", {
        x: projectedX,
        y: projectedY,
        z: projectedZ,
      });

      const z_factor = 1 / Math.max(1, distance3D - projectedZ);
      const finalX = projectedX * z_factor + center[0];
      const finalY = projectedY * z_factor + center[1];

      console.log("Final position:", { x: finalX, y: finalY });

      return [finalX, finalY];
    });

    console.log("Final projected points:", projected);
    return projected;
  }
    */

  getEdges(vertices2D) {
    // Define edges for full hypercube structure
    const edgeIndices = [
      // Inner cube
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

      // Outer cube
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

      // Connections between cubes
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
}
