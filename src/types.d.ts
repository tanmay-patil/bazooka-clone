// Global type declarations for external libraries loaded via CDN

declare global {
    interface Window {
        particlesJS: (
            elementId: string,
            config: any
        ) => void;
        ScrollReveal: () => {
            reveal: (selector: string, options?: any) => void;
        };
        bootstrap: {
            Toast: new (element: HTMLElement) => {
                show: () => void;
                hide: () => void;
            };
        };
        confetti: (options?: any) => void;
    }
}

export { };
