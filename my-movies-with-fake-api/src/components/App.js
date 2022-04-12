import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import axios from "axios";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

class App extends React.Component {
    state = {
        movies: [],
        searchQuery: ""
    }

    /* ---------AXIOS API ile işlemler--------- */
    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data });
    }

    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`);
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }));
    }
    /* ---------AXIOS API ile işlemler--------- */

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                /* Burada searchQuery değerini diziden filtreliyorum ve geri döndürüyorum */
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
                <AddMovie />
            </div>
        )
    }
}

export default App;