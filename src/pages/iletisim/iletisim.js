import React from 'react';
import {Col, Row, Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {isMobile} from 'react-device-detect'

import classes from './iletisim.css'
import BongSoon from '../../img/bongsoon3.png'

const iletisim = () => {
    const yazi1 = 'Bana ulaşmak için'
    const email = 'aybertocarlos@gmail.com'
    const yazi2 = 'email adresini kullanabilirsiniz.'

    return (
        <React.Fragment>
            <Container  className={classes.container}>
                <Row>
                    <Col xs='12' md={{size: 6, offset: 3}} className={classes.header}>
                        <span>İletişim</span>
                    </Col>
                    {isMobile ? null : <Col md='3' className={classes.anasayfa}><p>Ana sayfaya git</p></Col>}
                    <Col md='12'>
                        <Row>
                            <Col xs='12' md='3' className={isMobile ? classes["avatar-mobile"] : classes.avatar + ' ' + classes["background-shadow"]}>
                                <img src={BongSoon} width="100%"/>
                            </Col>
                            <Col md='9' className={classes.yazi}>
                                <p style={isMobile ? {margin: '1.5em 0 0 0'} : {margin: '1.5em 0 0 1.5em'}}>{yazi1}</p>
                                <p className={classes.email}>{email}</p>
                                <p style={isMobile ? {margin: '0 0 1.5em 0'} : {margin: '.5em 0 0 1.5em'}}>{yazi2}</p>
                                <a href="http://puzzlesubs.com/member.php?action=profile&uid=4284"><div className={classes.buton}><p>PuzzleSubs profilim</p></div></a>
                                <a href="http://steamcommunity.com/id/aybertocarlos/"><div className={classes.buton}><p>Steam profilim</p></div></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default iletisim;