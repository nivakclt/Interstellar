import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function AccretionDisk() {
  const diskRef = useRef();

  useFrame((state) => {
    if (!diskRef.current) return;

    diskRef.current.rotation.z =
      state.clock.elapsedTime * 0.18;
  });

const uniforms = useRef({
  uTime: { value: 0 },
});

useFrame((state) => {
  uniforms.current.uTime.value =
    state.clock.elapsedTime;
});

  return (
    <mesh
      ref={diskRef}
      rotation={[Math.PI / 2.55, 0.18, 0]}
      scale={[1, 0.42, 1]}
    >
      <planeGeometry args={[9, 9, 1, 1]} />

 <shaderMaterial
  transparent
  depthWrite={false}
  blending={THREE.AdditiveBlending}
  uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;

          void main() {
            vUv = uv;

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;

          varying vec2 vUv;

          void main() {

            vec2 p = vUv - 0.5;

            float r = length(p) * 2.0;
            float angle = atan(p.y, p.x);

            float inner =
              smoothstep(0.20, 0.48, r);

            float outer =
              1.0 - smoothstep(0.62, 1.05, r);

            float radial = inner * outer;

            float spiral =
              sin(
                angle * 7.0
                - uTime * 2.5
                + r * 18.0
              );

            float spiral2 =
              sin(
                angle * 13.0
                + uTime * 1.4
                + r * 27.0
              );

            float energy =
              0.55 +
              spiral * 0.20 +
              spiral2 * 0.10;

            float glow =
              pow(
                max(0.0, 1.0 - abs(r - 0.47) * 4.0),
                2.0
              );

            float alpha =
              radial *
              (0.35 + glow * 1.4) *
              energy;

            vec3 warm =
              vec3(1.0, 0.57, 0.18);

            vec3 bright =
              vec3(1.0, 0.85, 0.55);

            vec3 color =
              mix(warm, bright, glow);

            gl_FragColor =
              vec4(color, alpha);
          }
        `}
      />
    </mesh>
  );
}

function BlackHole() {
  const group = useRef();
  const disk = useRef();
  const halo = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y =
        t * 0.055;

      group.current.rotation.z =
        t * 0.025;
    }

    if (disk.current) {
      disk.current.rotation.z =
        t * 0.08;
    }

    if (halo.current) {
      const pulse =
        1 + Math.sin(t * 1.2) * 0.025;

      halo.current.scale.setScalar(
        pulse
      );
    }
  });

  return (
    <group
      ref={group}
      position={[3.0, 0.1, -5]}
      scale={1.18}
    >

      {/* MASSIVE GLOW */}
      <mesh ref={halo} scale={2.2}>
        <sphereGeometry
          args={[1.45, 64, 64]}
        />

        <meshBasicMaterial
          color="#b97832"
          transparent
          opacity={0.045}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* EVENT HORIZON */}
      <mesh>
        <sphereGeometry
          args={[1.42, 96, 96]}
        />

        <meshBasicMaterial
          color="#000000"
        />
      </mesh>

      {/* INNER SHADOW GLOW */}
      <mesh scale={1.18}>
        <sphereGeometry
          args={[1.42, 64, 64]}
        />

        <meshBasicMaterial
          color="#2b1708"
          transparent
          opacity={0.10}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* MAIN ACCRETION DISK */}
      <AccretionDisk />

      {/* INNER DISK RINGS */}
      <mesh
        rotation={[
          Math.PI / 2.5,
          0.12,
          0.18,
        ]}
      >
        <torusGeometry
          args={[1.72, 0.13, 32, 256]}
        />

        <meshBasicMaterial
          color="#efb96d"
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh
        rotation={[
          Math.PI / 2.35,
          -0.12,
          -0.08,
        ]}
      >
        <torusGeometry
          args={[2.1, 0.085, 24, 256]}
        />

        <meshBasicMaterial
          color="#d08a3e"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh
        rotation={[
          Math.PI / 2.2,
          0.08,
          0.2,
        ]}
      >
        <torusGeometry
          args={[2.65, 0.045, 20, 256]}
        />

        <meshBasicMaterial
          color="#b87735"
          transparent
          opacity={0.20}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* OUTER GRAVITATIONAL RING */}
      <mesh
        rotation={[
          Math.PI / 2.15,
          0.3,
          0,
        ]}
      >
        <torusGeometry
          args={[3.15, 0.025, 16, 256]}
        />

        <meshBasicMaterial
          color="#9c6733"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* ORBITING LIGHT */}
      <mesh position={[2.4, 0.7, 0]}>
        <sphereGeometry
          args={[0.035, 16, 16]}
        />

        <meshBasicMaterial
          color="#ffd89b"
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function SpaceDust() {
  return (
    <>
      <Sparkles
        count={900}
        scale={[35, 22, 45]}
        size={1.1}
        speed={0.12}
        opacity={0.35}
        color="#ffffff"
      />

      <Sparkles
        count={350}
        scale={[25, 18, 35]}
        size={1.8}
        speed={0.22}
        opacity={0.28}
        color="#d7a45b"
      />
    </>
  );
}

function ScrollCamera() {
  const { camera } = useThree();

  const scroll = useRef(0);
  const targetScroll = useRef(0);

  useEffect(() => {
    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      targetScroll.current =
        maxScroll > 0
          ? window.scrollY / maxScroll
          : 0;
    };

    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );

      window.removeEventListener(
        "resize",
        updateScroll
      );
    };
  }, []);

  useFrame((state) => {
    scroll.current +=
      (targetScroll.current -
        scroll.current) *
      0.035;

    const p = scroll.current;

    /* MOUSE PARALLAX */
    const mouseX =
      state.pointer.x * 0.35;

    const mouseY =
      state.pointer.y * 0.22;

    /* CINEMATIC CAMERA */
    const targetX =
      mouseX + Math.sin(p * Math.PI) * 0.7;

    const targetY =
      mouseY -
      p * 0.4;

    const targetZ =
      11 -
      p * 3.8;

    camera.position.x +=
      (targetX - camera.position.x) *
      0.035;

    camera.position.y +=
      (targetY - camera.position.y) *
      0.035;

    camera.position.z +=
      (targetZ - camera.position.z) *
      0.035;

    camera.rotation.z =
      Math.sin(p * Math.PI) *
      0.025;

    camera.lookAt(
      0,
      0,
      -4
    );
  });

  return null;
}

function BlackHoleScrollMotion() {
  const blackHole = useRef();

  const scroll = useRef(0);
  const targetScroll = useRef(0);

  useEffect(() => {
    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      targetScroll.current =
        maxScroll > 0
          ? window.scrollY / maxScroll
          : 0;
    };

    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );
  }, []);

  useFrame(() => {
    if (!blackHole.current) return;

    scroll.current +=
      (targetScroll.current -
        scroll.current) *
      0.03;

    const p = scroll.current;

    const x =
      3.0 -
      p * 5.2;

    const y =
      0.1 +
      Math.sin(p * Math.PI * 2) *
        0.6;

    const z =
      -5 +
      p * 1.8;

    const scale =
      1.18 +
      p * 0.72;

    blackHole.current.position.x +=
      (x - blackHole.current.position.x) *
      0.035;

    blackHole.current.position.y +=
      (y - blackHole.current.position.y) *
      0.035;

    blackHole.current.position.z +=
      (z - blackHole.current.position.z) *
      0.035;

    const currentScale =
      blackHole.current.scale.x;

    const nextScale =
      currentScale +
      (scale - currentScale) *
        0.035;

    blackHole.current.scale.setScalar(
      nextScale
    );

    blackHole.current.rotation.y +=
      0.0025 +
      p * 0.006;
  });

  return (
    <group ref={blackHole}>
      <BlackHole />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.08} />

      <Stars
        radius={120}
        depth={80}
        count={6000}
        factor={2.8}
        saturation={0}
        fade
        speed={0.35}
      />

      <SpaceDust />

      <BlackHoleScrollMotion />

      <ScrollCamera />
    </>
  );
}

function SpaceBackground() {
  return (
    <div className="space-background">
      <Canvas
        camera={{
          position: [0, 0, 11],
          fov: 48,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <color
          attach="background"
          args={["#010203"]}
        />

        <fog
          attach="fog"
          args={[
            "#010203",
            8,
            34,
          ]}
        />

        <Scene />
      </Canvas>

      <div className="space-vignette" />
    </div>
  );
}

export default SpaceBackground;