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
            <Link href="/">Company</Link>
            <Link href="/Services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
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