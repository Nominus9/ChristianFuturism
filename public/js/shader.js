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

            // Improved noise function for more organic movement
            float noise(vec2 p) {
                vec2 ip = floor(p);
                vec2 u = fract(p);
                u = u * u * (3.0 - 2.0 * u);
                
                float res = mix(
                    mix(sin(dot(ip, vec2(12.9898,78.233))),
                        sin(dot(ip + vec2(1.0,0.0), vec2(12.9898,78.233))), u.x),
                    mix(sin(dot(ip + vec2(0.0,1.0), vec2(12.9898,78.233))),
                        sin(dot(ip + vec2(1.0,1.0), vec2(12.9898,78.233))), u.x), u.y);
                return 0.5 + 0.5 * res;
            }

            float grid(vec2 uv, float size) {
                vec2 grid = fract(uv * size);
                return (step(0.98, grid.x) + step(0.98, grid.y)) * 0.15;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution;
                
                // Create multiple energy waves with different frequencies
                float time = u_time * 0.2;
                float energy1 = noise(uv * 3.0 + time * vec2(0.5, 0.7));
                float energy2 = noise(uv * 2.0 - time * vec2(0.6, 0.3));
                float energy3 = noise(uv * 4.0 + time * vec2(-0.3, 0.6));
                
                // Combine energies for organic movement
                float energyField = energy1 * 0.5 + energy2 * 0.3 + energy3 * 0.2;
                
                // Create grid with energy influence
                vec2 gridUv = uv * 20.0;
                float gridPattern = grid(gridUv, 1.0);
                
                // Base color with subtle energy glow
                vec3 baseColor = vec3(0.431, 0.957, 0.647); // #6ef4a5
                float energyGlow = smoothstep(0.4, 0.6, energyField) * 0.3;
                
                vec3 color = baseColor * (0.2 + energyGlow);
                color += vec3(gridPattern) * baseColor * (0.7 + energyGlow);
                
                // Subtle opacity variation
                float alpha = 0.2 + 0.1 * energyGlow;
                
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
