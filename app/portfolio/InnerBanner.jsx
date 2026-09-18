"use client";

import Image from "next/image";


export default function InnerBanner() {
  return (
    <section className="inner-bannerwrapper">
        <div class="hero-bg"></div>
        
        <div className="inner-banner">
               <div className="banner-overlay"></div>
 <Image
        src="/images/interior-banner.jpg"
        alt="Modern Kitchen"
        fill
        priority
        className="inner-banner-image"
      />

      <div className="inner-banner-content">
     
        <h1>Portfolio</h1>
        <p>Interior design is not just decoration. It is structured planning and professional execution.</p>
      </div>
        </div>
     
    </section>
  );
}