import React, { useState } from 'react';
import './common-component.css';

export const InputText = (props) => {

    const [inputValue, setInputValue] = useState();

    console.log(inputValue);
    return (
        <>
            <div className="pd-form-group">
                <label>{props.label}</label>
                <input type={props.inputType} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
        </>
    )
}