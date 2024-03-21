import React from 'react'
import Image from 'next/image'
import style from './aboutSec.module.css'

import aboutImg from '../../../public/images/about.jpeg'

function aboutSec() {
  return (
    <div className={style.container}>
        <Image src={aboutImg} alt='' className={style.aboutImg} />
        <div className={style.about}>
            <h2>- About Us</h2>
            <h3>Some Catchy Line about Balaji Hi-Tech</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className="primaryBtn">Read More</button>
        </div>
    </div>
  )
}

export default aboutSec