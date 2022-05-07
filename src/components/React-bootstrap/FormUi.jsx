import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import CommonButton from '../UiElements/CommonButton';

const LoginFormUi = () => {
    return (
        <div>

            <Container >
                <h2 className="mt-5 mb-5">Login Form </h2>

                <Form>
                    <Row>
                        <Col md="6">
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="example@gmail.com" />
                                <Form.Text className="text-muted">
                                    We'll never share your email address. Trust us!
                                </Form.Text>
                            </Form.Group>
                        </Col>

                        <Col md="6">
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" />
                                <Form.Text className="text-muted">
                                    Password must contain at least 5 characters
                                </Form.Text>
                            </Form.Group>
                        </Col>

                        <Col md="3">
                            <CommonButton
                                buttonClass="primary w-100 mt-3"
                                title="Login"
                            />
                        </Col>


                    </Row>
                </Form>


            </Container>
        </div>
    )
}

export default LoginFormUi;