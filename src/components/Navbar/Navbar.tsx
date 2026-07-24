import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <img src={logo} alt="REEMZAR" />
        </a>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#specifications">Specifications</a>
          <a href="#gallery">Gallery</a>
        </nav>

        <a
          href="https://www.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="buy-btn"
        >
          Buy Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;