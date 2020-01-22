import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import './Begin.css'
import 'bootstrap/dist/css/bootstrap.css';
import Info from './Info';
import Mentor from './Mentor';
import ParticlesBg from 'particles-bg';

//Component to render the Begin Page
class Begin extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 id="heading">Hey,</h1>
                    <h2 id="heading">GAWDS is organising a workshop on Google Summer of Code!</h2>
                </Jumbotron>
                <Info />
                <div style={{textAlign:"center"}}>
                    <h2 id="heading">We also have a mentor at the Keynote!</h2>
                </div>
                <Mentor />
                <ParticlesBg type="color" bg={true} />
            </div>
        );
    }
}

export default Begin;