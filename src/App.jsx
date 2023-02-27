import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import tmdbGetApi from './tmdb-helpers/tmdb.endpoints.js'

function App() {

  const [allMovies, setAllMovies] = useState();

  useEffect(() => {
    fetchAllMovies()
  }, [])
  // const TMDB_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=a7fc86247b11632c0653045db31b40ff&page=500"
  
  const tmdb = new tmdbGetApi();
  const fetchAllMovies = async() => {
    const data = await tmdb.getAllList("movie", "top_rated", 500);
    // console.log(data?.results);
    setAllMovies(data?.results);
  }
  
  return (
    <div>
      {
        allMovies?.map((movie) => {
          return(
            <h1 key={movie?.id}>{movie?.title}</h1>
          )
        })
      }
    </div>
  )
}

export default App;