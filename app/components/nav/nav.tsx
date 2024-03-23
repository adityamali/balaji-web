import React from 'react'
import style from './nav.module.css'
import Link from 'next/link'

function nav() {
  return (
    <div className={style.header}>
        <div className={style.brand}>
            <Link href="/">Balaji Hi-Tech</Link>
        </div>
        <div className={style.navitems}>
            <Link href="/" className={style.navLink}>Company</Link>
            <Link href="/services" className={style.navLink}>Services</Link>
            <Link href="/about" className={style.navLink}>About</Link>
            <Link href="/blog" className={style.navLink}>Blog</Link>
        </div>
        <div className={style.cta}>
            <Link  href='/contacts'>
            <button className={style.btnSecondary}>
                Contact Us
            </button>   
            </Link>
            
        </div>
    </div>
  )
}

export default nav