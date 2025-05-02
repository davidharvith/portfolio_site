import React, { useRef, useEffect, useState } from 'react';
import './styles.css';

const InteractiveBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const calculateContentHeight = () => {
      if (containerRef.current) {
        const header = containerRef.current.querySelector('header');
        const about = containerRef.current.querySelector('#about');
        const totalHeight = header.offsetHeight + about.offsetHeight + 100; // +100px padding
        setContentHeight(totalHeight);
      }
    };

    calculateContentHeight();
    window.addEventListener('resize', calculateContentHeight);
    return () => window.removeEventListener('resize', calculateContentHeight);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.fillStyle = '#1e90ff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (mousePos.x > 0 && mousePos.y > 0) {
        const gradient = ctx.createRadialGradient(
          mousePos.x, mousePos.y, 20,
          mousePos.x, mousePos.y, 100
        );
        gradient.addColorStop(0, 'rgba(0,0,0,0.2)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = contentHeight;
    };

    resizeCanvas();
    animate();
    return () => cancelAnimationFrame(animate);
  }, [contentHeight, mousePos]);

  return (
    <div 
      ref={containerRef}
      className="interactive-background"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
    >
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;
