import React, { useEffect, useRef } from 'react';

const BackgroundGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        let dots = [];
        let mouse = { x: -1000, y: -1000 };
        let animationFrameId;

        const config = {
            gridSize: 40,
            baseSize: 2,
            activeSize: 6,
            activationRadius: 150,
            fadeSpeed: 0.05,
            baseOpacity: 0.3,
            activeOpacity: 1,
            glowIntensity: 20,
            colorIntensity: 0.7
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.scale(dpr, dpr);
            createDots();
        };

        const createDots = () => {
            dots = [];
            const cols = Math.ceil(window.innerWidth / config.gridSize);
            const rows = Math.ceil(window.innerHeight / config.gridSize);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push({
                        x: i * config.gridSize + config.gridSize / 2,
                        y: j * config.gridSize + config.gridSize / 2,
                        baseX: i * config.gridSize + config.gridSize / 2,
                        baseY: j * config.gridSize + config.gridSize / 2,
                        size: config.baseSize,
                        opacity: config.baseOpacity,
                        active: 0,
                        hue: (i / cols) * 60 + 200,
                        saturation: 70,
                        lightness: 50 + (j / rows) * 20
                    });
                }
            }
        };

        const distance = (x1, y1, x2, y2) => {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        };

        const updateDots = () => {
            dots.forEach(dot => {
                const dist = distance(dot.x, dot.y, mouse.x, mouse.y);

                if (dist < config.activationRadius) {
                    const activation = Math.pow(1 - dist / config.activationRadius, 2);
                    dot.active = Math.max(dot.active, activation);
                } else {
                    dot.active *= (1 - config.fadeSpeed);
                }

                dot.size = config.baseSize + (config.activeSize - config.baseSize) * dot.active;
                dot.opacity = config.baseOpacity + (config.activeOpacity - config.baseOpacity) * dot.active;

                if (dot.active > 0.1) {
                    const angle = Math.atan2(mouse.y - dot.baseY, mouse.x - dot.baseX);
                    const force = dot.active * 3;
                    dot.x = dot.baseX + Math.cos(angle) * force;
                    dot.y = dot.baseY + Math.sin(angle) * force;
                } else {
                    dot.x += (dot.baseX - dot.x) * 0.1;
                    dot.y += (dot.baseY - dot.y) * 0.1;
                }
            });
        };

        const render = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            dots.forEach(dot => {
                if (dot.opacity < 0.01) return;

                ctx.save();
                const saturation = dot.saturation + (100 - dot.saturation) * dot.active * config.colorIntensity;
                const lightness = dot.lightness + (70 - dot.lightness) * dot.active;

                if (dot.active > 0.3) {
                    ctx.shadowBlur = config.glowIntensity * dot.active;
                    ctx.shadowColor = `hsla(${dot.hue}, ${saturation}%, ${lightness}%, ${dot.opacity})`;
                }

                ctx.fillStyle = `hsla(${dot.hue}, ${saturation}%, ${lightness}%, ${dot.opacity})`;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
        };

        const animate = () => {
            updateDots();
            render();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', handleTouchMove);

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-80 dark:opacity-60 pointer-events-none" />;
};

export default BackgroundGrid;
