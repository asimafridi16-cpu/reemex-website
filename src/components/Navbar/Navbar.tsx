import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { AMAZON_URL, NAV_LINKS } from "../../constants/links";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar${scrolled ? " navbar--scrolled" : ""}${menuOpen ? " navbar--open" : ""}`}
    >
      <div className="navbar__inner container container--wide">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="REEMZAR" />
        </a>

        <nav className="navbar__nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary navbar__cta"
        >
          Buy Now
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="navbar__mobile" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            onClick={closeMenu}
          >
            Buy Now
          </a>
        </nav>
      </div>
    </header>
  );
}
