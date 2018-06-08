import React from 'react';
import classes from './footer.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Col, Row, Container} from 'reactstrap'

const footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col md='6'>
                        <li className={classes.footerItem}><a>github.</a></li>
                        <li className={classes.footerItem}><a>twitter.</a></li>
                        <li className={classes.footerItem}><a>twitch.</a></li>
                    </Col>
                    <Col md='6'>
                        <p className={classes.copyright}>Built with ReactJS - aybertocarlos &copy; 2018</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default footer;