import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import CardSkeletonUI from './SkeletonUI/CardSkeletonUI';

function MovieListing({movies, isMoviesLoading}) {

    const [skeletons] = useState(Array(20).fill())

    return(
        <div className='p-5 flex flex-wrap justify-center gap-5 items-center bg-[#120E43] -mt-[250px] '>
            {isMoviesLoading
            ? skeletons.map((_, i) => <CardSkeletonUI key={i}/>)
            :movies?.map(movie => (
                <Link key={movie?.id} to={`/top-rated/${movie?.id}`}>
                    <MovieCard poster={movie?.poster_path} name={movie?.original_title} date={movie?.release_date} popularity={movie?.popularity} votes={movie?.vote_count} votesAvg={movie?.vote_average}/>
                </Link>
            ))}
        </div>
    )
}

export default MovieListing