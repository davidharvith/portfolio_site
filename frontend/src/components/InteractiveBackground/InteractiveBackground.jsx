// InteractiveBackground.jsx
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./styles.css"; // Import your CSS styles if needed
const InteractiveBackground = ({ children }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesConfig = {
    fullScreen: { enable: false },
    background: { color: "#000000" },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    particles: {
      color: { value: "#FFFFFF" },
      links: { color: "#FFFFFF", distance: 150, enable: true, opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1 },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    }
  };

  if (!init) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px", // Match your content height
        overflow: "hidden"
      }}
    >
      <Particles
        id="tsparticles"
        options={particlesConfig}
        className="particles-canvas" // Add class for CSS targeting
      />
      <div style={{ 
        position: "relative", 
        zIndex: 1,
        pointerEvents: "auto" // Explicitly enable interactions
      }}>
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;