import React from 'react';
import { Alert } from 'react-bootstrap';

const UiAlert = (props) => {
    return (
        <Alert>
            {props.title}
        </Alert>
    )
}

export default UiAlert;