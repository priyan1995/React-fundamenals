import React, { useState } from 'react';
import Digits from '../components/Calculator/Digits';
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

    const deleteValue = () => {
        if (calc == '') {
            return;
        }
        const value = calc.slice(0, -1);

        setCalc(value)
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
                        <button onClick={deleteValue}>DEL</button>
                    </div>

                    <div className="pd-calc-digits">
                        <Digits updateCalc={updateCalc} />
                        <button onClick={() => updateCalc('0')}>0</button>
                        <button onClick={() => updateCalc('.')}>.</button>
                        <button onClick={calculate}>=</button>
                    </div>

                </div>
            </div>

        </>
    )
}