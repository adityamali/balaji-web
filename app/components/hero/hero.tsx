import React from 'react'
import Image from "next/image";
import style from "./hero.module.css";

import playButton from "../../../public/icons/play.png";
import Img1 from "../../../public/images/hero1.jpg";
import Img3 from "../../../public/images/heroSec.jpg";
import Img2 from "../../../public/icons/des.svg";


function hero() {
  return (
    <div className={style.container}>
      <div className={style.heroTitle}>
        <h1>Garments that <span className={style.surpass}>surpass</span>  your expectations</h1>
      </div>
      <div className={style.heroDesc}>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laborum nihil consequatur incidunt, tempora vero architecto, quo fugiat quod earum quasi numquam recusandae, illo consectetur!
        </p>
        <div className="actions">
          <button className={style.primaryBtn}>Shop Now</button>
          <button className={style.secondaryBtn}><Image id={style.play} src={playButton} alt="Play Button" />Learn More</button>
        </div>
      </div>
      <div className={style.heroImg1}>
        <Image src={Img1} alt="Hero Image 1" className={style.heroImage} />
      </div>
      <div className={style.heroImg2}>
        <Image src={Img2} alt="Hero Image 2" className={style.heroImage} id={style.design1} />
      </div>
      <div className={style.heroImg3}>
        {/* <Image src={Img2} alt="Hero Image 2" className={style.heroImage} /> */}
        <p id={style.img3Place1}>75+</p>
        <p id={style.img3Place2}>Clients</p>
      </div>
      <div className={style.heroImg4}>
        <Image src={Img3} alt="Hero Image 4" className={style.heroImage} />
      </div>
    </div>
  )
}

export default hero