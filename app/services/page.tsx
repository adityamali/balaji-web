import React from 'react'
import style from './services.module.css'

function Services() {
  return (
    <div className={style.serviceWrapper}>
        <div className={style.serviceHeader}>
            <h1>Our Services</h1>
        </div>
        <div className={style.serviceContent}>
            <div className={style.serviceCard}>
                <h2>Service 1</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis consequuntur officia delectus optio possimus earum perferendis odit modi iure pariatur, tenetur dolores voluptatibus itaque nam?</p>
            </div>
            <div className={style.serviceCard}>
                <h2>Service 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione atque eaque perspiciatis corrupti consequatur. Quod laudantium earum animi rem vero ullam excepturi fuga saepe!</p>
            </div>
            <div className={style.serviceCard}>
                <h2>Service 3</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, porro officiis sint reiciendis illum similique ipsa rem sapiente neque quaerat quae quasi deserunt dicta tenetur.</p>
            </div>
            <div className={style.serviceCard}>
                <h2>Service 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illo vero perspiciatis repellat sapiente qui excepturi, ad saepe. Doloribus sunt, architecto laboriosam blanditiis commodi sit.</p>
            </div>
            <div className={style.serviceCard}>
                <h2>Service 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illo vero perspiciatis repellat sapiente qui excepturi, ad saepe. Doloribus sunt, architecto laboriosam blanditiis commodi sit.</p>
            </div>
            <div className={style.serviceCard}>
                <h2>Service 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illo vero perspiciatis repellat sapiente qui excepturi, ad saepe. Doloribus sunt, architecto laboriosam blanditiis commodi sit.</p>
            </div>
        </div>
    </div>
  )
}

export default Services