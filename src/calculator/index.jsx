import React, { useState } from 'react';
import { DigitsCalculations } from '../components/Calculator/DigitsCalculation';
import { Display } from '../components/Calculator/Display';
import { Operators } from '../components/Calculator/Operators';
import './calculator.css';

export const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["+", "/", "*", "-", "0"];

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

                    <Display
                        result={result}
                        calc={calc}
                    />

                    <Operators
                        updateCalc={updateCalc}
                        deleteValue={deleteValue}
                    />

                    <DigitsCalculations
                        updateCalc={updateCalc}
                        calculate={calculate}
                    />

                </div>
            </div>

        </>
    )
}