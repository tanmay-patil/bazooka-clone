import React, { useState } from 'react';
import GameLayout from '../../components/GameLayout';

const CreateRoom: React.FC = () => {
    const [step, setStep] = useState<'mode' | 'teams'>('mode');
    const [mode, setMode] = useState<'individual' | 'team' | null>(null);
    const [teams, setTeams] = useState<string[]>(['Team 1', 'Team 2']);

    const handleContinue = () => {
        if (mode === 'team') {
            setStep('teams');
        } else if (mode === 'individual') {
            // TODO: integrate with Tap It game route
            console.log('Mode:', mode);
        }
    };

    const handleAddTeam = () => {
        if (teams.length < 5) {
            setTeams([...teams, `Team ${teams.length + 1}`]);
        }
    };

    const handleRemoveTeam = (index: number) => {
        if (teams.length > 2 && window.confirm('Remove this team?')) {
            setTeams(teams.filter((_, i) => i !== index));
        }
    };

    const handleRenameTeam = (index: number) => {
        const name = window.prompt('Rename team', teams[index]);
        if (name && name.trim()) {
            const updated = [...teams];
            updated[index] = name.trim();
            setTeams(updated);
        }
    };

    const handleTeamsContinue = () => {
        // TODO: integrate with Tap It team game route
        console.log('Teams:', teams);
    };

    return (
        <GameLayout
            title="Tap It – Create Room | Bazonka"
            description="Create a room to play Tap It on Bazonka and choose how you want to compete."
            ogTitle="Tap It – Create Room"
            ogDescription="Create a Tap It room and choose individual or team mode."
        >
            {step === 'mode' ? (
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
            ) : (
                <div className="reveal" style={{ maxWidth: '40rem', margin: '0 auto' }}>
                    <img
                        src="/assets/illustration-add-team.svg"
                        alt="Teams"
                        className="img-fluid mb-4 d-block mx-auto"
                        style={{ maxHeight: '10rem' }}
                    />
                    <h2 className="fw-bold text-secondary mb-4 text-center">Teams</h2>
                    <div className="row g-4 mb-4">
                        {teams.map((team, idx) => (
                            <div className="col-12 col-sm-6" key={idx}>
                                <div className="border rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center position-relative">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link text-secondary position-absolute top-0 start-0"
                                        onClick={() => handleRenameTeam(idx)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-9.439 9.439-3.854.854a.5.5 0 0 1-.607-.607l.854-3.854L12.146.146zM11.207 2L3 10.207V11h.793L12 2.793 11.207 2z" />
                                        </svg>
                                    </button>
                                    {teams.length > 2 && (
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-link text-danger position-absolute top-0 end-0"
                                            onClick={() => handleRemoveTeam(idx)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </button>
                                    )}
                                    <img
                                        src="/assets/illustration-team.svg"
                                        alt="Team"
                                        className="img-fluid mb-2"
                                        style={{ maxHeight: '6rem' }}
                                    />
                                    <h3 className="h5 fw-medium text-secondary">{team}</h3>
                                </div>
                            </div>
                        ))}
                        {teams.length < 5 && (
                            <div className="col-12 col-sm-6">
                                <div
                                    role="button"
                                    tabIndex={0}
                                    className="border rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleAddTeam}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleAddTeam();
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        fill="#6c63ff"
                                        viewBox="0 0 16 16"
                                        className="mb-2"
                                    >
                                        <path d="M8 1a.5.5 0 0 1 .5.5V7h5.5a.5.5 0 0 1 0 1H8.5v5.5a.5.5 0 0 1-1 0V8H2a.5.5 0 0 1 0-1h5.5V1.5A.5.5 0 0 1 8 1z" />
                                    </svg>
                                    <h3 className="h5 fw-medium text-secondary">Add Team</h3>
                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        className="btn btn-lg w-100 rounded-pill text-white"
                        style={{ background: 'linear-gradient(90deg, #6c63ff 0%, #17a2b8 100%)' }}
                        onClick={handleTeamsContinue}
                        disabled={teams.length < 2}
                    >
                        Continue
                    </button>
                </div>
            )}
        </GameLayout>
    );
};

export default CreateRoom;
