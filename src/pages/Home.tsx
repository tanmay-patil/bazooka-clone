import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useParticles, useScrollReveal, useConfetti } from '../hooks/useAnimations';
import Toast from '../components/Toast';
import OptimizedImage from '../components/OptimizedImage';

const Home: React.FC = () => {
    const [email, setEmail] = useState('');
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    useParticles('particles-js');
    useScrollReveal();
    const { launchConfetti } = useConfetti();

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedEmail = email.trim();

        if (trimmedEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            launchConfetti();
            setShowSuccessToast(true);
            setEmail('');
        } else {
            setShowErrorToast(true);
        }
    };

    return (
        <>
            <Helmet>
                <title>Bazonka – Real‑time collaborative mini games platform</title>
                <meta
                    name="description"
                    content="Bazonka is a real‑time, collaborative platform for playing fun mini games with friends, family or strangers – no login required and no data stored."
                />
                <meta property="og:title" content="Bazonka – Real‑time collaborative mini games platform" />
                <meta
                    property="og:description"
                    content="Play fun mini games with friends or strangers in real‑time."
                />
                <meta property="og:image" content="/assets/logo_transparent.webp" />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Header / Navigation */}
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
                                    <Link className="nav-link fw-medium text-primary" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-medium text-dark" to="/games">Games</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section with particle background */}
            <section className="hero-gradient position-relative d-flex justify-content-center align-items-center min-vh-100 pt-5">
                {/* Particle container */}
                <div
                    id="particles-js"
                    className="particles-container"
                    aria-hidden="true"
                ></div>
                {/* Content on top of particles */}
                <div className="container position-relative text-center text-white py-5">
                    <h1 className="display-4 fw-bold mb-4">Bazonka</h1>
                    <p className="lead mb-4 mx-auto" style={{ maxWidth: '37.5rem' }}>
                        A real‑time, collaborative platform for playing fun mini games
                    </p>
                    {/* Waitlist form */}
                    <form
                        className="glass-effect p-4 rounded-5 mx-auto mb-4"
                        style={{ maxWidth: '31.25rem' }}
                        onSubmit={handleWaitlistSubmit}
                        aria-label="Waitlist form"
                    >
                        <div className="row g-2">
                            <div className="col-md-8">
                                <label htmlFor="email" className="visually-hidden">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter your email"
                                    aria-label="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill">
                                    Join Waitlist
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* CTA button */}
                    <Link to="/games" className="btn btn-outline-light btn-lg rounded-pill px-4">View Games</Link>
                </div>
            </section>

            {/* Main content sections */}
            <main className="flex-grow-1" role="main">
                {/* What is Bazonka */}
                <section className="py-5 bg-light" role="region">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <OptimizedImage
                                    src="/assets/friends_playing"
                                    alt="Friends playing mini games"
                                    className="img-fluid rounded shadow reveal"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold mb-3 text-secondary">What is Bazonka?</h2>
                                <p className="mb-3 reveal text-muted">
                                    Bazonka is a platform for playing real‑time, collaborative
                                    mini games, bringing friends and strangers together across
                                    devices. Whether you're at home, commuting or hosting a
                                    party, Bazonka delivers instant fun.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-5" role="region">
                    <div className="container">
                        <div className="row align-items-center flex-column-reverse flex-md-row">
                            <div className="col-md-6">
                                <h2 className="fw-bold mb-3 text-secondary">How it works</h2>
                                <p className="mb-3 reveal text-muted">
                                    Simply connect with others to play multiplayer games instantly – no
                                    downloads or installations required. Invite your friends or join
                                    others and start the fun in seconds. Bazonka runs right in your
                                    browser on mobile, tablet and desktop.
                                </p>
                            </div>
                            <div className="col-md-6 mb-4 mb-md-0">
                                <OptimizedImage
                                    src="/assets/network"
                                    alt="Network connecting players"
                                    className="img-fluid rounded shadow reveal"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy features */}
                <section className="py-5 bg-light" role="region">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <OptimizedImage
                                    src="/assets/privacy"
                                    alt="Privacy shield illustration"
                                    className="img-fluid rounded shadow reveal"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold mb-3 text-secondary">Privacy features</h2>
                                <p className="mb-3 reveal text-muted">
                                    Bazonka is designed with privacy in mind. No personal data is
                                    ever stored or tracked, and you can play anonymously without
                                    logging in. Your gaming sessions are transient and leave
                                    no footprint behind.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Simplicity / No Database */}
                <section className="py-5" role="region">
                    <div className="container">
                        <div className="row align-items-center flex-column-reverse flex-md-row">
                            <div className="col-md-6">
                                <h2 className="fw-bold mb-3 text-secondary">
                                    No Database: How Bazonka keeps things simple
                                </h2>
                                <p className="mb-3 reveal text-muted">
                                    Without using any database, Bazonka remains straightforward and
                                    easy to use. Just choose your game, connect with others and
                                    start playing – no accounts, no hassles and nothing to remember.
                                </p>
                            </div>
                            <div className="col-md-6 mb-4 mb-md-0">
                                <OptimizedImage
                                    src="/assets/no_database"
                                    alt="No database illustration"
                                    className="img-fluid rounded shadow reveal"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white py-4 mt-auto" role="contentinfo">
                <div className="container text-center">
                    <small className="text-muted">© 2025 Bazonka. All rights reserved.</small>
                </div>
            </footer>

            {/* Toast notifications */}
            <Toast
                show={showSuccessToast}
                message="Thank you! You have been added to the waitlist."
                type="success"
                onClose={() => setShowSuccessToast(false)}
            />
            <Toast
                show={showErrorToast}
                message="Please enter a valid email address."
                type="error"
                onClose={() => setShowErrorToast(false)}
            />
        </>
    );
};

export default Home;
