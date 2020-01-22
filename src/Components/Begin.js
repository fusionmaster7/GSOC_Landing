import React from 'react';
import ParticlesBg from 'particles-bg';
import {Container,Row,Col,Card,Jumbotron} from 'react-bootstrap';
import './Begin.css'
import 'bootstrap/dist/css/bootstrap.css';

//Component to render the Begin Page
class Begin extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 id="heading">Hello!</h1>
                    <h2 id="heading">GAWDS is organising a workshop on Google Summer of Code!</h2>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col s={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title id="card-heading">What is GSOC?</Card.Title>
                                    <Card.Text>
                                        Google Summer of Code is a global program focused on bringing more student developers into open source software development. 
                                        Students work with an open source organization on a 3 month programming project during their break from school.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col s={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title id="card-heading">Origin of GSOC</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col s={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title id="card-heading">Benefits of GSOC</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <ParticlesBg type="color" bg={true} />
            </div>
        );
    }
}

export default Begin;