import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import { AMAZON_URL, NAV_LINKS } from "../../constants/links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <img src={logo} alt="REEMZAR" />
          </a>
          <p className="footer__tagline">
            Premium silent basketball for indoor training. Train anytime,
            anywhere — without the noise.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h3>Navigate</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#lifestyle">Lifestyle</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
          </ul>
        </nav>

        <div className="footer__contact">
          <h3>Shop</h3>
          <ul>
            <li>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Amazon
              </a>
            </li>
          </ul>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:support@reemex.co.uk">support@reemex.co.uk</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} REEMZAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
