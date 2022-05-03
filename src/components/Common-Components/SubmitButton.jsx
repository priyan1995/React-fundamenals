import React from 'react';
import './common-component.css';

export const SubmitButton = (props) => {

    const saveData = () => {
        console.log("Country Name: ", props.countryName)
        console.log("Country Population: ", props.countryPopulation)
        console.log("Country Email: ", props.presidentEmail)
    }

    return (
        <>
            <button className="pd-submit-button" onClick={saveData}>{props.label}</button>
        </>
    )
}
