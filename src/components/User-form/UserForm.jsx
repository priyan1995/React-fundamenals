import React from 'react';
import Container from '@material-ui/core/Container';
import UserFormUI from '../Common-Components/UserFormComponents';
import { RandomColorsUi } from '../Random-Colors/RandomColors';

export const UserForm = () => {

    return (
        <>
            <RandomColorsUi>
                <Container>
                    <h2>User Register</h2>
                    <UserFormUI />
                </Container>
            </RandomColorsUi>
        </>
    )
}