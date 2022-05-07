import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import CommonButton from '../UiElements/CommonButton';
import UiFormInput from '../UiElements/FormInput';

const LoginFormUi = () => {
    return (
        <div>

            <Container >
                <h2 className="mt-5 mb-5">Login Form </h2>

                <Form>
                    <Row>
                        <Col md="6">
                           <UiFormInput
                           label="Email Address"
                           type="email"
                           placeholder ="example@gmail.com"
                           smallText=" We'll never share your email address. Trust us!"
                            />
                        </Col>

                        <Col md="6">
                           <UiFormInput
                           label="Password"
                           type="password"
                           placeholder ="password"
                           smallText=" Password must contain at least 5 characters"
                            />
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