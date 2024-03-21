import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './service.module.css'

function service() {
  return (
    <div className={style.container}>
        <div className={style.head}>
            <div className={style.left}>
            <div className={style.point}>
                <p>-</p>
            </div>
            <div className={style.title}>
                <h1>Our <span className={style.brand}>Services</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>
            </div>
            <div className={style.right}>
                <Link href="/services">Know More -></Link>
            </div>
        </div>
        <div className={style.services}>
            <div className={style.service}>
                <h2>Service 1</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laborum nihil consequatur incidunt, tempora vero architecto, quo fugiat quod earum quasi numquam recusandae, illo consectetur!
                </p>
            </div>
            <div className={style.service}>
                <h2>Service 2</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laborum nihil consequatur incidunt, tempora vero architecto, quo fugiat quod earum quasi numquam recusandae, illo consectetur!
                </p>
            </div>
            <div className={style.service}>
                <h2>Service 3</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laborum nihil consequatur incidunt, tempora vero architecto, quo fugiat quod earum quasi numquam recusandae, illo consectetur!
                </p>
            </div>
        </div>
    </div>
  )
}

export default service