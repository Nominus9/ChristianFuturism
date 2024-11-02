const vertexShaderSource = `
            attribute vec4 a_position;
            void main() {
                gl_Position = a_position;
            }
        `;

const fragmentShaderSource = `
            precision highp float;
            uniform float u_time;
            uniform vec2 u_resolution;

            // Grid helper function
            float grid(vec2 uv, float size) {
                vec2 grid = fract(uv * size);
                float gridLines = step(0.98, grid.x) + step(0.98, grid.y);
                return gridLines * 0.3; // Subtle grid intensity
            }

            // Wave function
            float wave(vec2 uv, float time) {
                // 30 second cycle
                float slowTime = time * 0.033; 
                float wave = sin(slowTime - (uv.x + uv.y) * 3.0) * 0.5 + 0.5;
                return wave;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution;
                
                // Isometric transformation
                mat2 iso = mat2(
                    1.0, 0.5,  // First column
                    -1.0, 0.5   // Second column
                ) * 1.5;
                vec2 isoUv = uv * iso;
                
                // Base green color (#6ef4a5)
                vec3 baseColor = vec3(0.431, 0.957, 0.647);
                
                // Time-based flow
                float time = u_time * 0.3;
                float flow = sin(uv.x * 4.0 + time) * 0.5 + 
                             cos(uv.y * 3.0 - time * 0.7) * 0.5;
                
                // Grid with wave effect
                float gridWave = wave(isoUv, u_time);
                float gridPattern = grid(isoUv, 20.0) * gridWave;
                
                // Combine effects
                vec3 color = baseColor * (0.5 + 0.5 * sin(flow));
                color += vec3(gridPattern) * baseColor; // Add grid to the glow
                
                // Gentle opacity pulsing
                float alpha = 0.3 + 0.1 * sin(time);
                
                gl_FragColor = vec4(color, alpha);
            }
        `;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#glCanvas");
  if (!canvas) {
    console.error("No canvas found!");
    return;
  }

  // Set canvas size to window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const gl = canvas.getContext("webgl");
  if (!gl) {
    console.error("WebGL not supported");
    return;
  }

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );
  const program = createProgram(gl, vertexShader, fragmentShader);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );

  const positionLocation = gl.getAttribLocation(program, "a_position");

  const u_timeLocation = gl.getUniformLocation(program, "u_time");
  const u_resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  const u_mouseLocation = gl.getUniformLocation(program, "u_mouse");

  let mousePos = [0.5, 0.5];

  // Update mouse position
  window.addEventListener("mousemove", (e) => {
    mousePos = [
      e.clientX / window.innerWidth,
      1.0 - e.clientY / window.innerHeight,
    ];
  });

  function render(time) {
    time *= 0.001; // Convert to seconds

    // Make canvas responsive to resizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform1f(u_timeLocation, time);
    gl.uniform2f(u_resolutionLocation, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(u_mouseLocation, mousePos[0], mousePos[1]);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  console.log("Shader initialized"); // Debug log
});
