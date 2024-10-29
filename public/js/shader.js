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
            uniform vec2 u_mouse;

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution;

                // New center for the glow effect, resembling the sun
                vec2 center = vec2(0.777, 0.888) + (u_mouse - vec2(0.5)) * 0.02; // Slight movement with mouse
                float dist = distance(uv, center);

                // Create a larger, more subtle bloom effect for a faint outward glow
                float bloomIntensity = pow(dist, -1.0) * 1.2; // Inverse distance for outward glow, enhanced intensity

                // Very subtle rippling effect to add dynamic movement
                float ripple = sin(u_time * 0.1 + dist * 4.0) * 0.01;
                bloomIntensity += ripple;

                // Enhanced iridescence for a gentle golden glow, directed outward
                float iridescence = sin(u_time * 0.05 + dist * 8.0) * 0.02 + 0.98;

                // Color calculations for the golden light
                vec3 haloColor = vec3(1.0, 0.9, 0.5) * bloomIntensity * iridescence; // Softer golden light

                // Add faint color variation for subtle iridescence
                haloColor += vec3(0.05, 0.08, 0.1) * sin(u_time + dist * 10.0) * bloomIntensity * 0.05;

                gl_FragColor = vec4(clamp(haloColor, 0.0, 1.0), 1.0);
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

function main() {
  const canvas = document.getElementById("glCanvas");
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
}

main();
