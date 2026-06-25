import React, { useEffect, useRef } from 'react';

interface StaticStardustProps {
  count?: number;
  className?: string;
  colors?: string[];
}

export const StaticStardust: React.FC<StaticStardustProps> = ({
  count = 1000,
  className = "",
  colors = ['#ffffff', '#10B981', '#1D6B6E']
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // We store the particles array outside the draw function so they don't randomly teleport on resize
    let particles: { x: number; y: number; r: number; color: string; alpha: number; isShiny: boolean }[] = [];
    
    const initParticles = (width: number, height: number) => {
      particles = [];
      const ratio = width / height;
      
      // Calculate a perfect mathematically evenly distributed grid
      const gridY = Math.max(1, Math.floor(Math.sqrt(count / ratio)));
      const gridX = Math.max(1, Math.floor(count / gridY));
      
      const cellW = width / gridX;
      const cellH = height / gridY;

      for (let y = 0; y < gridY; y++) {
        for (let x = 0; x < gridX; x++) {
          // Drop exactly one particle into this grid cell with a random jitter offset
          const px = (x * cellW) + (Math.random() * cellW);
          const py = (y * cellH) + (Math.random() * cellH);
          
          const radius = Math.random() * 1.5 + 0.5; // Random size between 0.5 and 2.0
          const color = colors[Math.floor(Math.random() * colors.length)];
          const alpha = Math.random() * 0.6 + 0.2; // Opacity between 0.2 and 0.8
          const isShiny = Math.random() > 0.85; // 15% chance to be a shiny, glowing star
          
          particles.push({ x: px, y: py, r: radius, color, alpha, isShiny });
        }
      }
    };

    const draw = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      
      // Retina high-DPI scaling fix
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Re-initialize particles if the grid size vastly changed, but usually we just draw them relative to percentages
      // Actually, to guarantee no edge-gaps on stretching, we regenerate the grid on resize.
      initParticles(rect.width, rect.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        
        if (p.isShiny) {
          ctx.shadowBlur = p.r * 10; // Intense glow
          ctx.shadowColor = p.color; // Colored glow aura
          ctx.fillStyle = '#ffffff'; // Super-bright white core
          ctx.globalAlpha = Math.min(1, p.alpha * 1.8); // Boost opacity for shiny stars
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
        }
        
        ctx.fill();
      });
    };

    draw();

    const observer = new ResizeObserver(() => {
      // Use requestAnimationFrame to prevent 'ResizeObserver loop limit exceeded' errors
      window.requestAnimationFrame(draw);
    });
    
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [count, colors]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      style={{ width: '100%', height: '100%' }}
    />
  );
};
