// In your render loop or wherever you're updating the shader uniforms
const hypercubePos = hypercube.getScreenPosition();
shader.uniforms.hypercubePosition.value.set(hypercubePos.x, hypercubePos.y);
shader.uniforms.hypercubeInfluence.value = 0.3 + Math.sin(time * 0.5) * 0.1;
