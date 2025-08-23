import React, { useState } from 'react';
import GameLayout from '../components/GameLayout';

const PokerNumber: React.FC = () => {
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

export default PokerNumber;