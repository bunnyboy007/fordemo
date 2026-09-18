"use client";

import Image from "next/image";
import { useState } from "react";

const portfolios = [
  { id: 1, image: "/images/portfolio/1.jpg" },
  { id: 2, image: "/images/portfolio/2.jpg" },
  { id: 3, image: "/images/portfolio/3.jpg" },
  { id: 4, image: "/images/portfolio/4.jpg" },
  { id: 5, image: "/images/portfolio/5.jpg" },
  { id: 6, image: "/images/portfolio/6.jpg" },
  { id: 7, image: "/images/portfolio/7.jpg" },
  { id: 8, image: "/images/portfolio/8.jpg" },
  { id: 9, image: "/images/portfolio/9.jpg" },
  { id: 10, image: "/images/portfolio/10.jpg" },
  { id: 11, image: "/images/portfolio/11.jpg" },
  { id: 12, image: "/images/portfolio/12.jpg" },
];

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closePopup = () => {
    setSelectedIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) =>
      prev === portfolios.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) =>
      prev === 0 ? portfolios.length - 1 : prev - 1
    );
  };

  return (
    <section className="portfolio-section">
      <div className="container">

        <h2 className="portfolio-titlemain">
          Explore Portfolios
        </h2>

        <div className="portfolio-grid">
          {portfolios.map((portfolio, index) => (
            <div
              className="portfolio-item"
              key={portfolio.id}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="portfolio-image">
                <Image
                  src={portfolio.image}
                  alt={`Portfolio ${portfolio.id}`}
                  width={800}
                  height={550}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Popup */}
      {selectedIndex !== null && (
        <div
          className="portfolio-popup"
          onClick={closePopup}
        >

          {/* Close */}
          <button
            className="portfolio-popup-close"
            onClick={closePopup}
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            className="portfolio-popup-prev"
            onClick={prevImage}
          >
            &#10094;
          </button>

          {/* Image */}
          <div
            className="portfolio-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={portfolios[selectedIndex].image}
              alt={`Portfolio ${portfolios[selectedIndex].id}`}
              width={1400}
              height={1000}
              className="portfolio-popup-image"
            />
          </div>

          {/* Next Button */}
          <button
            className="portfolio-popup-next"
            onClick={nextImage}
          >
            &#10095;
          </button>

        </div>
      )}
    </section>
  );
}