import React, { useState } from 'react';
import GameLayout from '../../components/GameLayout';

const CreateRoom: React.FC = () => {
    const [roomName, setRoomName] = useState('');
    const [step, setStep] = useState<1 | 2>(1);
    const [mode, setMode] = useState<'individual' | 'team' | null>(null);

    const handleNext = () => {
        if (roomName.trim()) {
            setStep(2);
        }
    };

    const handleContinue = () => {
        if (mode) {
            // TODO: integrate with Tap It game route
            console.log('Room:', roomName, 'Mode:', mode);
        }
    };

    return (
        <GameLayout
            title="Tap It – Create Room | Bazonka"
            description="Create a room to play Tap It on Bazonka and choose how you want to compete."
            ogTitle="Tap It – Create Room"
            ogDescription="Create a Tap It room and choose individual or team mode."
        >
            {step === 1 && (
                <div className="reveal">
                    <h1 className="fw-bold text-center mb-4 text-secondary">Tap It – Rules</h1>
                    <img
                        src="/assets/illustration-tap-it.svg"
                        alt="Tap It illustration"
                        className="img-fluid mb-4"
                        style={{ maxHeight: '18.75rem' }}
                    />
                    <ol className="text-start mx-auto mb-4 text-muted" style={{ maxWidth: '37.5rem' }}>
                        <li className="mb-2">Split players into two teams.</li>
                        <li className="mb-2">Everyone taps their side of the screen as fast as possible.</li>
                        <li className="mb-2">The team with the most taps when time runs out wins.</li>
                    </ol>
                    <div className="mx-auto" style={{ maxWidth: '25rem' }}>
                        <label htmlFor="roomName" className="form-label fw-medium text-secondary">
                            Enter a room name to play
                        </label>
                        <input
                            type="text"
                            id="roomName"
                            className="form-control form-control-lg mb-3 rounded-pill"
                            placeholder="Room name"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                        />
                        <button
                            className="btn btn-lg w-100 rounded-pill text-white"
                            style={{ background: 'linear-gradient(90deg, #6c63ff 0%, #17a2b8 100%)' }}
                            onClick={handleNext}
                            disabled={!roomName.trim()}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="reveal" style={{ maxWidth: '40rem', margin: '0 auto' }}>
                    <h2 className="fw-bold text-secondary mb-4">Play As</h2>
                    <div className="row g-4 mb-4">
                        <div className="col-12 col-md-6">
                            <div
                                role="button"
                                tabIndex={0}
                                className={`border rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center ${mode === 'individual' ? 'border-primary' : ''}`}
                                style={{ cursor: 'pointer' }}
                                onClick={() => setMode('individual')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') setMode('individual');
                                }}
                            >
                                <img
                                    src="/assets/illustration-individual.svg"
                                    alt="Individual mode"
                                    className="img-fluid mb-3"
                                    style={{ maxHeight: '8rem' }}
                                />
                                <h3 className="h5 fw-medium text-secondary">Individual</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div
                                role="button"
                                tabIndex={0}
                                className={`border rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center ${mode === 'team' ? 'border-primary' : ''}`}
                                style={{ cursor: 'pointer' }}
                                onClick={() => setMode('team')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') setMode('team');
                                }}
                            >
                                <img
                                    src="/assets/illustration-team.svg"
                                    alt="Team mode"
                                    className="img-fluid mb-3"
                                    style={{ maxHeight: '8rem' }}
                                />
                                <h3 className="h5 fw-medium text-secondary">Team</h3>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn-lg w-100 rounded-pill text-white"
                        style={{ background: 'linear-gradient(90deg, #6c63ff 0%, #17a2b8 100%)' }}
                        onClick={handleContinue}
                        disabled={!mode}
                    >
                        Continue
                    </button>
                </div>
            )}
        </GameLayout>
    );
};

export default CreateRoom;
