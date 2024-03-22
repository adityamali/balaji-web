import React from 'react'
import Image from 'next/image'
import style from './blogSec.module.css'

import BlogCard from '../blogCard/blogCard'

function blogSec() {
  return (
    <div className={style.container}>
        <div className={style.title}>
            <h2>Our Latest <span className={style.brand}>Blogs</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, assumenda?</p>
        </div>
        <div className={style.cardsContainer}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>

    </div>
  )
}

export default blogSec