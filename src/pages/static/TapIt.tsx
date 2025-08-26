import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameLayout from '../../components/GameLayout';

const TapIt: React.FC = () => {
    const navigate = useNavigate();

    const handleEnterRoom = () => {
        navigate('/tap-it/create-room');
    };

    return (
        <GameLayout
            title="Tap It – Game Rules | Bazonka"
            description="Learn how to play Tap It on Bazonka and create a room to challenge friends."
            ogTitle="Tap It – Game Rules"
            ogDescription="Read the rules for Tap It on Bazonka."
        >
            <h1 className="fw-bold text-center mb-4 text-secondary">Tap It – Rules</h1>
            <img
                src="/assets/illustration-tap-it.svg"
                alt="Tap It illustration"
                className="img-fluid mb-4 reveal"
                style={{ maxHeight: '18.75rem' }}
            />
            <ol className="text-start mx-auto mb-4 text-muted" style={{ maxWidth: '37.5rem' }}>
                <li className="mb-2">Split players into two teams.</li>
                <li className="mb-2">Everyone taps their side of the screen as fast as possible.</li>
                <li className="mb-2">The team with the most taps when time runs out wins.</li>
            </ol>
            <div className="mx-auto" style={{ maxWidth: '25rem' }}>
                <button
                    className="btn btn-primary btn-lg w-100 rounded-pill"
                    onClick={handleEnterRoom}
                >
                    Enter Room
                </button>
            </div>
        </GameLayout>
    );
};

export default TapIt;
