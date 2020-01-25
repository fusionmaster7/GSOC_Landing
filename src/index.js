import React from 'react';
import ReactDOM from 'react-dom';
import Begin from './Components/Begin';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <Begin />
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));