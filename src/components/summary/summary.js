import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

import './summary.css'

function SummaryItem({ heading, body, eventKey }) {
    return (
        <Card style={{ minWidth: '100%' }}>
            <Accordion.Toggle as={Card.Header} variant="button" eventKey={eventKey} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>{heading}</h1>
                <img src='./assets/caret-down-solid.svg' height='10px' alt='details' style={{ paddingLeft: '0.5rem' }} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
            </Accordion.Collapse>
        </Card >
    )
}

export function Summary() {
    return (
        <div className="summary">
            <Accordion defaultActiveKey='0'>
                <SummaryItem heading="Profile"
                    body={
                        <div>
                            Passionate <strong>Software Engineer</strong> with <strong>3+ Years</strong>
                            of Professional Experience in an <strong>Agile Team</strong>,
                            developing Modularized, Bug-Free, Quality Code, for <strong>Healthcare Domain Products</strong>.
                            Seeking to levarage proven coding and problem-solving skills to provide value
                            in your Organization.
                        </div>
                    }

                    eventKey='0' />
                <SummaryItem heading="Professional Experience"
                    body={
                        <>
                            <div>
                                <h3>Software Engineer, Philips Healthcare</h3>
                                <h5>June 2018 - Present</h5>

                                <ul style={{ marginLeft: '5rem' }}>
                                    <li>
                                        Developed <strong>internal-facing APIs</strong> for infrastucture services such as
                                    <strong> RabbitMq, Redis, PostgreSQL</strong> in <strong>C# .NET</strong>. Unit Tested
                                    using <strong>XUnit</strong> and <strong>Moq</strong>.
                                </li>

                                    <li>
                                        Hands On Experience of <strong>TDD</strong> with <strong>Gherkin</strong> and
                                    <strong>Specflow</strong>
                                    </li>

                                    <li>
                                        Developed <strong>RESTful APIs</strong> for complex Microservice Architectures in <strong>C# .NET</strong>
                                    and <strong>Java Spring Boot</strong>
                                    </li>

                                    <li>
                                        Developed Health Vitality Algorithms using <strong>Python 3.x</strong>. Unit Tested using <strong>pytest</strong>.
                                    Ensured <strong>Code Quality</strong> using lint tools like <strong>pylint</strong> and <strong>mypy</strong>
                                    </li>

                                    <li>
                                        Deployed <strong>Apache Kafka Cluster</strong> using <strong>Docker. Monitored</strong> Kafka Cluster
                                    using <strong>Grafana</strong> and <strong>Prometheus</strong>.
                                </li>

                                    <li>
                                        Successful Deployment of several applications onto <strong>Philips Proprietary Cloud HSDP</strong> using <strong>CloudFoundry</strong>.
                                </li>

                                    <li>
                                        Performed Load Test on <strong>Aurora DB</strong> and <strong>PostgreSQL</strong> using <strong>JMeter Scritps</strong>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>Summer Intern, CDAC Bangalore</h3>
                                <h5>May 2017 - July 2017</h5>

                                <ul style={{ marginLeft: '5rem' }}>
                                    <li>
                                        Worked on <strong>SCADA</strong> Technology.
                                    </li>

                                    <li>
                                        Developed Load Balancer using Sockets in C.
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                    eventKey='1' />
                <SummaryItem heading="Personal Projects"
                    body={
                        <>
                            <div>
                                <h3>Social Media Manager</h3>
                                <h5>December 2020 - Present</h5>

                                <p><i>Webapp that provides its users with a single stop, to acess and manage all their social platforms.</i></p>

                                <ul style={{ marginLeft: '5rem' }}>
                                    <li>
                                        Developed  Frontend using <strong>Angular 2+, Figma, teleporthq.io</strong>.
                                    </li>

                                    <li>
                                        Developed Backend using <strong>Java Spring Boot</strong> and <strong>PostgreSQL</strong>.
                                    </li>

                                    <li>
                                        Integrated with <strong>Public APIs</strong> of <strong>Facebook, Twitter</strong> and <strong>Tumblr</strong>.
                                    </li>

                                    <li>
                                        Deployed Frontend in <strong>Netlify</strong> and Backend in <strong>Heroku</strong>.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3>Portfolio</h3>

                                <p><i>My Resume + Interactive</i></p>

                                <ul style={{ marginLeft: '5rem' }}>
                                    <li>
                                        Developed with 3 hours worth of <strong>React</strong> Knowledge. No fancy Redux States and Stuff.
                                    </li>
                                </ul>

                            </div>
                        </>
                    }
                    eventKey='2' />
                <SummaryItem heading="Education"
                    body={
                        <div>
                            <h3>National Institute of Technology, Silchar</h3>
                            <h4>Bachelor of Technology, Computer Science and Engineering</h4>
                            <h5>April 2014 - May 2018</h5>
                        </div>
                    }
                    eventKey='3' />
            </Accordion>
        </div >
    )
}