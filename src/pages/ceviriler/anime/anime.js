import React, {Component} from 'react';

class Anime extends Component {
    state = {
        title: '',
        score: '',
        poster: '',
        synopsis: '',
        link_canonical: '',
        episode: []
    }

    render() {
        return (
            <div>{this.state.score}</div>
        )
    }
};

export default Anime;