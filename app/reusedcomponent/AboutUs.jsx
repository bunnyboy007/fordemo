"use client";

import Image from "next/image";
import { LampDesk, Scale, Layers, Sofa } from "lucide-react";


const features = [
  {
    icon: LampDesk,
    title: "Better Space",
    subtitle: "Utilization",
  },
  {
    icon: Scale,
    title: "More Comfort",
    subtitle: "",
  },
  {
    icon: Layers,
    title: "Increased Property",
    subtitle: "Value",
  },
  {
    icon: Sofa,
    title: "Positive Vibe",
    subtitle: "",
  },
];

export default function AboutUs() {
  return (
    <section className="about-section">
   <div className="container">
       <div className="about-container">

        {/* Left Image */}
        <div className="about-image-wrapper">
          <Image
            src="/images/about-us1.jpg"
            alt="Transform your space fortunate interio"
            fill
            priority
            className="about-image"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">

          <h1>
            Transform your space fortunate interio
          </h1>

          <p className="about-description">
            your home isn't just a place it's a reflection of your style,
            your comfort, and your story. At Fortunate Interio, we bring
            your vision to life with design that blend elegance,
            functionality, and creative.
          </p>

          <h2>Why Interiors Matters?</h2>

          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div className="feature-card" key={index}>

                  <Icon
                    className="feature-icon"
                    strokeWidth={1.8}
                  />

                  <div className="feature-title">
                    {feature.title}
                  </div>

                  {feature.subtitle && (
                    <div className="feature-subtitle">
                      {feature.subtitle}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </div>
   </div>
    </section>
  );
}