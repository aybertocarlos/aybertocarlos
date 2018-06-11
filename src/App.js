import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Wrapper from './hoc/wrapper'

import Index from './pages/index'
import Iletisim from './pages/iletisim/iletisim'
import Hakkimda from './pages/hakkimda/hakkimda'
import Ceviriler from './pages/ceviriler/ceviriler'
import Anime from './pages/ceviriler/anime/anime'
import Manga from './pages/ceviriler/manga/manga'


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
                <Route path='/cevirilerim' exact component={() => (
                    <Wrapper>
                        <Ceviriler/>
                    </Wrapper>
                )}/>
                <Route path={'/cevirilerim/anime/:id'} exact component={() => (
                    <Wrapper>
                        <Anime/>
                    </Wrapper>
                )}/>
                <Route path={'/cevirilerim/manga/:id'} exact component={() => (
                    <Wrapper>
                        <Manga/>
                    </Wrapper>
                )}/>
            </React.Fragment>
        );
    }
}

export default App;
