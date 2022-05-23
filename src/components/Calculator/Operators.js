import React from 'react';

export const Operators = (props) => {
    return (
        <div className="pd-calc-operators">
            <button onClick={() => props.updateCalc('/')}>/</button>
            <button onClick={() => props.updateCalc('*')}>*</button>
            <button onClick={() => props.updateCalc('-')}>-</button>
            <button onClick={() => props.updateCalc('+')}>+</button>
            <button onClick={props.deleteValue}>DEL</button>
        </div>
    )
}