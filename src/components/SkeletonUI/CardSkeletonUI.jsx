import React from 'react'
import './SkeletonUI.css';
const SkeletonUI = () => {
    return (
        <article className='skeleton__Card'>
            <div className='skeleton__Text'>
                <h3 className='skeleton__Heading'></h3>
                <p className='skeleton__Paragraph'></p>
                <p className='skeleton__Paragraph'></p>
                <p className='skeleton__Paragraph'></p>
            </div>
        </article>
    )
}

export default SkeletonUI