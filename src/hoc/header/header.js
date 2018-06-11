import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {slide as Menu} from 'react-burger-menu'
import {isMobile} from 'react-device-detect'
import {NavLink} from 'react-router-dom'

import Logo from '../../img/logo.png'
import classes from './header.css'

const Header = () => {
    if (!isMobile) {
        return (
            <React.Fragment>
                <div className={classes.debug}>In Development</div>
                <header>
                    <div className={classes.hcontainer}>
                        <NavLink exact to='/' activeClassName={classes.active}>
                            <li className={classes.headerItem}>Ana sayfa</li>
                        </NavLink>
                        <NavLink to='/cevirilerim' activeClassName={classes.active}>
                            <li className={classes.headerItem}>Çevirilerim</li>
                        </NavLink>
                        <NavLink exact to='/hakkimda' activeClassName={classes.active}>
                            <li className={classes.headerItem}>Hakkımda</li>
                        </NavLink>
                        <NavLink exact to='/iletisim' activeClassName={classes.active}>
                            <li className={classes.headerItem}>İletişim</li>
                        </NavLink>
                    </div>
                    <img className={classes.Logo} src={Logo}/>
                </header>
            </React.Fragment>
        )
    }
    if (isMobile) {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs='12'><img className={classes.Logo} src={Logo} style={{width: '60%'}}/></Col>
                        <Col xs='12' className={classes["header-mobil"]}>
                            <NavLink exact to='/' activeClassName={classes.active}>
                                <li className={classes["headerItem-mobil"]}>Ana sayfa</li>
                            </NavLink>
                            <NavLink to='/cevirilerim' activeClassName={classes.active}>
                                <li className={classes["headerItem-mobil"]}>Çevirilerim</li>
                            </NavLink>
                            <NavLink exact to='/hakkimda' activeClassName={classes.active}>
                                <li className={classes["headerItem-mobil"]}>Hakkımda</li>
                            </NavLink>
                            <NavLink exact to='/iletisim' activeClassName={classes.active}>
                                <li className={classes["headerItem-mobil"]}>İletişim</li>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
export default Header;