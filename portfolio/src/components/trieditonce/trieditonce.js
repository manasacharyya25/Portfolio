import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

import './trieditonce.css'

export function TriedItOnce() {
    return (
        <div className="TriedItOnce">
            <h1>Tried It Once !!!</h1>
            <Carousel fade interval='3000' pause='hover' wrap='true'>
                <Carousel.Item >
                    <Container>
                        <Row>
                            <Col>
                                <img
                                    className="d-inline"
                                    src="./assets/terraform.png"
                                    alt="First slide"
                                    height="60rem"
                                />
                            </Col>
                            <Col>
                                <img
                                    className="d-inline"
                                    src="./assets/figma.png"
                                    alt="Second slide"
                                    height="60rem"
                                />
                            </Col>
                            <Col>
                                <img
                                    className="d-inline"
                                    src="./assets/application-insights.png"
                                    alt="Second slide"
                                    height="60rem"
                                />
                            </Col>
                            <Col>
                                <img
                                    className="d-block"
                                    src="./assets/elastic-bean-stalk.png"
                                    alt="Third slide"
                                    height="60rem"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col>
                                <img
                                    className="d-block"
                                    src="./assets/php.svg"
                                    alt="Third slide"
                                    height="60rem"
                                />
                            </Col>
                            <Col>
                                <img
                                    className="d-block"
                                    src="./assets/spark.png"
                                    alt="Third slide"
                                    height="60rem"
                                />
                            </Col>
                            <Col>
                                <img
                                    className="d-block"
                                    src="./assets/superset.png"
                                    alt="Third slide"
                                    height="60rem"
                                />
                            </Col>
                            <Col>
                                <img
                                    className="d-block"
                                    src="./assets/fhir.png"
                                    alt="Third slide"
                                    height="60rem"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}