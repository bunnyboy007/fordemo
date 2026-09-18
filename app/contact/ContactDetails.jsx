"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  CalendarDays,
  House,
} from "lucide-react";



export default function ContactDetails() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left Content */}
        <div className="contact-intro">
          <span className="contact-subtitle">OUR CONTACTS</span>

          <h2>
            Get in touch
            <br />
            with us
          </h2>

          <p>
         Have questions about employee wellbeing? We’re here to help. Call us, email us, or fill out our contact form, and we’ll be in touch shortly.
          </p>
        </div>

        {/* Right Contact Details */}
        <div className="contact-details">

          {/* First Column */}
          <div className="contact-column">

            <div className="contact-item">
              <div className="contact-icon">
                <House size={18} />
              </div>

              <div>
                <h4>Headquarter</h4>
                <p>
               Office 32,33, Swami Vivekanand Rd, Momin Nagar, <br/>
Jogeshwari West, Mumbai, Maharashtra 400102


                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={18} />
              </div>

              <div>
                <h4>Phone Number</h4>
                <p>
                 098929 15315
                </p>
              </div>
            </div>

            <div className="contact-item last-item">
              <div className="contact-icon">
                <Mail size={18} />
              </div>

              <div>
                <h4>Email us</h4>
                <p>shabbir15887@gmail.com</p>
              </div>
            </div>

          </div>

          {/* Second Column */}
          <div className="contact-column">

          
            <div className="contact-item">
              <div className="contact-icon">
                <Clock3 size={18} />
              </div>

              <div>
                <h4>Monday – Friday</h4>
                <p>
                  Monday-Friday: 8am-5pm
                  <br />
                  Saturday: 9am-Midday
                </p>
              </div>
            </div>

            <div className="contact-item last-item">
              <div className="contact-icon">
                <CalendarDays size={18} />
              </div>

              <div>
                <h4>Saturday</h4>
                <p>by appointment</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}