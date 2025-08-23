import React, { useEffect } from 'react';

interface ToastProps {
    show: boolean;
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
    autoHide?: boolean;
    delay?: number;
}

const Toast: React.FC<ToastProps> = ({
    show,
    message,
    type,
    onClose,
    autoHide = true,
    delay = 3000
}) => {
    useEffect(() => {
        if (show && autoHide) {
            const timer = setTimeout(() => {
                onClose();
            }, delay);
            return () => clearTimeout(timer);
        }
        return undefined;
    }, [show, autoHide, delay, onClose]);

    if (!show) return null;

    return (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1055 }}>
            <div
                className={`toast show align-items-center text-bg-${type === 'success' ? 'success' : 'danger'} border-0`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="d-flex">
                    <div className="toast-body">
                        {message}
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        aria-label="Close"
                        onClick={onClose}
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default Toast;
