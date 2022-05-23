import React from 'react';

const Digits = (props) => {


    const digits = [];

    for (let i = 1; i < 10; i++) {
        digits.push(
            <button
                onClick={() => props.updateCalc(i.toString())}
                key={i}>
                {i}
            </button>
        )
    }

    return digits;
}

export default Digits;