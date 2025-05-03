// components/InteractiveBackground/InteractiveBackground.jsx
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const InteractiveBackground = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    background: { 
      color: "#000000" // Set to match your site's background
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: { value: "#FFFFFF" },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false
      },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;
