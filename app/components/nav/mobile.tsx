'use client'

import React from 'react'
import style from './nav.module.css'
import Link from 'next/link'
import { useState } from 'react'

function mobile() {
    const [isOpen, setIsOpen] = useState(false);
    const handleDrawer = () => {
        setIsOpen(!isOpen);
      };

    var cssToggle = isOpen ? style.toggleOpen : style.toggleClose;
        return (
            <div className={style.mobile} >
                    <div onClick={handleDrawer} className={style.hamburger}>
                        <div className={style.line}></div>
                        <div className={style.line}></div>
                        <div className={style.line}></div>
                    </div>
                <div className={cssToggle} >
                    <div className={style.mobileNav}>
                        <div className={style.close} >
                            <div onClick={handleDrawer} className={style.closeBtn}>
                                <div className={style.line}></div>
                                <div className={style.line}></div>
                            </div>
                        </div>
                        <div className={style.mobileNavItems}>
                            <Link href="/" className={style.navLink} onClick={handleDrawer}>Company</Link>
                            <Link href="/services" className={style.navLink} onClick={handleDrawer}>Services</Link>
                            <Link href="/about" className={style.navLink} onClick={handleDrawer}>About</Link>
                            <Link href="/blog" className={style.navLink} onClick={handleDrawer}>Blog</Link>
                        </div>
                        <div className={style.mobileCta}>
                            <Link href='/contacts'>
                                <button className={style.btnSecondary} onClick={handleDrawer}>
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
}

export default mobile;