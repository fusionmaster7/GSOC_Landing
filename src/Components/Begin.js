import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import './Begin.css'
import 'bootstrap/dist/css/bootstrap.css';
import Info from './Info';

//Component to render the Begin Page
class Begin extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron className="text-center" id="jumbo">
                    <h1 id="heading">Hey,</h1>
                    <h2 id="heading">GAWDS is organising a workshop on Google Summer of Code!</h2>
                </Jumbotron>
                <Container>
                    <Info />
                    <hr />
                </Container>
            </div>
        );
    }
}

export default Begin;