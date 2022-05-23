import React from 'react';
import Digits from './Digits';

export const DigitsCalculations = (props) => {
    
    return (
        <div className="pd-calc-digits">
            <Digits updateCalc={props.updateCalc} />
            <button onClick={() => props.updateCalc('0')}>0</button>
            <button onClick={() => props.updateCalc('.')}>.</button>
            <button onClick={props.calculate}>=</button>
        </div>
    )
}