import { useRef, useMemo, useEffect } from "react";

const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 120;

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const particles = useMemo(() => {
    const seeded = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const seed = i * 7.3 + 13.7;
      const r1 = (Math.sin(seed) * 0.5 + 0.5) % 1;
      const r2 = (Math.sin(seed * 2.1) * 0.5 + 0.5) % 1;
      const r3 = (Math.sin(seed * 3.7) * 0.5 + 0.5) % 1;
      const r4 = (Math.sin(seed * 5.3) * 0.5 + 0.5) % 1;
      const r5 = (Math.sin(seed * 7.1) * 0.5 + 0.5) % 1;
      seeded.push({
        x: r1 * (typeof window !== "undefined" ? window.innerWidth : 1920),
        y: r2 * (typeof window !== "undefined" ? window.innerHeight : 1080),
        vx: (r3 - 0.5) * 0.5,
        vy: (r4 - 0.5) * 0.5,
        r: r5 * 1.5 + 0.5,
      });
    }
    return seeded;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.25;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${0.3 + p.r * 0.2})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
