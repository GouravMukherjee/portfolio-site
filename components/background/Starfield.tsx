'use client';

import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // eslint-disable-next-line consistent-return
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    // eslint-disable-next-line consistent-return
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star configuration
    interface Star {
      x: number;
      y: number;
      radius: number;
      color: string;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }

    const stars: Star[] = [];
    const starCount = 500;

    // Color palettes
    const colors = [
      '#ffffff', '#f0f0f0', '#e8e8e8', // White (60%)
      '#a0a0ff', '#9898ff', '#a8a8ff', // Lavender (25%)
      '#c080ff', '#d090ff', '#c088ff', // Purple-pink (15%)
    ];

    // Create stars
    for (let i = 0; i < starCount; i += 1) {
      const colorIndex = Math.random();
      let color: string;
      if (colorIndex < 0.6) {
        color = colors[Math.floor(Math.random() * 3)];
      } else if (colorIndex < 0.85) {
        color = colors[3 + Math.floor(Math.random() * 3)];
      } else {
        color = colors[6 + Math.floor(Math.random() * 3)];
      }

      const sizeRoll = Math.random();
      let radius: number;
      if (sizeRoll < 0.7) {
        radius = 0.5;
      } else if (sizeRoll < 0.9) {
        radius = 1;
      } else if (sizeRoll < 0.97) {
        radius = 1.5;
      } else {
        radius = 2;
      }

      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color,
        opacity: 0.3 + Math.random() * 0.6,
        twinkleSpeed: 0.001 + Math.random() * 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    let animationFrameId: number;
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Clear canvas
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach((star) => {
        // Update twinkle phase
        const updatedTwinklePhase = star.twinklePhase + star.twinkleSpeed * deltaTime;
        // eslint-disable-next-line no-param-reassign
        star.twinklePhase = updatedTwinklePhase;

        // Calculate twinkle opacity
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(updatedTwinklePhase));

        // Draw star with glow
        ctx.save();
        ctx.globalAlpha = twinkleOpacity * 0.4;
        
        // Glow halo
        const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 4);
        glowGradient.addColorStop(0, star.color);
        glowGradient.addColorStop(0.5, `${star.color}80`);
        glowGradient.addColorStop(1, `${star.color}00`);
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.globalAlpha = twinkleOpacity;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas Starfield */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          backgroundColor: '#0a0a0a',
        }}
        aria-hidden="true"
      />

      {/* Vignette Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.8) 100%)',
        }}
        aria-hidden="true"
      />
    </>
  );
}
