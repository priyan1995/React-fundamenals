import React from 'react';
import Container from '@material-ui/core/Container';
import UserFormUI from '../Common-Components/UserFormComponents';

export const UserForm = () => {

    return (
        <>
            <Container>
                <h2>User Register</h2>

                <UserFormUI />

            </Container>
        </>
    )
}