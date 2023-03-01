import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import tmdbGetApi from '../tmdb-helpers/tmdb.endpoints.js';
import MovieListing from '../components/MovieListing';
import Banner from '../components/Banner.jsx';

export default function TMDBCategory() {

    const [movies, setMovies] = useState(null);
    const [isMoviesLoading, setIsMoviesLoading] = useState(true);
    const [backdropImage, setBackdropImage] = useState(null);

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
        <div className="relative bg-[#120E43]">
            <header className='absolute inset-x-0 top-0 bg-transparent z-30 p-7 flex'>
                <Header />
            </header>

            <Banner backdropImage={backdropImage}/>

            <MovieListing setBackdrop={setBackdropImage} movies={movies} isMoviesLoading={isMoviesLoading} skeletonsCount={20}/>
        </div>
    )
}
