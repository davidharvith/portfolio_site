import { useEffect, useCallback } from "react";
import { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim"; // Using slim package for smaller bundle


const InteractiveBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    initParticlesEngine(particlesInit);
  }, [particlesInit]);

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "#1e90ff" },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "bounce"
          },
          number: { density: { enable: true }, value: 60 }
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

export default InteractiveBackground;
