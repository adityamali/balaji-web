import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';


import style from './review.module.css'


function review() {

  return (
    <div className={style.pageWraper}>
        <h2>Words from our <span className={style.brand}>Clients</span></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate illum cum maiores sint neque voluptates?</p>
    </div>
  )
}

export default review