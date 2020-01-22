import React from 'react';
import ParticlesBg from 'particles-bg';
import {Container,Row,Col,Card,Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Info.css'

//Component to render info cards
class Info extends React.Component{
    render(){
        return(
            <Container>
            <Row>
                <Col s={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title id="card-heading">What is GSOC?</Card.Title>
                                <hr />
                            <Card.Text>
                                <p>
                                    Google Summer of Code is a global program focused on bringing more student developers into open source software development. 
                                    Students work with an open source organization on a 3 month programming project during their break from school.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title id="card-heading">Origin of GSOC</Card.Title>
                            <hr />
                            <Card.Text>
                                <p>
                                    Google Summer of Code began in 2005 as a complex experiment with a simple goal: helping students find work related to their academic pursuits during their school holidays.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title id="card-heading">Benefits of GSOC</Card.Title>
                            <hr />
                            <Card.Text>
                                <p>
                                    Cracking GSOC offers the following Advantages:
                                </p>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Community
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p id="benefits">
                                                    Helps you in networking and gaining contacts.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            Career
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p id="benefits">
                                                    GSOC is quite competitive.<br />
                                                    Companies pay a lot of attention to this.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as ={Card.Header} eventKey="2">
                                            Chance with Google itself.
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p id="benefits">
                                                    One time referral given to Google Summer of Code students can be used for a possible job opportunity at Google itself.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ParticlesBg type="color" bg={true} />
        </Container>
        );
    }
}

export default Info;