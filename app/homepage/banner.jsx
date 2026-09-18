
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const bannerData = [
  {
    image: "/images/banner.jpg",
    title: "More than design. We build functional spaces",
    description:
      "Interior design is not just decoration. It is structured planning and professional execution.",
    buttonText: "More Detail",
    buttonLink: "#details",
  },
  {
    image: "/images/banner1.jpg",
    title: "Beautiful spaces. Designed for living.",
    description:
      "We create modern and functional interiors according to your requirements.",
    buttonText: "More Detail",
    buttonLink: "#details",
  },
];

export default function HomeBanner() {
  return (
    <section className="hero-section">
      <div className="banner-wrapper">

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          navigation={{
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
          }}
          className="home-banner-swiper"
        >
          {bannerData.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="banner-slide">

                {/* Image */}
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="banner-image"
                />

                {/* Overlay */}
                <div className="banner-overlay"></div>

                {/* Content */}
                <div className="banner-content">
                  <h1>{banner.title}</h1>

                  <p>{banner.description}</p>

                  <a
                    href={banner.buttonLink}
                    className="detail-btn"
                  >
                    {banner.buttonText}
                  </a>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous Arrow */}
        <button
          type="button"
          className="banner-arrow banner-prev"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>

        {/* Next Arrow */}
        <button
          type="button"
          className="banner-arrow banner-next"
          aria-label="Next slide"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>

      </div>
    </section>
  );
}
