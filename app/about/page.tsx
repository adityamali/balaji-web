import React from 'react'
import Image from 'next/image'
import style from './aboutPage.module.css'

import Img1 from "../../public/images/hero1.jpg";

function About() {
  return (
    <div className={style.pageWrapper}>
      <div className={style.aboutHeader}>
        <h2>About Us</h2>
      </div>
      <div className={style.aboutContent}>
        <div className={style.vision}>
          <h3>Our <span className={style.brand} >Vision</span></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, incidunt tempora animi suscipit velit officia sequi voluptates maiores aspernatur optio voluptas illum culpa praesentium, eum neque amet consequuntur repellendus corrupti sint, rem expedita laborum. Velit.</p>
        </div>
        <div className={style.mission}><h3>Our <span className={style.brand} >Mission</span></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora iste magnam magni velit numquam vitae vero exercitationem, odit ipsa quam facere. Cupiditate, modi?</p>
        </div>
        <div className={style.img1}>
          <Image src={Img1} alt='' />
        </div>
        <div className={style.txt1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae rem voluptatum distinctio facere, magni laudantium deserunt explicabo dolores qui architecto expedita quaerat perspiciatis sit blanditiis., ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate possimus facilis, magni nobis, dolore unde ipsa ex vero quaerat quisquam voluptatem quos sequi quidem. Voluptatibus odit molestias laborum laudantium tenetur accusantium vel distinctio alias.</div>
        <div className={style.txt2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae rem voluptatum distinctio facere, magni laudantium deserunt explicabo dolores qui architecto expedita quaerat perspiciatis sit blanditiis., ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate possimus facilis, magni nobis, dolore unde ipsa ex vero quaerat quisquam voluptatem quos sequi quidem. Voluptatibus odit molestias laborum laudantium tenetur accusantium vel distinctio alias.</div>
        <div className={style.img2}>
          <div className={style.img1}>
            <Image src={Img1} alt='' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About