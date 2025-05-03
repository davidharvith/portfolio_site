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
    background: { color: "#0a0a23" },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["connect", "grab"] // Combined effects
        }
      },
      modes: {

        connect: {
          distance: 150,  // Connection radius from cursor
          links: {
            opacity:1 , // Link opacity to cursor
            color: "#FFFFFF",
            width: 1
          }
        },
        grab: {
          distance: 150,
          links: {
          opacity: 1,
          color: "#FFFFFF"
          }
        }
      }
    },
    particles: {
      color: { value: "#FFFFFF" },
      links: {
        color: "#FFFFFF",
        distance: 120,    // Reduced distance between particles
        enable: true,
        opacity: 0.2,     // Lower opacity for particle-particle links
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,       // Slightly faster movement
        outModes: {
          default: "bounce" // Particles bounce at edges
        }
      },
      number: {
        density: { enable: true, area: 800 },
        value: 100         // More particles for more connections
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } }
    }
  };

  if (!init) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "85vh", // Match your content height
        marginBottom: "120px",
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