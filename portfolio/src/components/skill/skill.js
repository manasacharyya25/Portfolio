
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'


export function Skill() {
    return (

        <div>
            <Accordion>
                <Card border="danger" style={{ width: '18rem' }}>
                    <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Accordion.Toggle as={Button} variant="button" eventKey="0">
                            Java
                            <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
                        </Accordion.Toggle>
                        <ProgressBar now={80} label='4/5' style={{ minWidth: '60%' }} />
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card border="danger" style={{ width: '18rem' }}>
                    <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Accordion.Toggle as={Button} variant="button" eventKey="1">
                            Angular
                            <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
                        </Accordion.Toggle>
                        <ProgressBar now={60} label='3/5' style={{ minWidth: '60%' }} />
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            <Card.Title>Danger Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>

    )
}