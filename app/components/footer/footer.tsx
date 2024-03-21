import React from 'react'
import Link from 'next/link'

import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footerWrapper}>
        <div className={styles.footer}>
        <div className={styles.footerColumn}>
            <h2>Balaji Hi-Tech Garments</h2>
            <p>Garments manufacturing company in Ichalkaranji, India</p>
        </div>
        <div className={styles.footerColumn}>
            <ul className={styles.list}>
                <li><Link href="/" className={styles.listitem} >Home</Link></li>
                <li><Link href="/about" className={styles.listitem}>About</Link></li>
                <li><Link href="/services" className={styles.listitem}>Services</Link></li>
                <li><Link href="/blog" className={styles.listitem}>Blog</Link></li>
            </ul>
        </div>
        <div className={styles.footerColumn}>
            <ul className={styles.list}>
                <li><Link href="/privacy" className={styles.listitem} >Privacy Policy</Link></li>
                <li><Link href="/tos" className={styles.listitem}>Terms of Service</Link></li>
                <li><Link href="/contact" className={styles.listitem}>Contact</Link></li>
            </ul>
        </div>
        <div className={styles.footerColumn}>
            <h3>Contact</h3>
            <p>Phone: +91 1234567890</p>
            <p>Email: balajihitech@gmail.com</p>
            <p>Address: 123, Ichalkaranji, India</p>
        </div>
        </div>
        
        <div className={styles.footerBottom}>
            <p>© 2021 Balaji Hi-Tech Garments. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer