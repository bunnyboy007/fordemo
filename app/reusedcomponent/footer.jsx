"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  Send,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Us */}
        <div className="footer-column footer-about">
          <h2>About Us</h2>

          <p>Office 32,33, Swami Vivekanand Rd, Momin Nagar, <br/> Jogeshwari West, Mumbai, Maharashtra 400102</p>
          

          <div className="contact-info">
            <div>
              <Mail size={20} />
              <span>info@eljeninternational.in</span>
            </div>

            <div>
              <Phone size={20} />
              <span> 098929 15315</span>
            </div>
          </div>

          <div className="social-icons">
            <Link href="#">
               <FaFacebookF size={20} />
            </Link>

            <Link href="#">
              <FaTwitter size={20} />
            </Link>

            <Link href="#">
    <FaInstagram size={21} />

            </Link>

            <Link href="#">
             <FaYoutube size={23} />
            </Link>

            <Link href="#">
              <FaWhatsapp size={22} />
            </Link>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="footer-column footer-contact">
          <h2>Get in Touch With Us</h2>

          <p>
            Our expertise, as well as our passion for web
            <br />
            design, sets us apart from other agencies.
          </p>

          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />

            <button type="submit" aria-label="Submit email">
              <Send size={25} />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="footer-column footer-links">
          <h2>Quick Link</h2>

          <div className="links-grid">
            <div>
              <Link href="/">
                <ChevronRight size={18} />
                HOME
              </Link>

              <Link href="/products">
                <ChevronRight size={18} />
                PRODUCTS
              </Link>

              <Link href="/about">
                <ChevronRight size={18} />
                ABOUT ME
              </Link>
            </div>

            <div>
              <Link href="/portfolio">
                <ChevronRight size={18} />
                GALLERY
              </Link>

              <Link href="/contact">
                <ChevronRight size={18} />
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2018 by eljeninternational</p>

        <p>
          Office Hours : Monday - Saturday, 09:00am - 07:00pm
        </p>
      </div>
    </footer>
  );
}