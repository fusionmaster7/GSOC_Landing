import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import './Begin.css'
import 'bootstrap/dist/css/bootstrap.css';
import Info from './Info';
import Mentor from './Mentor';

//Component to render the Begin Page
class Begin extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 id="heading">Hey,</h1>
                    <h2 id="heading">GAWDS is organising a workshop on Google Summer of Code!</h2>
                </Jumbotron>
                <Container>
                    <Info />
                    <hr />
                    <br />
                    <div style={{textAlign:"center"}}>
                        <h2 id="heading">We also have a mentor at the Keynote!</h2>
                    </div>
                    <Mentor />
                </Container>
            </div>
        );
    }
}

export default Begin;