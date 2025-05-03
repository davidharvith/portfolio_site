import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#1e90ff" }, // or transparent
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        particles: {
          color: { value: "#fff" },
          links: { enable: true, color: "#fff", distance: 150 },
          collisions: { enable: false },
          move: { enable: true, speed: 2, outModes: { default: "bounce" } },
          number: { value: 60 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 5 } }
        }
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0
      }}
    />
  );
};

export default ParticleBackground;
