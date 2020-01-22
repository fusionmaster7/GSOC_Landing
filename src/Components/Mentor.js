import React from 'react';
import {Row,Col,Card,Image} from 'react-bootstrap';
import './Mentor.css';
import mentor from '../images/mentor.jpeg';
import 'bootstrap/dist/css/bootstrap.css';

//Component to render the mentor info
class Mentor extends React.Component{
    render(){
        return(
            <Row style={{textAlign:"center"}} id="back">
                <Col>
                    <Image src={mentor} roundedCircle id="mentor"/>
                    <Card>
                        <Card.Body>
                            <Card.Title id="card-heading">
                                Jaskirat Singh
                            </Card.Title>
                            <Card.Subtitle>
                                <p className="heading">Co-Founder,Codeuino</p>
                            </Card.Subtitle>
                            <hr />
                            <Card.Text>
                                <p>
                                    Google Code in and Google Summer of Code Mentor
                                </p>
                                <p>
                                    Volunteer at Sugarlabs and jboss Community,<br />
                                    Team Member at Stanford Scholar Initiative
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Mentor;