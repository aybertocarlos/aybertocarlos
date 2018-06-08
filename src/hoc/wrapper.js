import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'

const wrapper = props => {
    return (
        <React.Fragment>
            <Header/>
            <div id='body'>
                {props.children}
            </div>
            <Footer/>
        </React.Fragment>
    )
};

export default wrapper;