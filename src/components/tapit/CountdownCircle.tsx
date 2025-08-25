import React from 'react';

interface CountdownCircleProps {
    duration: number;
    timeLeft: number;
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({ duration, timeLeft }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const progress = timeLeft / duration;
    const offset = circumference * (1 - progress);

    let strokeColor = 'var(--bs-success)';
    if (timeLeft <= 5) {
        strokeColor = 'var(--bs-danger)';
    } else if (timeLeft <= 10) {
        strokeColor = 'var(--bs-orange)';
    }

    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="d-block user-select-none"
            role="img"
            aria-label={`${timeLeft} seconds remaining`}
            aria-live="polite"
        >
            <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="var(--bs-gray-300)"
                strokeWidth="10"
                fill="transparent"
            />
            <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={strokeColor}
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: 'stroke 0.3s, stroke-dashoffset 1s linear', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            />
            <text
                x="50"
                y="55"
                textAnchor="middle"
                className="fw-bold user-select-none"
                fontSize="24"
                fill="var(--bs-dark)"
            >
                {timeLeft}
            </text>
        </svg>
    );
};

export default CountdownCircle;
