import React from 'react';
import {Button,Jumbotron} from 'react-bootstrap';
import './Begin.css'
import 'bootstrap/dist/css/bootstrap.css';
import Info from './Info';

//Component to render the Begin Page
class Begin extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 id="heading">Hey There</h1>
                    <h2 id="heading">GAWDS is organising a workshop on Google Summer of Code!</h2>
                    <br />
                    <div style={{textAlign:"center"}}>
                        <Button variant="primary">About GSOC</Button>
                        <Button variant="primary">Mentor Info</Button>
                    </div>
                </Jumbotron>
                <Info />
            </div>
        );
    }
}

export default Begin;