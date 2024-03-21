import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import style from "./contact.module.css";

function Contact() {
  return (
    <div className={style.pageWrapper}>
        <div className={style.contactHero}>
            <div className={style.heroContent}>
                <h1>Contact Us</h1>
                <p>Get in touch with us to learn more about our services and how we can help you.</p>
                <div id={style.phone} className={style.contactInfo}>
                    <Link href="tel:123-456-7890">
                        123-456-7890
                    </Link>
                </div>
                <div id={style.phone} className={style.contactInfo}>
                    <Link href="mailto:adityamali2003@icloud.com">
                    adityamali2003@icloud.com
                    </Link>
                </div>
                <div id={style.phone} className={style.contactInfo}>
                    <Link href="https://www.google.com/maps">
                    1234 Street Name, City, ST 12345
                    </Link>
                </div>
            </div>
            <div className={style.formWrapper}>
                <form>
                    <div className={style.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder='John Appleseed' />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder='johnappleseed@gmail.com' />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5}></textarea>
                    </div>
                    <button type="submit" id={style.submit}>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;