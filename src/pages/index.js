import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import classes from './index.css'
import {isMobile} from 'react-device-detect'
//Resimler
import cv1 from '../img/series/1.jpg'
import cv2 from '../img/series/2.jpg'
import cv3 from '../img/series/3.jpg'
import cv4 from '../img/series/4.jpg'
import cv5 from '../img/series/5.jpg'
import cv6 from '../img/series/6.jpg'
import cv7 from '../img/series/7.jpg'
import cv8 from '../img/series/8.jpg'

const index = () => {
    return (
        <React.Fragment>
            <Container className={classes["poster-container"]}>
                <Row>
                    <Row style={{margin: 0}}>
                        {isMobile
                            ?
                            <Col md='1' style={{padding: 0}}>
                                <Col xs='12' md='12' className={classes["header-mobil"]}>
                                    <h2>FAVORİLERİM</h2>
                                </Col>
                            </Col>
                            :
                            <Col md='1' style={{padding: 0}}>
                                <Col xs='12' md='12' className={classes.header}>
                                    <h2>FAVORİLERİM</h2>
                                </Col>
                            </Col>}
                        <Col xs='12' md='11'>
                            <Row>
                                <Col xs='6' md='3' className={classes.poster}
                                     style={{backgroundImage: "url(" + cv1 + ")"}}>
                                    <h3>Remember: War of The Son</h3>
                                    <div className={classes.overlay}></div>
                                </Col>
                                <Col xs='6' md='3' className={classes.poster + ' ' + classes.netflix}
                                     style={{backgroundImage: "url(" + cv2 + ")"}}>
                                    <h3>Strong Woman Do Bong Soon</h3>
                                    <a href="https://www.netflix.com/title/80198001">
                                        <div className={classes.overlay}></div>
                                    </a>
                                </Col>
                                <Col xs='6' md='3' className={classes.poster + ' ' + classes.netflix}
                                     style={{backgroundImage: "url(" + cv3 + ")"}}>
                                    <h3>Man to Man</h3>
                                    <a href="https://www.netflix.com/title/80176866">
                                        <div className={classes.overlay}></div>
                                    </a>
                                </Col>
                                <Col xs='6' md='3' className={classes.poster}
                                     style={{backgroundImage: "url(" + cv4 + ")"}}>
                                    <h3>Love Live! Sunshine!!</h3>
                                    <div className={classes.overlay}></div>
                                </Col>
                                <Col xs='6' md='3' className={classes.poster}
                                     style={{backgroundImage: "url(" + cv5 + ")"}}>
                                    <h3>Clannad</h3>
                                    <div className={classes.overlay}></div>
                                </Col>
                                <Col xs='6' md='3' className={classes.poster}
                                     style={{backgroundImage: "url(" + cv6 + ")"}}>
                                    <h3>Gakkou Gurashi!</h3>
                                    <div className={classes.overlay}></div>
                                </Col>
                                <Col xs='6' md='3' className={classes.poster}
                                     style={{backgroundImage: "url(" + cv7 + ")"}}>
                                    <h3>Love Live! School Idol Project</h3>
                                    <div className={classes.overlay}></div>
                                </Col>
                                <Col xs='6' md='3' className={classes.poster}
                                     style={{backgroundImage: "url(" + cv8 + ")"}}>
                                    <h3>Shigatsu wa Kimi no Uso</h3>
                                    <div className={classes.overlay}></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default index;