import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useInput from '../Hooks/useInput';

export const UserForm = () => {

    const [username, bindUsername, resetUsername] = useInput('');
    const [email, bindEmail, resetEmail] = useInput('')


    const submitForm = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(email);
        resetUsername();
        resetEmail();
    }




    return (
        <>
            <Container>
                <h2>User Register</h2>


                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50%' },
                    }}
                >


                    <TextField
                        required
                        variant="filled"
                        color="secondary"
                        label="User Name"
                        {...bindUsername}
                    />

                    <TextField
                        required
                        variant="filled"
                        color="secondary"
                        type="email"
                        label="Email"
                        {...bindEmail}

                    />

                    <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={(e) => { submitForm(e) }}
                    >Submit</Button>

                </Box>



            </Container>
        </>
    )
}