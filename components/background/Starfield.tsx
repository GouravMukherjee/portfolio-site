'use client';

import { useEffect, useRef, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  twinkleDelay: number;
  twinkleDuration: number;
  layer: number; // For parallax depth (1 = far, 2 = mid, 3 = near)
  floatAnimation: number; // Which float animation to use (1-5)
  floatDuration: number; // Duration of float animation
  floatDelay: number; // Delay before float animation starts
}

export default function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [scrollY, setScrollY] = useState(0);

  // Generate stars on mount
  useEffect(() => {
    const generateStars = (): Star[] => {
      const starCount = 300; // 250-350 range
      const newStars: Star[] = [];

      // Star color palettes with exact colors from reference
      const colorPalettes = {
        white: ['#e8e8e8', '#f0f0f0', '#ffffff'], // 50% of stars
        lavenderBlue: ['#9898ff', '#a0a0ff', '#a8a8ff'], // 30% of stars
        purplePink: ['#c080ff', '#d090ff', '#c088ff'], // 20% of stars
      };

      for (let i = 0; i < starCount; i += 1) {
        // Determine star color based on distribution
        let color: string;
        const colorRoll = Math.random();
        if (colorRoll < 0.5) {
          // 50% white
          color = colorPalettes.white[Math.floor(Math.random() * colorPalettes.white.length)];
        } else if (colorRoll < 0.8) {
          // 30% lavender-blue
          color = colorPalettes.lavenderBlue[Math.floor(Math.random() * colorPalettes.lavenderBlue.length)];
        } else {
          // 20% purple-pink
          color = colorPalettes.purplePink[Math.floor(Math.random() * colorPalettes.purplePink.length)];
        }

        // Star size distribution - mostly small
        let size: number;
        const sizeRoll = Math.random();
        if (sizeRoll < 0.7) {
          size = 1; // 70% are tiny
        } else if (sizeRoll < 0.9) {
          size = 2; // 20% are small
        } else if (sizeRoll < 0.97) {
          size = 3; // 7% are medium
        } else {
          size = 4; // 3% are slightly larger
        }

        // Opacity distribution
        const opacityRoll = Math.random();
        let opacity: number;
        if (opacityRoll < 0.4) {
          opacity = 0.2; // 40% dim
        } else if (opacityRoll < 0.7) {
          opacity = 0.4; // 30% medium
        } else {
          opacity = 0.6; // 30% bright
        }

        // Parallax layer (for depth effect)
        const layerRoll = Math.random();
        let layer = 1; // Default: far (slowest)
        if (layerRoll >= 0.4 && layerRoll < 0.8) {
          layer = 2; // 40% mid
        } else if (layerRoll >= 0.8) {
          layer = 3; // 20% near (fastest)
        }

        newStars.push({
          id: i,
          x: Math.random() * 100, // Percentage
          y: Math.random() * 100, // Percentage
          size,
          color,
          opacity,
          twinkleDelay: Math.random() * 4, // 0-4 seconds stagger
          twinkleDuration: 3 + Math.random() * 2, // 3-5 seconds
          layer,
          floatAnimation: Math.floor(Math.random() * 5) + 1, // Random float animation 1-5
          floatDuration: 15 + Math.random() * 10, // 15-25 seconds for smooth floating
          floatDelay: Math.random() * 5, // 0-5 seconds delay
        });
      }

      return newStars;
    };

    setStars(generateStars());
  }, []);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Starfield Container */}
      <div
        ref={containerRef}
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{
          zIndex: -1,
          backgroundColor: '#0a0a0a',
        }}
        aria-hidden="true"
      >
        {/* Stars */}
        {stars.map((star) => {
          // Calculate parallax offset based on layer
          const parallaxSpeed = star.layer === 1 ? 0.2 : star.layer === 2 ? 0.4 : 0.6;
          const yOffset = scrollY * parallaxSpeed;

          return (
            <div
              key={star.id}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `calc(${star.y}% + ${yOffset}px)`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size}px ${star.color}`,
                filter: 'blur(0.5px)',
                animation: `twinkle ${star.twinkleDuration}s ease-in-out infinite ${star.twinkleDelay}s, float-${star.floatAnimation} ${star.floatDuration}s ease-in-out infinite ${star.floatDelay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Vignette Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.6) 100%)',
        }}
        aria-hidden="true"
      />
    </>
  );
}
