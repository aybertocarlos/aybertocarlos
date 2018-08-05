import React from 'react';
import {isMobile} from 'react-device-detect'
import {Col, Row, Container} from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3, faJs, faTwitter, faTwitch, faGithub} from '@fortawesome/fontawesome-free-brands'

import classes from './footer.css'
import 'bootstrap/dist/css/bootstrap.css'

const footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col xs='12' md='6' className={isMobile ? classes["mobil-left"] : null}>
                        <li className={classes.footerItem}><a href="https://github.com/aybertocarlos">github.<FontAwesomeIcon icon={faGithub}/></a></li>
                        <li className={classes.footerItem}><a href="https://twitter.com/aybertocarlos">twitter.<FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li className={classes.footerItem}><a href="https://twitch.tv/aybertocarlos">twitch.<FontAwesomeIcon icon={faTwitch}/></a></li>
                    </Col>
                    <Col xs='12' md='6'>
                        <p className={isMobile ? classes["mobil-right"] : classes.copyright}><FontAwesomeIcon icon={faReact} spin/> <FontAwesomeIcon icon={faJs}/> <FontAwesomeIcon icon={faHtml5}/> <FontAwesomeIcon icon={faCss3}/>. aybertocarlos &copy; 2018</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default footer;