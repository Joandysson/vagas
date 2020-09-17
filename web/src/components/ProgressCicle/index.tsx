import React from 'react';
import './style.css';
interface progress {
    percentual?: string;
    color?: string;
    percentualInfo?: string;
}

const  ProgressCicle: React.FC<progress> = ({percentual, color, percentualInfo}) => {
    return (
            <div className="percent">
                <svg>
                    <circle cx="30" cy="30" r="28"></circle>
                    <circle className={`perc-${percentual} stroker-${color}`} cx="30" cy="30" r="28"></circle>
                </svg>
                <div className="number">
                    <h2>{percentualInfo ?? percentual}</h2>
                </div>
            </div>
    );
}

export default ProgressCicle;