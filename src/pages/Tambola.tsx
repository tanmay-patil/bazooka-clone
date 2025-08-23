import React, { useState } from 'react';
import GameLayout from '../components/GameLayout';

const Tambola: React.FC = () => {
    const [roomName, setRoomName] = useState('');

    const handleEnterRoom = () => {
        if (roomName.trim()) {
            // TODO: Implement room joining logic
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
            title="Tambola – Game Rules & Room | Bazonka"
            description="Understand how to play Tambola on Bazonka and create a private room."
            ogTitle="Tambola – Game Rules"
            ogDescription="Read the rules for Tambola and start a room on Bazonka."
        >
            <h1 className="fw-bold text-center mb-4 text-secondary">Tambola – Rules</h1>
            <img
                src="/assets/illustration-tambola.svg"
                alt="Tambola illustration"
                className="img-fluid mb-4 reveal"
                style={{ maxHeight: '18.75rem' }}
            />
            <ol className="text-start mx-auto mb-4 text-muted" style={{ maxWidth: '37.5rem' }}>
                <li className="mb-2">Each player gets a ticket with random numbers.</li>
                <li className="mb-2">Numbers are called out randomly by the host.</li>
                <li className="mb-2">Mark off numbers on your ticket as they're called.</li>
                <li className="mb-2">First to complete a line, full house, or pattern wins!</li>
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

export default Tambola;