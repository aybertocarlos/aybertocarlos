import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Wrapper from './hoc/wrapper'

import Index from './pages/index'
import Iletisim from './pages/iletisim/iletisim'
import Hakkimda from './pages/hakkimda/hakkimda'
import Ceviriler from './pages/ceviriler/ceviriler'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path='/' exact component={() => (
                    <Wrapper>
                        <Index/>
                    </Wrapper>
                )}/>
                <Route path='/iletisim' exact component={() => (
                    <Wrapper>
                        <Iletisim/>
                    </Wrapper>
                )}/>
                <Route path='/hakkimda' exact component={() => (
                    <Wrapper>
                        <Hakkimda/>
                    </Wrapper>
                )}/>
                <Route path='/ceviriler' exact component={() => (
                    <Wrapper>
                        <Ceviriler/>
                    </Wrapper>
                )}/>
            </React.Fragment>
        );
    }
}

export default App;
