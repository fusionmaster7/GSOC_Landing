import React from 'react';
import {Button,Jumbotron} from 'react-bootstrap';
import './Begin.css'
import 'bootstrap/dist/css/bootstrap.css';
import Info from './Info';
import Mentor from './Mentor';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

//Component to render the Begin Page
class Begin extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 id="heading">Hey,</h1>
                    <h2 id="heading">GAWDS is organising a workshop on Google Summer of Code!</h2>
                    <br />
                    <div style={{textAlign:"center"}}>
                        <Button variant="primary">About GSOC</Button>
                        <Button variant="primary">Mentor Info</Button>
                    </div>
                </Jumbotron>
                <Router>
                    <Route exact path ='/' component={Info}></Route>
                    <Route path='/mentor' component={Mentor}></Route>
                </Router>
            </div>
        );
    }
}

export default Begin;