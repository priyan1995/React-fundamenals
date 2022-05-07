import React from 'react';
import { Form } from 'react-bootstrap';

const UiFormInput = (props) => {
    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />

            {
                props.smallText ? (
                    <Form.Text className="text-muted">
                        {props.smallText}
                    </Form.Text>
                ) : ""
            }


        </Form.Group>
    )

}

export default UiFormInput;