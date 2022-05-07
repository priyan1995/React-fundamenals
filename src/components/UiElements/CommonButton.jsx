import React from 'react';
import { Button } from 'react-bootstrap';

const CommonButton = (props) => {
    return (
        <Button className={props.buttonClass}>{props.title}</Button>
    )
}

export default CommonButton;