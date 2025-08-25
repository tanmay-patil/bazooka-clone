import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CountdownCircle from '../../components/tapit/CountdownCircle';

const GAME_DURATION = 30;

const TapItGame: React.FC = () => {
    const { roomName } = useParams();
    const [count, setCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    if (timerRef.current !== null) {
                        window.clearInterval(timerRef.current);
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => {
            if (timerRef.current !== null) {
                window.clearInterval(timerRef.current);
            }
        };
    }, []);

    const handleTap = () => {
        if (timeLeft > 0) {
            setCount((c) => c + 1);
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-white" onPointerDown={handleTap} role="button">
            <Helmet>
                <title>Tap It – Room {roomName} | Bazonka</title>
            </Helmet>
            <div className="d-flex justify-content-center p-3">
                <CountdownCircle duration={GAME_DURATION} timeLeft={timeLeft} />
            </div>
            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                <span className="display-1 fw-bold user-select-none">{count}</span>
            </div>
        </div>
    );
};

export default TapItGame;
