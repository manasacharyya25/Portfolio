
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'


export function Skill() {
    return (
        <div>
            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Danger Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}