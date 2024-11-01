uniform vec2 hypercubePosition;
uniform float hypercubeInfluence;

float noise = snoise(vec3(
    (vUv.x + time * 0.1) * 3.0, 
    (vUv.y + time * 0.1) * 3.0,
    time * 0.2
));

vec2 toHypercube = vUv - hypercubePosition;
float dist = length(toHypercube);
float ripple = sin(dist * 20.0 - time * 2.0) * 0.5 + 0.5;
ripple *= smoothstep(0.5, 0.0, dist) * hypercubeInfluence;

noise = mix(noise, ripple, hypercubeInfluence);

float hypercubeDist = distance(vUv, hypercubePosition);
float hypercubeGlow = (1.0 - smoothstep(0.0, 0.3, hypercubeDist)) * hypercubeInfluence;

vec3 haloColor = vec3(0.0, 1.0, 0.0) * hypercubeGlow * 0.5;

noise = mix(noise, ripple, hypercubeInfluence); 