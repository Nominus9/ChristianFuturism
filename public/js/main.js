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

  const u_hypercubePosLocation = gl.getUniformLocation(
    program,
    "u_hypercubePos"
  );
  const u_hypercubeInfluenceLocation = gl.getUniformLocation(
    program,
    "u_hypercubeInfluence"
  );

  function render(time) {
    time *= 0.001; // Convert to seconds

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform1f(u_timeLocation, time);
    gl.uniform2f(u_resolutionLocation, gl.canvas.width, gl.canvas.height);

    let hypercubePos = [0.5, 0.5];
    let hypercubeInfluence = 0.0;

    const hypercubeElement = document.querySelector(
      ".tesseract-container-center"
    );
    if (hypercubeElement) {
      const rect = hypercubeElement.getBoundingClientRect();
      hypercubePos = [
        (rect.left + rect.width / 2) / window.innerWidth,
        1.0 - (rect.top + rect.height / 2) / window.innerHeight,
      ];
      hypercubeInfluence = 0.3 + Math.sin(time * 0.5) * 0.1;
    }

    gl.uniform2f(u_hypercubePosLocation, hypercubePos[0], hypercubePos[1]);
    gl.uniform1f(u_hypercubeInfluenceLocation, hypercubeInfluence);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
