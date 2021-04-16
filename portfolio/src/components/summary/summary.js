import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import './summary.css'

export function Summary() {
    return (
        <div className="summary">
            <Accordion>
                <Card style={{ minWidth: '100%' }}>
                    <Accordion.Toggle as={Card.Header} variant="button" eventKey="0" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>Profile</h1>
                        <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {/* <Card.Title>About Me</Card.Title> */}
                            <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem doloribus, placeat aperiam tenetur odit vero vitae quae ducimus error alias laborum eius, laudantium iure. Culpa ab ullam hic voluptatem quos.</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card >
                <Card style={{ minWidth: '100%' }}>
                    <Accordion.Toggle as={Card.Header} variant="button" eventKey="1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>Professional Experience</h1>
                        <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {/* <Card.Title>About Me</Card.Title> */}
                            <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem doloribus, placeat aperiam tenetur odit vero vitae quae ducimus error alias laborum eius, laudantium iure. Culpa ab ullam hic voluptatem quos.</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card >
                <Card style={{ minWidth: '100%' }}>
                    <Accordion.Toggle as={Card.Header} variant="button" eventKey="2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>Personal Projects</h1>
                        <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            {/* <Card.Title>About Me</Card.Title> */}
                            <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem doloribus, placeat aperiam tenetur odit vero vitae quae ducimus error alias laborum eius, laudantium iure. Culpa ab ullam hic voluptatem quos.</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card >
                <Card style={{ minWidth: '100%' }}>
                    <Accordion.Toggle as={Card.Header} variant="button" eventKey="3" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>Education</h1>
                        <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            {/* <Card.Title>About Me</Card.Title> */}
                            <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem doloribus, placeat aperiam tenetur odit vero vitae quae ducimus error alias laborum eius, laudantium iure. Culpa ab ullam hic voluptatem quos.</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card >
            </Accordion>
        </div>
    )
}