import React, { useState } from 'react';
import GameLayout from '../components/GameLayout';

const TugOfWar: React.FC = () => {
    const [roomName, setRoomName] = useState('');

    const handleEnterRoom = () => {
        if (roomName.trim()) {
            // TODO: Implement room joining logic
            // eslint-disable-next-line no-console
            console.log('Entering room:', roomName);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleEnterRoom();
        }
    };

    return (
        <GameLayout
            title="Tug of War – Game Rules & Room | Bazonka"
            description="Learn how to play Tug of War on Bazonka and create a room to challenge friends."
            ogTitle="Tug of War – Game Rules"
            ogDescription="Read the rules for Tug of War and start a room on Bazonka."
        >
            <h1 className="fw-bold text-center mb-4 text-secondary">Tug of War – Rules</h1>
            <img
                src="/assets/illustration-tug-of-war.svg"
                alt="Tug of War illustration"
                className="img-fluid mb-4 reveal"
                style={{ maxHeight: '18.75rem' }}
            />
            <ol className="text-start mx-auto mb-4 text-muted" style={{ maxWidth: '37.5rem' }}>
                <li className="mb-2">Split players into two teams (left vs right).</li>
                <li className="mb-2">Each team tries to pull the rope to their side by clicking rapidly.</li>
                <li className="mb-2">The team that pulls the rope past their goal line wins.</li>
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
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="btn btn-primary btn-lg w-100 rounded-pill"
                    onClick={handleEnterRoom}
                    disabled={!roomName.trim()}
                >
                    Enter Room
                </button>
            </div>
        </GameLayout>
    );
};

export default TugOfWar;