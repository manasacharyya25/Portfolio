
import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

import './skill.css'

var SocialSignInProj = {
    "name": "Social Sign In With JWT Authentication",
    "desc": "Spring Boot + Angular Project, where user can sign in using Gmail, and is returned with a JWT Token",
    "url": "https://github.com"
}

var SomedmanProj = {
    "name": "Somedman -  Socail Media Manager",
    "desc": "Single Stop to access and manage all social platforms"
}

const javaProjs = [SocialSignInProj, SomedmanProj]

function Skill({ technology, rating, projects, eventKey }) {
    return (
        <Card border="danger">
            <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Accordion.Toggle as={Button} variant="button" eventKey={eventKey}>
                    {technology}
                    <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
                </Accordion.Toggle>
                <ProgressBar now={rating} label='4/5' style={{ minWidth: '60%' }} />
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    {
                        projects.map(project => (
                            <>
                                <Card.Title className="SkillsProjectName">{project.name}</Card.Title>
                                <Card.Text className="SkillsProjectDesc">
                                    {project.desc}

                                    {project.url ?
                                        <span className="SkillsProjectUrlSvg">
                                            <a href={project.url} target='__blank'>
                                                <img src='./assets/link-solid.svg' height='10px' alt='details' id='skillsProjectUrlSvg' />
                                            </a>
                                        </span>
                                        : ''
                                    }
                                </Card.Text>
                            </>
                        ))
                    }
                </Card.Body>
            </Accordion.Collapse>
        </Card >
    )
}


export function Skills() {
    return (

        <div className='Skills'>
            <h1 style={{ fontFamily: 'Quicksand', fontWeight: '900' }}>Skills</h1>
            <Accordion>
                <Skill technology="Java"
                    rating="80"
                    projects={javaProjs}
                    eventKey='1' />
                <Skill technology="Angular 2+"
                    rating="60"
                    projects={javaProjs}
                    eventKey='2' />
            </Accordion>
        </div>

    )
}