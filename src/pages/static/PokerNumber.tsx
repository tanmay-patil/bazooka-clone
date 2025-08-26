import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameLayout from '../../components/GameLayout';

const PokerNumber: React.FC = () => {
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
            title="Poker Number – Game Rules & Room | Bazonka"
            description="Review the rules for Poker Number on Bazonka and create a room to play."
            ogTitle="Poker Number – Game Rules"
            ogDescription="Read the rules for Poker Number and start a room on Bazonka."
        >
            <h1 className="fw-bold text-center mb-4 text-secondary">Poker Number – Rules</h1>
            <img
                src="/assets/illustration-poker-number.svg"
                alt="Poker Number illustration"
                className="img-fluid mb-4 reveal"
                style={{ maxHeight: '18.75rem' }}
            />
            <ol className="text-start mx-auto mb-4 text-muted" style={{ maxWidth: '37.5rem' }}>
                <li className="mb-2">Each player joins a room and awaits the draw.</li>
                <li className="mb-2">Every round, the system generates a random number for each player.</li>
                <li className="mb-2">The player with the highest number wins the round.</li>
                <li className="mb-2">Play multiple rounds and keep track of your score.</li>
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

export default PokerNumber;
