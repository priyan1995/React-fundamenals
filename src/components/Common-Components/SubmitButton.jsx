import React from 'react';
import './common-component.css';

export const SubmitButton = (props) => {
    return (
        <>
            <button className="pd-submit-button">{props.label}</button>
        </>
    )
}
