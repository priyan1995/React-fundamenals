import React, { useState } from 'react';
import { InputText } from './InputText';
import { SubmitButton } from './SubmitButton';

export const AddCountryForm = () => {


    return (
        <>
            <h4>Add Country</h4>

            <div className="pd-country-form-div">

                <InputText
                    label="Country Name"
                    type="text"
                />

                <InputText
                    label="Country Population (Thousands)"
                    type="number"
                />

                <InputText
                    label="President Email"
                    type="email"
                />

                <SubmitButton label="Add Country" />


            </div>
        </>
    )
}