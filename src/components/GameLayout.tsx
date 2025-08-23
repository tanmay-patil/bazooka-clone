import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../hooks/useAnimations';
import OptimizedImage from './OptimizedImage';

interface GameLayoutProps {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    children: React.ReactNode;
}

const GameLayout: React.FC<GameLayoutProps> = ({
    title,
    description,
    ogTitle,
    ogDescription,
    children
}) => {
    useScrollReveal();

    return (
        <div className="d-flex flex-column min-vh-100">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content="/assets/logo_transparent.webp" />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Navigation */}
            <header role="banner">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm bg-white">
                    <div className="container">
                        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
                            <OptimizedImage
                                src="/assets/logo_transparent"
                                alt="Bazonka logo"
                                className="me-2"
                                style={{ width: '48px', height: '48px' }}
                                loading="eager"
                            />
                            <span className="fw-bold text-primary">Bazonka</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link fw-medium text-dark" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-medium text-primary" aria-current="page" to="/games">
                                        Games
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main content */}
            <main className="flex-grow-1 pt-5 mt-4" role="main">
                <section className="py-5">
                    <div className="container text-center">
                        {children}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white py-4 mt-auto" role="contentinfo">
                <div className="container text-center">
                    <small className="text-muted">© 2025 Bazonka. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
};

export default GameLayout;
