import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";

class App extends React.Component {
    state = {
        movies: [],
        searchQuery: ""
    }

    async componentDidMount() {
        const response = await axios.get("https://api.themoviedb.org/3/list/8198208?api_key=${write_your_api_key}&language=en-US");
        this.setState({ movies: response.data.items});
    }

    deleteMovie = async (movie) => {
        axios.post(`https://api.themoviedb.org/3/list/8198208/remove_item?media_id=${movie.id}&session_id=${write_your_session_id}&api_key=${write_your_api_key}`);
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }));
    }

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
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
            </div>
        )
    }
}

export default App;