import React from 'react';
import { Link } from 'react-router-dom';

export const GoHomeButton = () => {
    return (
        <>
            <div className='go-home-btn'>
                <Link to='/'>Home</Link>
            </div>
        </>
    )
}