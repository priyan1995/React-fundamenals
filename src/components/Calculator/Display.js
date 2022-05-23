import React from 'react';

export const Display = (props) => {
    return (
        <div className="pd-calc-display">
            {props.result ? <span>({props.result})</span> : ''}
            <span>{props.calc || "0"}</span>
        </div>
    )
}