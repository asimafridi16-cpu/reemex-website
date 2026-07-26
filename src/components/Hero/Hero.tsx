import "./Hero.css";
import heroBall from "../../assets/images/specifications.png";
import { AMAZON_URL } from "../../constants/links";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner container container--wide">
        <div className="hero__content">
          <span className="section-eyebrow">Silent Basketball</span>

          <h1 className="hero__title">
            Train in silence.
            <br />
            <span className="hero__title-accent">Play with precision.</span>
          </h1>

          <p className="hero__description">
            The REEMZAR Silent Basketball delivers realistic dribbling feel
            with premium high-density foam — engineered for quiet indoor
            practice without compromising control.
          </p>

          <div className="hero__actions">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
            >
              Shop on Amazon
            </a>
            <a href="#features" className="btn btn--secondary btn--large">
              Explore Features
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__product-stage">
            <img
              src={heroBall}
              alt="REEMZAR Silent Basketball — premium foam indoor training ball"
              className="hero__product"
              width={560}
              height={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
