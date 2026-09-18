"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
const pathname = usePathname();

  return (
    <header className="main-header">
      <div className="header-container">

        {/* Logo */}
        <div className="header-logo">
            <Link
        href="/"
       
      >
  <Image
            src="/images/logo.png"
            alt="Fortunate Interio"
            width={105}
            height={82}
            priority
          />      </Link>
        
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
      <nav className={`header-nav ${menuOpen ? "menu-open" : ""}`}>

      <Link
        href="/"
        className={pathname === "/" ? "active" : ""}
      >
        Home
      </Link>

      <Link
        href="/about-us"
        className={pathname === "/about-us" ? "active" : ""}
      >
        About Us
      </Link>

      <Link
        href="/product"
        className={pathname === "/product" ? "active" : ""}
      >
        Product
      </Link>

      <Link
        href="/portfolio"
        className={pathname === "/portfolio" ? "active" : ""}
      >
        Portfolio
      </Link>

      <Link
        href="/contact"
        className={pathname === "/contact" ? "active" : ""}
      >
        Contact Us
      </Link>

    </nav>

      </div>
    </header>
  );
}