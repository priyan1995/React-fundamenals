import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


export const MuiButtonGroup = (props) => {
    return (
        <>
            <ButtonGroup>

                <Button
                    startIcon={props.buttonOneIcon}
                    size={props.buttonOneSize}
                    variant={props.buttonOneVariant}
                    color={props.buttonOneColor}
                >
                    {props.buttonOneText}
                </Button>

                <Button
                    startIcon={props.buttonTwoIcon}
                    size={props.buttonTwoSize}
                    variant={props.buttonTwoVariant}
                    color={props.buttonTwoColor}
                >
                    {props.buttonTwoText}
                </Button>

            </ButtonGroup>




        </>
    )
}