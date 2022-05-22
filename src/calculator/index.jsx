import React, { useState } from 'react';
import './calculator.css';

export const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["+", "/", "*", "-", "0"]


    const updateCalc = (value) => {

        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }


    const createDigits = () => {

        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button
                    onClick={() => updateCalc(i.toString())}
                    key={i}>
                    {i}
                </button>
            )
        }

        return digits;
    }

    return (
        <>

            <div className="pd-calc-wrapper">
                <div className="pd-calculator">

                    <div className="pd-calc-display">
                        {result ? <span>({result})</span> : ''}
                        <span>{calc || "0"}</span>
                    </div>

                    <div className="pd-calc-operators">
                        <button onClick={() => updateCalc('/')}>/</button>
                        <button onClick={() => updateCalc('*')}>*</button>
                        <button onClick={() => updateCalc('-')}>-</button>
                        <button onClick={() => updateCalc('+')}>+</button>
                        <button >DEL</button>
                    </div>

                    <div className="pd-calc-digits">
                        {createDigits()}
                        <button onClick={() => updateCalc('0')}>0</button>
                        <button onClick={() => updateCalc('.')}>.</button>
                        <button onClick={calculate}>=</button>
                    </div>

                </div>
            </div>

        </>
    )
}