"use client";

import Image from "next/image";


const products = [
  {
    image: "/images/iproduct1.jpg",
    title: "Customized Interior Solutions",
    description:
      "As the first company in Switzerland, we offer lower leg orthoses, thigh orthoses and ankle orthoses using 3D printing.",
  },
  {
    image: "/images/iproduct2.jpg",
    title: "Modern & Timeless Designs",
    description:
      "As the first company in Switzerland, we offer lower leg orthoses, thigh orthoses and ankle orthoses using 3D printing.",
  },
  {
    image: "/images/iproduct3.jpg",
    title: "Quality Craftsmanship",
    description:
      "As the first company in Switzerland, we offer lower leg orthoses, thigh orthoses and ankle orthoses using 3D printing.",
  },
  {
    image: "/images/iproduct4.jpg",
    title: "Smart Space Planning",
    description:
      "A lower leg orthosis can help compensate for physical deficits, support the joint and protect against relapses and malalignment.",
  },
];

export default function ProductSection() {
  return (
    <section className="product-section">
      <div className="container">

        <h2 className="product-heading">Our Collection</h2>

        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              <div className="product-content">
                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <a href="#" className="product-btn">
                  READ MORE
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}