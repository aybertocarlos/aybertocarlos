import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu'
import {isMobile} from 'react-device-detect'
import {NavLink} from 'react-router-dom'

import Logo from '../../img/logo.png'
import classes from './header.css'

const Header = () => {
    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            overflow: 'hidden'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'block',
            color: 'white',
            textDecoration: 'none',
            fontSize: '2em'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }
    if(!isMobile) {
        return (
            <React.Fragment>
                <header>
                    <div className={classes.hcontainer}>
                        <NavLink exact to='/' activeClassName={classes.active}><li className={classes.headerItem}>Ana sayfa</li></NavLink>
                        <NavLink exact to='/ceviriler' activeClassName={classes.active}><li className={classes.headerItem}>Çeviriler</li></NavLink>
                        <NavLink exact to='/hakkimda' activeClassName={classes.active}><li className={classes.headerItem}>Hakkımda</li></NavLink>
                        <NavLink exact to='/iletisim' activeClassName={classes.active}><li className={classes.headerItem}>İletişim</li></NavLink>
                    </div>
                    <img className={classes.Logo} src={Logo}/>
                </header>
            </React.Fragment>
        )
    }
    if(isMobile) {
        <div>mobile placeholder</div>
    }
}

export default Header;