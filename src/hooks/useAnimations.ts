import { useEffect, useCallback } from 'react';

// Hook for particles.js initialization with modern async handling
export const useParticles = (elementId: string) => {
    useEffect(() => {
        const initParticles = async () => {
            const particleContainer = document.getElementById(elementId);
            if (!particleContainer || typeof window.particlesJS === 'undefined') return;

            window.particlesJS(elementId, {
                particles: {
                    number: {
                        value: 60,
                        density: { enable: true, value_area: 800 }
                    },
                    color: { value: '#ffffff' },
                    shape: {
                        type: 'circle',
                        stroke: { width: 0, color: '#000000' },
                        polygon: { nb_sides: 5 }
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: { enable: false }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: { enable: false }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1.6,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        attract: { enable: false }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'repulse' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true
                    },
                    modes: {
                        repulse: { distance: 80, duration: 0.4 },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
        };

        initParticles();
    }, [elementId]);
};

// Hook for ScrollReveal animations with modern syntax
export const useScrollReveal = () => {
    useEffect(() => {
        const initScrollReveal = () => {
            if (typeof window.ScrollReveal === 'undefined') return;

            const sr = window.ScrollReveal();
            sr.reveal('.reveal', {
                distance: '40px',
                duration: 800,
                easing: 'ease-out',
                origin: 'bottom',
                interval: 100,
                viewFactor: 0.2
            });
        };

        initScrollReveal();
    }, []);
};

// Hook for confetti animation with modern features
export const useConfetti = () => {
    const launchConfetti = useCallback(() => {
        if (typeof window.confetti === 'undefined') return;

        const count = 200;
        const defaults = { origin: { y: 0.7 } };

        const fire = (particleRatio: number, opts: Record<string, any>) => {
            window.confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        };

        // Launch multiple confetti bursts using modern array methods
        [
            { ratio: 0.25, opts: { spread: 26, startVelocity: 55 } },
            { ratio: 0.2, opts: { spread: 60 } },
            { ratio: 0.35, opts: { spread: 100, decay: 0.91, scalar: 0.8 } },
            { ratio: 0.1, opts: { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 } },
            { ratio: 0.1, opts: { spread: 120, startVelocity: 45 } }
        ].forEach(({ ratio, opts }) => fire(ratio, opts));
    }, []);

    return { launchConfetti };
};
