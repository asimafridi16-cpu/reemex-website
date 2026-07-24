import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="badge">NEW ARRIVAL</span>

          <h1>
            Train Hard.
            <br />
            Play Quiet.
          </h1>

          <p>
            Experience quieter basketball practice with the REEMZAR Silent
            Basketball. Perfect for indoor training and everyday skill
            development.
          </p>

          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            Buy on Amazon
          </a>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="REEMZAR Silent Basketball" />
        </div>
      </div>
    </section>
  );
};

export default Hero;