import React, {useState} from 'react'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PollIcon from '@mui/icons-material/Poll';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CardSkeletonUI from '../components/SkeletonUI/CardSkeletonUI'

export default function MovieCard({poster, name, date, popularity, votes, votesAvg}) {

    const [isPosterLoaded, setIsPosterLoaded] = useState(false);
    const [isPosterLoading, setIsPosterLoading] = useState(false);

    const handleLoaded = () => setIsPosterLoaded(true);
    const handleLoading = () => setIsPosterLoading(true);

    return (
        <article className='relative h-[300px] w-[200px] rounded-md z-10'>
            {!isPosterLoaded && isPosterLoading &&(<CardSkeletonUI /> )}
            <LazyLoadImage 
                key={poster}
                src={`https://image.tmdb.org/t/p/original${poster}`}
                className='rounded-md h-[100%] w-[100%] object-cover'
                onLoad={handleLoaded}
                beforeLoad={handleLoading}
            />
            
            {/* <div className='absolute inset-x-0 bottom-0 flex flex-col gap-[.5rem]'>
                <h3>{name}</h3>
                <p>{date}</p>
                <p title='Popularity'>
                    <AutoGraphIcon />{" "}
                    <span>{popularity}</span>
                </p>
                <div className='flex gap-3'>
                    <p title='Votes'>
                        <PollIcon />{" "}
                        <span>{votes}</span>
                    </p>
                    <p title='Avg. Votes'>
                        <ThumbsUpDownIcon />{" "}
                        <span>{votesAvg}</span>
                    </p>
                </div>
            </div> */}
        </article>
    )
}
