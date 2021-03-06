import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap'
import {PulseLoader} from 'react-spinners'

import classes from './anime.css'


class Anime extends Component {
    state = {
        anime: {
            title: '',
            score: '',
            poster: '',
            synopsis: '',
            link_canonical: '',
            genres: []
        },
        loading: 1
    }

    componentDidMount() {
        axios.get('https://api.jikan.moe/anime/' + this.props.match.params.id)
            .then(res => {
                let array = {
                    title: res.data.title,
                    score: res.data.score,
                    poster: res.data.image_url,
                    synopsis: res.data.synopsis,
                    link_canonical: res.data.link_canonical,
                    genres: res.data.genre
                }
                this.setState({
                    anime: {
                        ...array
                    },
                    loading: 0
                })
            })
    }

    render() {
        const poster = 'url("' + this.state.anime.poster + '")'
        let page = <div style={{margin: 'auto'}}><PulseLoader color={'#fff'}/></div>
        if (!this.state.loading) {
            page =
                <React.Fragment>
                    <Col xs='12' md='2' className={classes.poster + ' ' + classes["background-shadow"]} style={{backgroundImage: poster}}>
                    </Col>
                    <Col xs='12' md='10' className={classes["info-container"]}>
                        <Row>
                            <h2>{this.state.anime.title}</h2>
                            <Col xs='12' md='12'>
                                <p>{this.state.anime.synopsis}</p>
                            </Col>
                            <Col xs='12' md='6' className={classes.genre}>
                                <h6>Türler</h6>
                                {this.state.anime.genres.map(genre => (
                                    <div key={genre.name}>{genre.name}</div>
                                ))}
                            </Col>
                            <Col xs='12' md='6' className={classes.buttons}>
                                <h6>Linkler</h6>
                                <div className={classes["div-link"]} onClick={() => {
                                    window.open(
                                        this.state.anime.link_canonical,
                                        '_blank'
                                    )
                                }}>MyAnimeList</div>
                                <div className={classes.soon}>İndirme</div>
                            </Col>
                        </Row>
                    </Col>
                </React.Fragment>
        }
        return (
            <React.Fragment>
                <Container className={classes.container}>
                    <Row>
                        {page}
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default withRouter(Anime);