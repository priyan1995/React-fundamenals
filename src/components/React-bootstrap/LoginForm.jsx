import React from 'react';
import { Button, Alert, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

const BootstrapLoginForm = () => {
    return (
        <div>


            <Container>

                <h2 className='mt-5 mb-5'>Bootstrap Login Form</h2>


                <Alert>
                    This is an alert
                </Alert>

                <Row>
                    <Col lg="4">
                        <Card className="mb-3 mt-3">
                            <Card.Img src="https://picsum.photos/200/300" className="pd-card-image" />
                            <Card.Body>
                                <Card.Title>
                                    Card Example
                                </Card.Title>
                                <Card.Text style={{ color: "#343434" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card className="mb-3 mt-3">
                            <Card.Img src="https://picsum.photos/200/300" className="pd-card-image" />
                            <Card.Body>
                                <Card.Title>
                                    Card Example
                                </Card.Title>
                                <Card.Text style={{ color: "#343434" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col lg="4">
                        <Card className="mb-3 mt-3">
                            <Card.Img src="https://picsum.photos/200/300" className="pd-card-image" />
                            <Card.Body>
                                <Card.Title>
                                    Card Example
                                </Card.Title>
                                <Card.Text style={{ color: "#343434" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>

            </Container>

        </div>
    )
}

export default BootstrapLoginForm;