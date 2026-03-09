import React, { useRef, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

export default function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { isDarkTheme } = useColorMode();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let width = 0;
        let height = 0;

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            // Adjust particle count based on screen width
            const particleCount = Math.floor(width / 20);
            particles = [];

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 1, // Velocity X
                    vy: (Math.random() - 0.5) * 1, // Velocity Y
                    radius: Math.random() * 2 + 1, // Size
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const particleColor = isDarkTheme ? 'rgba(59, 130, 246, 0.8)' : 'rgba(148, 163, 184, 0.8)';
            const lineColorBase = isDarkTheme ? '59, 130, 246' : '148, 163, 184';

            particles.forEach((p, index) => {
                // Move particle
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        // Opacity based on distance
                        const opacity = 1 - distance / 150;
                        ctx.strokeStyle = `rgba(${lineColorBase}, ${opacity * 0.5})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        init();
        draw();

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDarkTheme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: isDarkTheme ? 0.6 : 0.3, // Subtle effect
            }}
        />
    );
}
