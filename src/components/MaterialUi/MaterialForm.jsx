import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
// add google font for MUI (npm add fontsource-popins)
import 'fontsource-poppins';


const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: '5px',
        color: 'white',
        padding: '10px 60px'
    }
})

const ButtonStyled = () => {
    const classes = useStyles();
    return (

        <Button
            className={classes.root}
            color="secondary"
            variant="contained"
        > Submit </Button>
    )
}

// override theme colors
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500]
        }
    }
})

export const MuiForm = () => {
    return (
        <ThemeProvider theme={theme} >
            <div className="pd-Mui-form-wrapper">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div >
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                            color="secondary"
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                            color="secondary"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            color="secondary"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField id="outlined-search" label="Search field" type="search" />
                        <TextField
                            id="outlined-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            color="secondary"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="filled"
                        />
                        <TextField
                            disabled
                            id="filled-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                            variant="filled"
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <TextField
                            id="filled-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                        />
                        <TextField
                            id="filled-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                        <TextField
                            id="filled-search"
                            label="Search field"
                            type="search"
                            variant="filled"
                        />
                        <TextField
                            id="filled-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            disabled
                            id="standard-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-search"
                            label="Search field"
                            type="search"
                            variant="standard"
                        />
                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            variant="standard"
                        />

                    </div>
                    <ButtonStyled />
                </Box>
            </div>
        </ThemeProvider>
    )
}