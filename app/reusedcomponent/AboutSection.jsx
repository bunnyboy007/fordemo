"use client";

import Image from "next/image";
import { Phone, Star } from "lucide-react";


export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-containerbox">

        {/* LEFT CONTENT */}
        <div className="about-left">

          <h2 className="about-title">
            Whether you're redesigning a single room or
            creating your dream home from scratch,
            we're here to make every corner beautiful and
            meaningful.
          </h2>

          <div className="main-image-wrapper">
            <Image
              src="/images/aboutsection2.jpg"
              alt="Modern living room"
              fill
              priority
              className="main-image"
            />

            {/* EXPERIENCE CIRCLE */}
            <div className="experience-badge">
              <strong>15 Year</strong>
              <span>Experience</span>
            </div>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">

          {/* SMALL IMAGE */}
          <div className="small-image-wrapper">
            <Image
              src="/images/aboutsection1.jpg"
              alt="Modern interior design"
              fill
              className="small-image"
            />
          </div>

          {/* DESCRIPTION */}
          <p className="about-description">
            Through a unique combination of engineering,
            construction and design disciplines and expertise.
          </p>

          {/* BUTTON + PHONE */}
          <div className="about-actions">

            <button type="button" className="quote-btn">
              REQUEST A QUOTE
            </button>

            <div className="phone-info">
              <Phone size={28} />

              <div>
                <strong>(+91) 8654512354</strong>
                <span>Mumbai Office</span>
              </div>
            </div>

          </div>

          {/* REVIEWS */}
          <div className="review-section">

            <div className="review-avatars">

              <Image
                src="/images/social1.png"
                alt="Customer review"
                width={45}
                height={45}
              />

              <Image
                src="/images/social2.png"
                alt="Customer review"
                width={45}
                height={45}
              />

              <Image
                src="/images/social3.png"
                alt="Customer review"
                width={45}
                height={45}
              />

            </div>

            <div className="review-rating">

              <strong>4.8</strong>

              <div className="stars">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={14}
                    fill="currentColor"
                  />
                ))}
              </div>

              <span>Based on 204 Reviews</span>

            </div>

          </div>

        </div>

      </div>
      </div>
    </section>
  );
}