'use client'
import React from 'react'
import style from './faqSec.module.css'
import { useState } from 'react'
import Image from 'next/image'

import Plus from '../../../public/icons/plus.png'
import Minus from '../../../public/icons/minus.png'

function FaqSec() {
    const [faqs, setFaqs] = useState([
        {
          question: "How many programmers does it take to screw a lightbulb?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
          open: true
        },
        {
          question: "Who is the most awesome person?",
          answer: "You! The viewer!",
          open: false
        },
        {
          question:
            "How many questions does it take to makes a succesful FAQ Page?",
          answer: "This many!",
          open: false
        }
      ]);
  return (
    <div className={style.container} id='faq'>
        <h2>Frequently Asked Questions</h2>
        <div className={style.faqs}>
            {faqs.map((faq, index) => (
            <div className={style.faq} key={index}>
                <div
                className={style.question}
                onClick={() => {
                    const newFaqs = faqs.map((faq, i) => {
                    if (index === i) {
                        faq.open = !faq.open;
                    } else {
                        faq.open = false;
                    }
                    return faq;
                    });
                    setFaqs(newFaqs);
                }}
                >
                {faq.question}
                <span>{faq.open ? <Image src={Minus} alt="" className={style.accordianBtn}/> : <Image src={Plus} alt="" className={style.accordianBtn}/>}</span>
                </div>
                <div className={style.answer}>
                {faq.open && <p>{faq.answer}</p>}
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default FaqSec