import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { MaterialUiCheckbox } from './CommonElements/MaterialUiCheckbox';
import { MuiButtonGroup } from './CommonElements/MaterialUiButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Textfield from '@material-ui/core/Textfield';
import { MuiForm } from './MaterialForm';


const MaterialUiElements = () => {
    return (
        <div className='pd-mui-wrapper'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <h2>MUI Elements</h2>

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
    )
}

export default MaterialUiElements;