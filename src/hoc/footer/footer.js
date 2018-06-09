import React from 'react';
import {isMobile} from 'react-device-detect'
import classes from './footer.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Col, Row, Container} from 'reactstrap'

const footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col xs='12' md='6' className={isMobile ? classes.mobil : null}>
                        <li className={classes.footerItem}><a>github.</a></li>
                        <li className={classes.footerItem}><a>twitter.</a></li>
                        <li className={classes.footerItem}><a>twitch.</a></li>
                    </Col>
                    <Col xs='12' md='6'>
                        <p className={isMobile ? classes.mobil : classes.copyright}>Built with ReactJS - aybertocarlos &copy; 2018</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default footer;