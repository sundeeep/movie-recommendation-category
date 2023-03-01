import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import tmdbGetApi from '../tmdb-helpers/tmdb.endpoints.js';
import MovieListing from '../components/MovieListing';

export default function TMDBCategory() {

    const [movies, setMovies] = useState(null);
    const [isMoviesLoading, setIsMoviesLoading] = useState(true);

    const {category} = useParams();
    console.log(category)

    useEffect(()=>{
        fetchAllTopRatedMovies();
    },[category])

    const tmdb = new tmdbGetApi();
    const fetchAllTopRatedMovies = async () => {
        const data = await tmdb.getAllList("movie", category, 100);
        console.log(data?.results);
        setMovies(data?.results);
        setIsMoviesLoading(false);        
    }

    return (
        <div className="relative bg-[#242B2E]">
            <header className='absolute inset-x-0 top-0 bg-transparent z-30 p-7 flex'>
                <Header />
            </header>

            <div className='relative h-[100vh] w-[100vw]'>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#120E43] z-20'/>
                <img className="h-[100%] w-[100%] object-cover contrast-125 -z-20" src={`https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg`} alt="Banner Image" />
            </div>

            <MovieListing movies={movies} isMoviesLoading={isMoviesLoading} skeletonsCount={20}/>

        </div>
    )
}
