"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry Form Data:", formData);

    // Add your API call here
  };

  return (
    <section className="enquiry-section">
      <div className="enquiry-container">

        <div className="enquiry-heading">
          <h2>We would love to hear from you.</h2>

          <p>
            Your email address will not be published. Required fields are
            marked *
          </p>
        </div>

        <form onSubmit={handleSubmit} className="enquiry-form">

          <div className="enquiry-row">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
          />

          <button type="submit" className="enquiry-submit">
            SUBMIT
            <span>→</span>
          </button>

        </form>
      </div>
    </section>
  );
}