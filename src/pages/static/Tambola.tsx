import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameLayout from '../../components/GameLayout';

const Tambola: React.FC = () => {
    const navigate = useNavigate();
    const [roomName, setRoomName] = useState('');

    const handleEnterRoom = (e: React.FormEvent) => {
        e.preventDefault();
        if (roomName.trim()) {
            navigate('/create-room', { state: { roomName } });
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
            <form className="mx-auto" style={{ maxWidth: '25rem' }} onSubmit={handleEnterRoom}>
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
                    type="submit"
                    className="btn btn-lg w-100 rounded-pill text-white"
                    style={{ background: 'linear-gradient(90deg, #6c63ff 0%, #17a2b8 100%)' }}
                    disabled={!roomName.trim()}
                >
                    Enter Room
                </button>
            </form>
        </GameLayout>
    );
};

export default Tambola;
