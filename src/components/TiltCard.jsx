import React from 'react';

const TiltCard = ({ children, className = '' }) => {
    return (
        <div className={`${className} tilt-card`}>
            {children}
        </div>
    );
};

export default TiltCard;
