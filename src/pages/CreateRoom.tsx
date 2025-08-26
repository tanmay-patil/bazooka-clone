import React, { useState } from 'react';
import GameLayout from '../components/GameLayout';

const CreateRoom: React.FC = () => {
    const [step, setStep] = useState<'mode' | 'teams'>('mode');
    const [mode, setMode] = useState<'individual' | 'team' | null>(null);
    const [teams, setTeams] = useState<string[]>(['Team 1', 'Team 2']);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editingName, setEditingName] = useState('');

    const colorPairs: [string, string][] = [
        ['#6c63ff', '#17a2b8'],
        ['#ff6f91', '#ff9671'],
        ['#845ec2', '#ffc75f'],
        ['#2c98f0', '#a3de83'],
        ['#f9f871', '#ff6f91'],
    ];

    const handleContinue = () => {
        if (mode === 'team') {
            setStep('teams');
        } else if (mode === 'individual') {
            // TODO: integrate with game route
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
        setEditingIndex(index);
        setEditingName(teams[index] ?? '');
    };

    const handleRenameSave = () => {
        if (editingIndex !== null && editingName.trim()) {
            const updated = [...teams];
            updated[editingIndex] = editingName.trim();
            setTeams(updated);
            setEditingIndex(null);
            setEditingName('');
        }
    };

    const handleTeamsContinue = () => {
        // TODO: integrate with team game route
    };

    return (
        <GameLayout
            title="Create Room | Bazonka"
            description="Create a room on Bazonka and choose how you want to compete."
            ogTitle="Create Room"
            ogDescription="Create a room and choose individual or team mode."
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
                        {teams.map((team, idx) => {
                            const [c1, c2] = colorPairs[idx % colorPairs.length]!;
                            return (
                                <div className="col-12 col-sm-6" key={idx}>
                                    <div className="border rounded-3 p-4 h-100 d-flex flex-column align-items-center justify-content-center position-relative">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-link text-secondary position-absolute top-0 start-0"
                                            onClick={() => handleRenameTeam(idx)}
                                        >
                                            <img src="/assets/icon-edit.svg" alt="Edit" width={20} height={20} />
                                        </button>
                                        {teams.length > 2 && (
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-link text-danger position-absolute top-0 end-0"
                                                onClick={() => handleRemoveTeam(idx)}
                                            >
                                                <img src="/assets/icon-delete.svg" alt="Delete" width={20} height={20} />
                                            </button>
                                        )}
                                        <svg
                                            viewBox="0 0 200 200"
                                            className="mb-2"
                                            style={{ maxHeight: '6rem' }}
                                        >
                                            <circle cx="60" cy="60" r="40" fill={c1} />
                                            <rect x="20" y="110" width="80" height="80" fill={c1} />
                                            <circle cx="140" cy="60" r="40" fill={c2} />
                                            <rect x="100" y="110" width="80" height="80" fill={c2} />
                                        </svg>
                                        <h3 className="h5 fw-medium text-secondary">{team}</h3>
                                    </div>
                                </div>
                            );
                        })}
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
            {editingIndex !== null && (
                <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Rename Team</h5>
                                <button type="button" className="btn-close" onClick={() => setEditingIndex(null)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editingName}
                                    onChange={(e) => setEditingName(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setEditingIndex(null)}>
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn text-white"
                                    style={{ background: 'linear-gradient(90deg, #6c63ff 0%, #17a2b8 100%)' }}
                                    onClick={handleRenameSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </GameLayout>
    );
};

export default CreateRoom;
