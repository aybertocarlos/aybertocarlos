import React from 'react';
import {Col, Row, Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {isMobile} from 'react-device-detect'
import {Link} from 'react-router-dom'

import classes from './hakkimda.css'
import BongSoon from '../../img/bongsoon2.png'

const hakkimda = () => {
    const hyazi1 = "Eskiden PuzzleSubs Anime & Manga çeviri grubunda yöneticilik yapmış, şu anda da aktif olarak KoreanTürk Çeviri Grubunda çevirmenlik yapan, gönüllü bir birey.\n" +
        "Son zamanlarda anime izlemeyi bırakıp, Kore dizilerinin dünyasına dalmıştır. Şu anki öncelikli amacı, Netflix üzerindeki Kore dizilerinin hepsini bitirmektir.\n"

    const hyazi2 = "Dram & Komedi & Romantizm \"genre\"larının hayranı.\n" +
        "Ne kadar cheesy o kadar güzel."

    return (
        <React.Fragment>
            <Container  className={classes.container}>
                <Row>
                    <Col xs='12' md={{size: 6, offset: 3}} className={classes.header}>
                        <span>Hakkımda</span>
                    </Col>
                    {isMobile ? null : <Col md='3' className={classes.anasayfa}><Link to="/"><p>Ana sayfaya git</p></Link></Col>}
                    <Col md='12'>
                        <Row>
                            <Col xs='12' md='3' className={isMobile ? classes["avatar-mobile"] : classes.avatar + ' ' + classes["background-shadow"]}>
                                <img src={BongSoon} width="100%"/>
                            </Col>
                            <Col md='9' className={classes.yazi}>
                                <p>{hyazi1}</p>
                                <p>{hyazi2}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default hakkimda;