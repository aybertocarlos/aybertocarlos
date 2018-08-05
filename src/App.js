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
                <Wrapper>
                    <Route path='/' exact component={Index}/>
                    <Route path='/iletisim' exact component={Iletisim}/>
                    <Route path='/hakkimda' exact component={Hakkimda}/>
                    <Route path='/cevirilerim' exact component={Ceviriler}/>
                    <Route path={'/cevirilerim/anime/:id'} exact component={Anime}/>
                    <Route path={'/cevirilerim/manga/:id'} exact component={Manga}/>
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default App;
