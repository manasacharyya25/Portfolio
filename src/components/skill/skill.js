
import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

import './skill.css'

var SocialSignInBackend = {
    "name": "Social Sign In With JWT Authentication",
    "desc": "Spring Boot + Angular Project, where user can sign in using Gmail, and is returned with a JWT Token",
    "url": "https://github.com/manasacharyya25/SocialSignInWithJwtAuthentication/tree/main/spring-boot-backend/SSIwithJWT"
}

var SomedmanBackend = {
    "name": "Somedman -  Socail Media Manager",
    "desc": "Single Stop to access and manage all social platforms",
    "url": "https://github.com/manasacharyya25/Social-Media-Manager-Backend"
}

var SpringSecurityWithJWT = {
    "name": "Spring Security With JWT",
    "desc": "Spring Boot Application with Spring Security",
    "url": "https://github.com/manasacharyya25/SpringSecurityWithJwt"
}

var FileTransfer = {
    "name": "File-Transfer",
    "desc": "FTP Client using JAVA SWING, SOCKETS API",
    "url": "https://github.com/manasacharyya25/File-Transfer"
}

var SomedmanFrontend = {
    "name": "Somedman -  Socail Media Manager",
    "desc": "Single Stop to access and manage all social platforms",
    "url": "https://github.com/manasacharyya25/Social-Media-Manager"
}

var SocialSignInFrontend = {
    "name": "Social Sign In With JWT Authentication",
    "desc": "Spring Boot + Angular Project, where user can sign in using Gmail, and is returned with a JWT Token",
    "url": "https://github.com/manasacharyya25/SocialSignInWithJwtAuthentication/tree/main/angular-frontend/frontend-app"
}

var PatientContextView = {
    "name": "Patient Context View",
    "desc": "Webapp that allows to maintain synchronised context over different instances of the application. Developed using C# .Net Core and SignalR",
    "url": "https://github.com/manasacharyya25/Patient-Context-View-Web-App"

}

var AcsProj = {
    "name": "Professional Project",
    "desc": "Developed RESTful APIs and internal- facing APIs for infrastucture services such as RabbitMq, Redis, PostgreSQL in C#.NET.Unit Tested using XUnitand Moq."
}

var DsaProj = {
    "name": "Data Structure and Algorithms",
    "desc": "Implemented several Data Structures and Algorithms using Python 3.x",
    "url": "https://github.com/manasacharyya25/DSA"
}

var AutomatedAcuityProj = {
    "name": "Professional Project",
    "desc": "Developed Health Vitality Algorithms using Python 3.x. Unit Tested using pytest. Ensured Code Quality using lint tools like pylint and mypy"
}

var auroravspostgreProj = {
    "name": "Professional Project",
    "desc": "Performed Load Test on instances of Aurora PostgreSQL and Native PostgreSQL, for varying configuration, to determine better performing Datasource for our use case."
}

var apacheKafkaDockerDeployment = {
    "name": "Docker Deployment & Monitoring of Single/Multiple Node Apache Kafka Cluster",
    "desc": "Wrote DockerCompose Script to spin up Single and Multiple Node Apache Kafka Cluster. Integrated Kafka Monitoring Tools - Grafana and Prometheus."
}

var cloudFoundryProj = {
    "name": "Professional Project",
    "desc": "Provisioning and Maintenance of Production Space with multiple Active Customers. Also deployed and tested several Cloud Native Applications in Dev Space, before shipping to production."
}

var portfolio = {
    "name": "Portfolio",
    "desc": "Interactive Portfolio Website, developed with React",
    "url": "https://github.com/manasacharyya25/Portfolio/tree/main/portfolio"
}

const javaProjs = [SocialSignInBackend, SomedmanBackend, SpringSecurityWithJWT, FileTransfer]

const angularProjs = [SomedmanFrontend, SocialSignInFrontend]

const csharpProjs = [PatientContextView, AcsProj]

const pythonProjs = [DsaProj, AutomatedAcuityProj]

const postgreProjs = [auroravspostgreProj, SomedmanBackend]


function Skill({ technology, rating, projects, eventKey }) {
    return (
        <Card border="danger">
            <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Accordion.Toggle as={Button} variant="button" eventKey={eventKey}>
                    {technology}
                    <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
                </Accordion.Toggle>
                <ProgressBar now={rating} style={{ minWidth: '60%' }} />
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    {
                        projects.map(project => (
                            <>
                                <Card.Title className="SkillsProjectName"><strong>{project.name}</strong></Card.Title>
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
                <Skill technology="C# .Net"
                    rating="80"
                    projects={csharpProjs}
                    eventKey='3' />
                <Skill technology="Python 3.x"
                    rating="60"
                    projects={pythonProjs}
                    eventKey='4' />
                <Skill technology="HTML/CSS"
                    rating="60"
                    projects={[SomedmanFrontend, portfolio]}
                    eventKey='9' />
                <Skill technology="Angular 2+"
                    rating="50"
                    projects={angularProjs}
                    eventKey='2' />
                <Skill technology="CloudFoundry"
                    rating="50"
                    projects={[cloudFoundryProj]}
                    eventKey='8' />
                <Skill technology="PostgreSQL"
                    rating="40"
                    projects={postgreProjs}
                    eventKey='5' />
                <Skill technology="React"
                    rating="30"
                    projects={[portfolio]}
                    eventKey='10' />
                <Skill technology="Apache Kafka"
                    rating="30"
                    projects={[apacheKafkaDockerDeployment]}
                    eventKey='6' />
                <Skill technology="Docker"
                    rating="30"
                    projects={[apacheKafkaDockerDeployment]}
                    eventKey='7' />
                <Card border="danger">
                    <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        Version Control (GIT/ TFS)
                        <ProgressBar now='60' style={{ minWidth: '60%' }} />
                    </Card.Header>
                </Card>

            </Accordion>
        </div>

    )
}