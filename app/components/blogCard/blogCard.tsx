import React from 'react'
import Image from 'next/image'
import style from './blogCard.module.css'

import image from '../../../public/images/stitch.jpg'

function blogCard() {
  return (
    <div className={style.card}>
        <div className={style.cardImage}>
            <Image src={image} width={0} height={0} alt="blog" className={style.blogImg}/>
        </div>
        <div className={style.cardContent}>
            <p>12 January 2025</p>
            <h1>Blog Title</h1>
            <a href="">Learn More</a>
        </div>
    </div>
  )
}

export default blogCard