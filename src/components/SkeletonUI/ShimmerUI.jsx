import React,{useState} from 'react'
import './CardSkeletonUI.css';

export default function ShimmerUI({count}) {
    const [count] = useState(count);
    return(
        {Array(count).fill().map((_, i) => {
            return(
                <article key={i} className='skeleton__Card z-30'>
                            <div className='skeleton__Text'>
                                <h3 className='skeleton__Heading'></h3>
                                <p className='skeleton__Paragraph'></p>
                                <p className='skeleton__Paragraph'></p>
                                <p className='skeleton__Paragraph'></p>
                            </div>
                        </article>
            )
        })}
    )
}
