import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CountdownCircle from '../../components/tapit/CountdownCircle';

const CONTAINER_STYLE: React.CSSProperties = {
    touchAction: 'none',
    background:
        'radial-gradient(at 0% 0%, rgba(255, 149, 128, 0.35), transparent 60%),' +
        'radial-gradient(at 100% 0%, rgba(168, 226, 107, 0.35), transparent 60%),' +
        'radial-gradient(at 100% 100%, rgba(173, 91, 230, 0.35), transparent 60%),' +
        '#fff',
};

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

    useEffect(() => {
        const { body } = document;
        const originalOverflow = body.style.overflow;
        body.style.overflow = 'hidden';
        return () => {
            body.style.overflow = originalOverflow;
        };
    }, []);

    const handleTap = useCallback(() => {
        if (timeLeft > 0) {
            setCount((c) => c + 1);
        }
    }, [timeLeft]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleTap();
        }
    };

    return (
        <div
            className="d-flex flex-column vh-100 overflow-hidden user-select-none"
            onPointerDown={handleTap}
            onTouchStart={(e) => e.preventDefault()}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Tap area"
            style={CONTAINER_STYLE}
        >
            <Helmet>
                <title>Tap It – Room {roomName} | Bazonka</title>
            </Helmet>
            <div className="d-flex justify-content-center p-3">
                <CountdownCircle duration={GAME_DURATION} timeLeft={timeLeft} />
            </div>
            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                <span className="display-1 fw-bold" aria-live="polite" role="status">
                    {count}
                </span>
            </div>
        </div>
    );
};

export default TapItGame;