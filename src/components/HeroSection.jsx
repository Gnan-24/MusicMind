import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        // Softer premium wave values
        const waves = [
            {
                y: height * 0.38,
                length: 0.002,
                amplitude: 45,
                speed: 0.001,
                colorStart: "rgba(138, 43, 226, 1.0)",
                blurColor: "#8a2be2"
            },
            {
                y: height * 0.50,
                length: 0.003,
                amplitude: 38,
                speed: 0.0016,
                colorStart: "rgba(0, 150, 255, 1.0)",
                blurColor: "#0096ff"
            },
            {
                y: height * 0.62,
                length: 0.0015,
                amplitude: 52,
                speed: 0.0013,
                colorStart: "rgba(0, 255, 200, 1.0)",
                blurColor: "#00ffc8"
            }
        ];

        let increment = 0;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, width, height);

            ctx.filter = "blur(12px)";                 // Soft glow
            ctx.globalCompositeOperation = "lighter"; // Light blending

            increment += 0.004;

            waves.forEach((wave, i) => {
                ctx.beginPath();

                for (let x = 0; x < width; x++) {
                    const dy =
                        Math.sin(x * wave.length + increment) * wave.amplitude * 0.6 +
                        Math.sin(x * wave.length * 2 + increment * 1.5) * wave.amplitude * 0.25 +
                        Math.sin(x * 0.008 + i) * 8;

                    ctx.lineTo(x, wave.y + dy);
                }

                const gradient = ctx.createLinearGradient(0, 0, width, 0);
                gradient.addColorStop(0, "rgba(0,0,0,0)");
                gradient.addColorStop(0.3, wave.colorStart);
                gradient.addColorStop(0.7, wave.colorStart);
                gradient.addColorStop(1, "rgba(0,0,0,0)");

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 10; // Much thinner → premium soft waves
                ctx.lineCap = "round";

                ctx.shadowColor = wave.blurColor;
                ctx.shadowBlur = 70;

                ctx.stroke();
            });

            ctx.filter = "none";
            ctx.globalCompositeOperation = "source-over";
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="hero-section">
            <canvas ref={canvasRef} className="hero-canvas" />

            <div className="hero-content">
                <h1 className="hero-title">
                    Welcome back to <br />
                    <span className="hero-highlight">your music journey.</span>
                </h1>
            </div>
        </section>
    );
};

export default HeroSection;
