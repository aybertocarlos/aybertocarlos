import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        let example = {
            anan: 'baban'
        }
        return (
            <React.Fragment>
                {...example}
            </React.Fragment>
        );
    }
}

export default App;
