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
            uniform vec2 u_hypercubePos;
            uniform float u_hypercubeInfluence;

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution;
                
                // Slightly more active movement
                float time = u_time * 0.3; // Slowed down from original
                
                // Subtle flowing effect
                float flow = sin(uv.x * 4.0 + time) * 0.5 + 
                            cos(uv.y * 3.0 - time * 0.7) * 0.5;
                
                // More ethereal glow
                vec3 color = vec3(
                    0.97 + sin(flow * 0.2) * 0.03,  // Subtle red variation
                    0.98 + cos(flow * 0.15) * 0.02,  // Subtle green variation
                    0.99 + sin(flow * 0.1) * 0.01   // Very subtle blue variation
                );

                // Gentle opacity pulsing
                float alpha = 0.3 + sin(time * 0.2) * 0.05;
                
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