import { IconButton } from '@mui/material';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import CardSkeletonUI from './SkeletonUI/CardSkeletonUI';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function MovieListing({setBackdrop, movies, isMoviesLoading, skeletonsCount}) {

    const scrollLeft = () => {
        const slider = document.querySelector('#slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const scrollRight = () => {
        const slider = document.querySelector('#slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const [skeletons] = useState(Array(skeletonsCount).fill())

    return(
        <div className='flex items-center fixed bottom-0 inset-x-0 z-30'>
            <IconButton onClick={scrollLeft} className='z-30 text-white'><ArrowLeftIcon className='pointer-events-none text-white z-30 text-5xl'/></IconButton>
            <div id="slider" className='p-5 flex items-center gap-5 overflow-x-scroll scroll scroll-smooth scrollbar-hide'>
                {isMoviesLoading
                    ? skeletons.map((_, i) => <div key={i}><CardSkeletonUI /></div>)
                    :movies?.filter((movie) => movie?.poster_path).map((movie) => (
                        <Link key={movie?.id} to={`/top-rated/${movie?.id}`} className="">
                            <MovieCard backdrop={movie?.backdrop_path} setBackdrop={setBackdrop} poster={movie?.poster_path} name={movie?.original_title} date={movie?.release_date} popularity={movie?.popularity} votes={movie?.vote_count} votesAvg={movie?.vote_average}/>
                        </Link>
                ))}
            </div>
            <IconButton onClick={scrollRight} className='z-30 text-white'><ArrowRightIcon className='pointer-events-none text-white z-30 text-5xl'/></IconButton>
        </div>
    )
}

export default MovieListing