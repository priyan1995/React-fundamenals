import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import UiCard from '../UiElements/Card';
import UiAlert from '../UiElements/Alert';

const CardsList = () => {
    return (
        <div>
            
            <Container>

                <h2 className='mt-5 mb-5'>Bootstrap Login Form</h2>

                <UiAlert title="Card list is showing below" />

                <Row>

                    <Col lg="4">
                        <UiCard
                            image="https://picsum.photos/200/300"
                            title="Card Example"
                            cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur."
                            buttonTitle="Read More"
                        />
                    </Col>


                    <Col lg="4">
                        <UiCard
                            image="https://picsum.photos/200/300"
                            title="Card Example"
                            cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur."
                            buttonTitle="Read More"
                        />
                    </Col>

                    <Col lg="4">
                        <UiCard
                            image="https://picsum.photos/200/300"
                            title="Card Example"
                            cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur."
                            buttonTitle="Read More"
                        />
                    </Col>

                    <Col lg="4">
                        <UiCard
                            image="https://picsum.photos/200/300"
                            title="Card Example"
                            cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur."
                            buttonTitle="Read More"
                        />
                    </Col>

                    <Col lg="4">
                        <UiCard
                            image="https://picsum.photos/200/300"
                            title="Card Example"
                            cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur."
                            buttonTitle="Read More"
                        />
                    </Col>

                    <Col lg="4">
                        <UiCard
                            image="https://picsum.photos/200/300"
                            title="Card Example"
                            cardContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, similique veritatis laborum obcaecati sit consectetur exercitationem numquam ducimus incidunt sunt soluta, optio voluptatibus saepe quaerat, ullam porro doloribus pariatur."
                            buttonTitle="Read More"
                        />
                    </Col>


                </Row>

            </Container>

        </div>
    )
}

export default CardsList;