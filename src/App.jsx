import React, { useEffect, useState } from "react"
import MovieCard from './MovieCard'
import './App.css'
import searchIcon from './search.svg'
import { Fragment } from "react"

// b4da1c1a

const API_URL = "http://www.omdbapi.com?apikey=b4da1c1a";

const movie1 = {
    "Title": "The Amazing Spiderman",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A", 
}


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }
    

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <Fragment>
            <div className="app">
                <h1>MovieLand</h1>
                <div className="search">
                    <input
                        placeholder="Search for movies"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <img
                    src={searchIcon}
                    alt="search icon"
                    onClick={() => searchMovies(searchTerm)}
                    />
            </div>
            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found!</h2>
                    </div>
                )
            }
        </Fragment>
    );
}

export default App;