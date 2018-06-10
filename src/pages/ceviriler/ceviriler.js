import React, {Component} from 'react';
import axios from 'axios'
import {Container, Row, Col} from 'reactstrap'
import {PulseLoader} from 'react-spinners'

import classes from './ceviriler.css'
import 'bootstrap/dist/css/bootstrap.css'

class Ceviriler extends Component {
    state = {
        posts: [{
            id: "30727",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3794"
        }, {
            id: "92985",
            type: "manga",
            link: "http://www.manga-tr.com/manga-gakkou-gurashi-anthology-comic-on.html"
        }, {
            id: "33206",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3617"
        }, {
            id: "34126",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3606"
        }, {
            id: "31716",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3354"
        }, {
            id: "67645",
            type: "manga",
            link: "http://www.manga-tr.com/manga-namaikizakari.html"
        }, {
            id: "32547",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3542"
        }, {
            id: "33161",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=941"
        }, {
            id: "33433",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3646"
        }, {
            id: "24765",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3545"
        }, {
            id: "33091",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3567"
        }, {
            id: "33190",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3505"
        }, {
            id: "31404",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3241"
        }, {
            id: "30831",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3152"
        }, {
            id: "21097",
            type: "manga",
            link: "http://puzzlesubs.com/showthread.php?tid=3325"
        }, {
            id: "32526",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3398"
        }, {
            id: "34973",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3696"
        }, {
            id: "11896",
            type: "manga",
            link: "http://www.manga-tr.com/manga-reimei-no-arcana.html"
        }, {
            id: "25942",
            type: "manga",
            link: "http://www.manga-tr.com/manga-kyoukai-senjou-no-limbo.html"
        }, {
            id: "34914",
            type: "anime",
            link: "http://puzzlesubs.com/showthread.php?tid=3796"
        }, {
            id: "62509",
            type: "manga",
            link: "http://www.manga-tr.com/manga-new-game.html"
        }, {
            id: "55163",
            type: "manga",
            link: "http://www.manga-tr.com/manga-gakkou-gurashi.html"
        }],
        loading: 1,
        error: 0,
        errorMsg: "",
        postGot: []
    }

    componentDidMount() {
        this.state.posts.map(anime => {
            axios.get('https://api.jikan.moe/' + anime.type + '/' + anime.id)
                .then(res => {
                    let oldArray = this.state.postGot
                    let newArray = []
                    newArray = {
                        ...res.data,
                        ...anime
                    }
                    this.setState({
                        postGot: [
                            ...oldArray,
                            newArray
                        ]
                    })
                    if (this.state.posts.length === this.state.postGot.length) {
                        this.setState({loading: 0})
                    }
                })
        })
    }

    render() {
        let page = <div style={{margin: 'auto'}}><PulseLoader color={'#fff'}/></div>
        if (!this.state.loading) {
            page = this.state.postGot.map(res => {
                return (
                    <Col key={res.mal_id} xs='6' md='6' lg='4' xl='3' className={classes["anime-container"]} style={{cursor: 'pointer'}} onClick={() => {
                        window.open(
                            res.link,
                            '_blank'
                        )
                    }}>
                        <Row>
                            <Col md='3' className={classes.poster + ' ' + classes["background-shadow"]}
                                 style={{backgroundImage: 'url(' + res.image_url + ')'}}>
                            </Col>
                            <Col md='9' className={classes["poster-title"]}>
                                <p>{res.title}</p>
                            </Col>
                        </Row>
                    </Col>
                )
            })
        }

        return (
            <React.Fragment>
                <Container fluid className={classes.container}>
                    <Row>
                        <Col xs='6' md='6' lg='4' xl='3' className={classes["anime-container"]}>
                            <Row>
                                <Col md='3' className={classes.poster + ' ' + classes["background-shadow"] + ' ' + classes.bongsoon}>
                                </Col>
                                <Col md='9' className={classes["poster-title"]}>
                                    <p>Çevirilerim</p>
                                </Col>
                            </Row>
                        </Col>
                        {page}
                    </Row>
                </Container>
            </React.Fragment>
    )
    }
    }

    export default Ceviriler;