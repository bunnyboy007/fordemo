"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-container">

        {/* Logo */}
        <div className="header-logo">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="Fortunate Interio"
              width={105}
              height={82}
              priority
            />
          </Link>
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
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "active" : ""}
            onClick={closeMenu}
          >
            About Us
          </Link>

          <Link
            href="/product"
            className={pathname === "/product" ? "active" : ""}
            onClick={closeMenu}
          >
            Product
          </Link>

          <Link
            href="/portfolio"
            className={pathname === "/portfolio" ? "active" : ""}
            onClick={closeMenu}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
            onClick={closeMenu}
          >
            Contact Us
          </Link>

        </nav>

      </div>
    </header>
  );
}