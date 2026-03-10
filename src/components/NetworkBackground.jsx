import React, { useEffect, useRef } from 'react';

class NetworkParticle {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 2 + 1;
    }

    update() {
        const { canvas } = this;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    }

    draw() {
        const { ctx } = this;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.fill();
    }
}

const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            const cssWidth = parent ? parent.offsetWidth : window.innerWidth;
            const cssHeight = parent ? parent.offsetHeight : window.innerHeight;
            const dpr = window.devicePixelRatio || 1;

            canvas.width = Math.max(1, Math.floor(cssWidth * dpr));
            canvas.height = Math.max(1, Math.floor(cssHeight * dpr));
            canvas.style.width = `${cssWidth}px`;
            canvas.style.height = `${cssHeight}px`;

            // Draw in CSS pixels.
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particles = [];
        const particleCount = 70; // Adjust for density
        const connectionDistance = 150;

        for (let i = 0; i < particleCount; i++) {
            particles.push(new NetworkParticle(canvas, ctx));
        }

        let animationFrameId;

        const animate = () => {
            // Clear in CSS pixels (because we scaled via setTransform).
            const parent = canvas.parentElement;
            const cssWidth = parent ? parent.offsetWidth : window.innerWidth;
            const cssHeight = parent ? parent.offsetHeight : window.innerHeight;
            ctx.clearRect(0, 0, cssWidth, cssHeight);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        // Opacity based on distance
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.25})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

export default NetworkBackground;
