import React from 'react';
import './calculator.css';

export const Calculator = () => {

    const createDigits = () => {
        const digits = [];

        for (let i; i < 10; i++) {
            digits.push(
                <button key={i}>{i}</button>
            )
        }

        return digits;
    }

    return (
        <>

            <div className="pd-calc-wrapper">
                <div className="pd-calculator">

                    <div className="pd-calc-display">
                        <span>(0)</span>
                        <span>0</span>
                    </div>

                    <div className="pd-calc-operators">
                        <button>/</button>
                        <button>*</button>
                        <button>-</button>
                        <button>+</button>
                        <button>DEL</button>
                    </div>

                    <div className="pd-calc-digits">
                        {createDigits}
                        <button>0</button>
                        <button>.</button>
                        <button>=</button>
                    </div>

                </div>
            </div>

        </>
    )
}