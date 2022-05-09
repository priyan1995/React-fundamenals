import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { MaterialUiCheckbox } from './CommonElements/MaterialUiCheckbox';
import { MuiButtonGroup } from './CommonElements/MaterialUiButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Textfield from '@material-ui/core/Textfield';
import { MuiForm } from './MaterialForm';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const themeMain = createMuiTheme({
    typography: {
        h3: {
            fontSize: 36,
            marginBottom: 15
        }
    }
})

const MaterialUiElements = () => {
    return (
        <ThemeProvider theme={themeMain}>
            <Container>
                <div className='pd-mui-wrapper'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Typography variant="h3" component="div">
                                    MUI Elements
                                </Typography>

                                <MaterialUiCheckbox />

                                <MuiButtonGroup
                                    buttonOneText="Save"
                                    buttonOneIcon={<SaveIcon />}
                                    buttonOneSize="large"
                                    buttonOneVariant="contained"
                                    buttonOneColor="primary"

                                    buttonTwoText="Discard"
                                    buttonTwoIcon={<DeleteIcon />}
                                    buttonTwoSize="large"
                                    buttonTwoVariant="contained"
                                    buttonTwoColor="secondary"
                                />

                                <MuiForm />



                            </Grid>
                        </Grid>
                    </Box>


                </div>
            </Container>
        </ThemeProvider>
    )
}

export default MaterialUiElements;