import React, { Component } from 'react';
import { Header, MovieList, MovieDetails, Loading } from './components';
import data from './data';

class App extends Component {
    updateSelectedMovie = (index) => {
        this.setState({
            selectedMovie: index
        })
    }
    constructor(props) {
        super(props);

        this.state = {
            movies: null,
            selectedMovie: 0,
            loaded: false
        }
        setTimeout(() => {
            this.setState({
                movies: data,
                loaded: true
            })
        }, 1000);
    }

    render() {
        return (<div className="App d-flex flex-column">
            <Header />{this.state.loaded ? (
                <div className="d-flex flex-row flex-fill pt-4 p-2" >
                    <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
                    <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
                </div>
            ) : (
                <Loading />
            )}
        </div>
        );
    }
}

export default App;