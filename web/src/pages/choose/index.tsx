import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Choose() {
    return (
        <>
        <div className="choose-content">
            <Link to="one">
                <div className="btn-link">
                    Página I
                </div>
            </Link>
            <Link to="two">
                <div className="btn-link">
                    Página II
                </div>
            </Link>
        </div>
        </>
    )
}

export default Choose;