import React, { useState } from 'react';
import { InputText } from './InputText';
import { SubmitButton } from './SubmitButton';

export const AddCountryForm = () => {


    const [countryName, setCountryName] = useState();
    const [countryPopulation, setCountryPopulation] = useState();
    const [presidentEmail, setPresidentEmail] = useState();

    const getCountryName = (countryNameFromInp) => {
        setCountryName(countryNameFromInp);
    }

    const getCountryPopulation = (countryPopulationFromInp) =>{
        setCountryPopulation(countryPopulationFromInp);
    }

    const getPresidentEmail = (presidentEmailFromInp) => {
        setPresidentEmail(presidentEmailFromInp);
    }

    

    return (
        <>
            <h4>Add Country</h4>

            <div className="pd-country-form-div">

                <InputText
                    label="Country Name"
                    type="text"
                    setValue={getCountryName}
                />

                <InputText
                    label="Country Population (Thousands)"
                    type="number"
                    setValue={getCountryPopulation}
                />

                <InputText
                    label="President Email"
                    type="email"
                    setValue={getPresidentEmail}
                />

                <SubmitButton
                 label="Add Country"
                 countryName = {countryName}
                 countryPopulation = {countryPopulation}
                 presidentEmail = {presidentEmail}
                  />


            </div>
        </>
    )
}