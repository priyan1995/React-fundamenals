import { Box, Button, TextField } from '@material-ui/core';
import React from 'react';
import useInput from '../Hooks/useInput';


export const UserFormUI = () => {

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
        </>
    )
}

export default UserFormUI;