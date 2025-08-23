import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../../hooks/useAnimations';
import OptimizedImage from '../../components/OptimizedImage';

const Games: React.FC = () => {
    useScrollReveal();

    return (
        <div className="d-flex flex-column min-vh-100">
            <Helmet>
                <title>Bazonka Games – Play mini games online</title>
                <meta
                    name="description"
                    content="Explore the collection of fun, real‑time mini games available on Bazonka."
                />
                <meta property="og:title" content="Bazonka Games" />
                <meta
                    property="og:description"
                    content="Explore the collection of fun, real‑time mini games available on Bazonka."
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
                        <div className="d-flex">
                            <Link to="/" className="btn btn-outline-primary me-2">Home</Link>
                            <Link to="/games" className="btn btn-primary">Games</Link>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main content */}
            <main className="flex-grow-1 pt-5 mt-4" role="main">
                {/* Games section */}
                <section className="py-5" role="region">
                    <div className="container">
                        <h1 className="fw-bold text-center mb-5 text-secondary">Games</h1>
                        <div className="row g-4">
                            {/* Game 1 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0 reveal">
                                    <div className="bg-light p-4" style={{ height: '10rem' }}>
                                        <OptimizedImage
                                            src="/assets/tap_it"
                                            className="card-img-top h-100 w-100"
                                            alt="Tap It game illustration"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h3 className="card-title h5 text-secondary">Tap It</h3>
                                        <p className="card-text text-muted flex-grow-1">
                                            Split into teams and tap your side of the screen as fast as
                                            possible. Most taps wins!
                                        </p>
                                        <Link
                                            to="/tapit"
                                            className="btn btn-primary rounded-pill mt-auto"
                                        >
                                            Read Rules & Play
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Game 2 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0 reveal">
                                    <div className="bg-light p-4" style={{ height: '10rem' }}>
                                        <OptimizedImage
                                            src="/assets/tambola"
                                            className="card-img-top h-100 w-100"
                                            alt="Tambola game illustration"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h3 className="card-title h5 text-secondary">Tambola</h3>
                                        <p className="card-text text-muted flex-grow-1">
                                            Classic number-matching game. Mark your ticket and be the
                                            first to complete a pattern!
                                        </p>
                                        <Link
                                            to="/tambola"
                                            className="btn btn-primary rounded-pill mt-auto"
                                        >
                                            Read Rules & Play
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Game 3 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0 reveal">
                                    <div className="bg-light p-4" style={{ height: '10rem' }}>
                                        <OptimizedImage
                                            src="/assets/tug_of_war"
                                            className="card-img-top h-100 w-100"
                                            alt="Tug of War game illustration"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h3 className="card-title h5 text-secondary">Tug of War</h3>
                                        <p className="card-text text-muted flex-grow-1">
                                            Teams compete to pull the rope to their side by clicking
                                            rapidly. First to goal wins!
                                        </p>
                                        <Link
                                            to="/tugofwar"
                                            className="btn btn-primary rounded-pill mt-auto"
                                        >
                                            Read Rules & Play
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Game 4 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0 reveal">
                                    <div className="bg-light p-4" style={{ height: '10rem' }}>
                                        <OptimizedImage
                                            src="/assets/poker_number"
                                            className="card-img-top h-100 w-100"
                                            alt="Poker Number game illustration"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h3 className="card-title h5 text-secondary">Poker Number</h3>
                                        <p className="card-text text-muted flex-grow-1">
                                            Each player gets random numbers. Highest number wins each
                                            round in this luck-based game!
                                        </p>
                                        <Link
                                            to="/pokernumber"
                                            className="btn btn-primary rounded-pill mt-auto"
                                        >
                                            Read Rules & Play
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white py-3 mt-auto" role="contentinfo">
                <div className="container text-center">
                    <small>© 2025 Bazonka. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
};

export default Games;
