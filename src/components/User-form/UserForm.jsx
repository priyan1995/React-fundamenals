import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export const UserForm = () => {

    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(email);
    }




    return (
        <>
            <Container>
                <h2>User Register</h2>
                <FormControl>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%' },
                        }}
                    >

                        <TextField
                            required
                            variant="filled"
                            color="secondary"
                            label="User Name"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />

                        <TextField
                            required
                            variant="filled"
                            color="secondary"
                            type="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={submitForm}
                        >Submit</Button>

                    </Box>

                </FormControl>
            </Container>
        </>
    )
}