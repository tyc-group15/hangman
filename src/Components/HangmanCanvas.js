export const HangmanCanvas = ({ mistakes }) => {
    return (
        <svg height="250" width="200" className="figure-container">
            {/* <!-- Rod --> */}
            {mistakes >= 1 && <line x1="60" y1="20" x2="140" y2="20" />}
            {mistakes >= 2 && <line x1="140" y1="20" x2="140" y2="50" />}
            {mistakes >= 3 && <line x1="60" y1="20" x2="60" y2="230" />}
            {mistakes >= 4 && <line x1="20" y1="230" x2="100" y2="230" />}

            {/* <!-- Head --> */}
            {mistakes >= 5 && <circle cx="140" cy="70" r="20" />}
            {/* <!-- Body --> */}
            {mistakes >= 6 && <line x1="140" y1="90" x2="140" y2="150" />}
            {/* <!-- Arms --> */}
            {mistakes >= 7 && <line x1="120" y1="120" x2="140" y2="100" />}
            {mistakes >= 8 && <line x1="160" y1="120" x2="140" y2="100" />}
            {/* <!-- Legs --> */}
            {mistakes >= 9 && <line x1="140" y1="150" x2="120" y2="180" />}
            {mistakes >= 10 && <line x1="140" y1="150" x2="160" y2="180" />}
        </svg>
    );
};
