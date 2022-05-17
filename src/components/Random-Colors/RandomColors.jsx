import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '././RandomColors.css';
import Container from '@material-ui/core/Container';
import { useDynamicColor } from '../Hooks/useDynamicColor';


export const RandomColorsUi = (props) => {

    const { color,changeColor } = useDynamicColor();

    return (
        <>

            <div style={{ background: "#" + color }} className="pd-changing-color-div">
                <Container>
                    <Button
                        variant="contained"
                        color="primary"
                        className="change-background-btn"
                        {...changeColor}
                    >Change Background</Button>
                </Container>


                {props.children}
            </div>
        </>
    )
}