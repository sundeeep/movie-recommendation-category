import React, { useEffect, useState } from 'react'
import tmdbGetApi from './tmdb-helpers/tmdb.endpoints.js'
import CardSkeletonUI from './components/SkeletonUI/CardSkeletonUI';
function App() {

  const [allMovies, setAllMovies] = useState();

  useEffect(() => {
    fetchAllMovies()
  }, [])
  
  const tmdb = new tmdbGetApi();
  const fetchAllMovies = async() => {
    const data = await tmdb.getGenreList("movie");
    console.log(data)
    const genres = data.genres;
    setAllMovies(data?.genres);
  }
  
  return (
    <div>
      <CardSkeletonUI />
    </div>
  )
}

export default App;