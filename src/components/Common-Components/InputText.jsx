import React, { useState } from 'react';
import './common-component.css';

export const InputText = (props) => {


    return (
        <>
            <div className="pd-form-group">
                <label>{props.label}</label>
                <input type={props.inputType} onChange={(e) => props.setValue(e.target.value)} />
            </div>
        </>
    )
}