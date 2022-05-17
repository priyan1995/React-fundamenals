import React from 'react';
import Button from '@material-ui/core/Button';
import '././RandomColors.css';
import Container from '@material-ui/core/Container';


export const RandomColorsUi = (props) => {
    return (
        <>

            <Container>
                <Button
                    variant="contained"
                    color="primary"
                    className="change-background-btn"
                >Change Background</Button>
            </Container>

            {props.children}
        </>
    )
}