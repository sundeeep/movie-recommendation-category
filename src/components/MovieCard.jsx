import React, { useState, useEffect } from "react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PollIcon from "@mui/icons-material/Poll";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CardSkeletonUI from "./SkeletonUI/CardSkeletonUI";

export default function MovieCard({
  poster,
  name,
  date,
  popularity,
  votes,
  votesAvg,
}) {

  return (
    <article className="relative h-[250px] w-[170px] rounded-md z-30">
      
      <div className="rounded-md h-[100%] w-[100%] object-cover">
        <div className="absolute inset-0 blur">
          <CardSkeletonUI />
        </div>
        <img key={poster} 
          src={`https://image.tmdb.org/t/p/original${poster}`}
          className="absolute z-40 hover:scale-105 hover:border hover:border-4 hover:border-red-500/50 transition-all ease-in-out duration-300 cursor-pointer rounded-md h-[100%] w-[100%] object-cover"
          alt="" />
      </div>

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
  );
}
