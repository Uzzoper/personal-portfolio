"use client";

import React, { useEffect, useRef } from "react";

interface BinaryRainProps {
    className?: string;
}

const DEFAULT_COLORS = ["#22c55e", "#4ade80", "#16a34a", "#86efac"];

const readColors = (el: Element) => {
    const raw = getComputedStyle(el).getPropertyValue("--rain-colors").trim();
    if (!raw) return DEFAULT_COLORS;
    return raw.split(",").map((c) => c.trim());
};

export const BinaryRain: React.FC<BinaryRainProps> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        const columns = Math.floor(width / 20);
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        // Read --rain-fade from the current theme (light/dark) instead of
        // caching it once, so toggling themes doesn't leave stale fade color
        const readFadeColor = () =>
            getComputedStyle(canvas).getPropertyValue("--rain-fade") ||
            "rgba(0, 0, 0, 0.05)";

        let fadeColor = readFadeColor();
        let colors = readColors(canvas);

        // Re-read when the theme class on <html> changes (light <-> dark)
        const themeObserver = new MutationObserver(() => {
            fadeColor = readFadeColor();
            colors = readColors(canvas);
        });
        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        let animationFrameId: number;
        let isAnimating = true;

        const draw = () => {
            ctx.fillStyle = fadeColor;
            ctx.fillRect(0, 0, width, height);

            ctx.font = "15px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = Math.random() > 0.5 ? "1" : "0";
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

                const x = i * 20;
                const y = drops[i] * 20;

                ctx.fillText(text, x, y);

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const animate = () => {
            if (!isAnimating) return;
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Pause animation when tab is hidden, resume when visible
        const handleVisibilityChange = () => {
            if (document.hidden) {
                isAnimating = false;
                cancelAnimationFrame(animationFrameId);
            } else {
                isAnimating = true;
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            isAnimating = false;
            cancelAnimationFrame(animationFrameId);
            themeObserver.disconnect();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={className}
            style={{
                display: "block",
                width: "100%",
                height: "100%",
            }}
        />
    );
};
