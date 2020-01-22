import React from 'react';
import ReactDOM from 'react-dom';
import ParticlesBg from 'particles-bg';
import Begin from './Components/Begin';

class App extends React.Component{
    render(){
        return(
            <div>
                <ParticlesBg type={"cobweb"} bg={true} />
                <Begin />
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));