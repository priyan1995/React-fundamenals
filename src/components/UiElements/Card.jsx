import React from 'react';
import { Button, Alert, Card } from 'react-bootstrap';

const UiCard = (props) => {
    return (

        <Card className="mb-3 mt-3">
            <Card.Img src={props.image} className="pd-card-image" />
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text style={{ color: "#343434" }}>
                    {props.cardContent}
                </Card.Text>
                <Button variant="primary">{props.buttonTitle}</Button>
            </Card.Body>
        </Card>


    )

}

export default UiCard;
