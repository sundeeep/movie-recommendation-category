import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import MovieCard from "../components/MovieCard.jsx";
import tmdbGetApi from '../tmdb-helpers/tmdb.endpoints.js';
import CardSkeletonUI from '../components/SkeletonUI/CardSkeletonUI'
export default function Home() {
    const [movie, setMovie] = useState(null);
    useEffect(()=>{
        fetchBannerMovie();
    },[])

    const tmdb = new tmdbGetApi();
    const fetchBannerMovie = async () => {
        const data = await tmdb.getIndividualDetail("movie", 458156);
        // console.log(data);
        setMovie(data);        
    }
    return (
        <div className="relative bg-[#6A1B4D] w-[100vw]">
            <header className='absolute inset-x-0 top-0 bg-transparent z-30 p-7 flex'>
                <Header />
            </header>

            <div className='relative h-[100vh] w-[100vw] z-20'>
                <img className="h-[100%] w-[100%] object-cover contrast-125" src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt="" />
                <div className='absolute bg-gradient-to-b from-black/75 via-transparent to-black inset-0 z-10'></div>
            </div>
        </div>
    )
}
