import React from 'react'

export default function Banner({backdropImage}) {
    return (
        <div className='relative h-[100vh] w-[100vw]'>
            <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#120E43] z-20'/>
            {backdropImage
                ?(
                    <div className='h-[100%] w-[100%]'>
                        <img className="h-[100%] w-[100%] object-cover contrast-125 -z-20" src={`https://image.tmdb.org/t/p/original${backdropImage}`} alt="Banner Image" />
                    </div>
                )
                :(<img className="h-[100%] w-[100%] object-cover contrast-125 -z-20" src={`https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg`} alt="Banner Image" />)
            }
        </div>
    )
}
