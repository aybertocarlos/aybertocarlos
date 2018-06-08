import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'

import wrapper from './hoc/wrapper'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path='/' exact component={() => (<div>placeholder</div>)}/>
            </React.Fragment>
        );
    }
}

export default App;
