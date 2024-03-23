import Image from "next/image";
import style from "./page.module.css";

import Hero from "./components/hero/hero";
import Services from "./components/services/service";
import About from "./components/about/aboutSec";
import Blog from "./components/blog/blogSec";
import FAQ from "./components/faq/faqSec";
import Reviews from "./components/reviews/review";


export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.gap}>
        <Hero />
        <Services />
        <About />
      </div>
      <Blog />
      <div className={style.gap}>
        <FAQ />
        {/* <Reviews /> */}
      </div>
    </div>
  );
}
