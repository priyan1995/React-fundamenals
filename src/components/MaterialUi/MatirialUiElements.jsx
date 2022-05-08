import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { MaterialUiCheckbox } from './MaterialUiCheckbox';


const MaterialUiElements = () => {
    return (
        <div className='pd-mui-wrapper'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <h2>MUI Elements</h2>

                        <MaterialUiCheckbox />

                        <ButtonGroup>

                            <Button
                                startIcon={<SaveIcon />}
                                size="large"
                                variant="contained"
                                color="primary"
                            >
                                Save
                            </Button>

                            <Button
                                startIcon={<DeleteIcon />}
                                size="large"
                                variant="contained"
                                color="secondary"
                            >
                                Discard
                            </Button>

                        </ButtonGroup>

                    </Grid>
                </Grid>
            </Box>


        </div>
    )
}

export default MaterialUiElements;