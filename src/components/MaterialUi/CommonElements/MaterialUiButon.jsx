import React from 'react';
import Button from '@material-ui/core/Button';

export const MuiButton = (props) => {
    return (
        <>
            <Button
                startIcon={props.icon}
                size={props.size}
                variant={props.variant}
                color={props.color}
            >
                {props.title}
            </Button>

        </>
    )
}