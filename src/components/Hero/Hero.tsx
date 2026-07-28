import "./Hero.css";
import heroBall from "../../assets/images/specifications.png";
import { AMAZON_URL } from "../../constants/links";
import { PRODUCT } from "../../constants/product";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />

      <div className="hero__inner container container--wide">
        <div className="hero__content">
          <span className="section-eyebrow">REEMZAR® Silent Basketball</span>

          <h1 id="hero-title" className="hero__title">
            Train in silence.
            <br />
            <span className="hero__title-accent">Play with precision.</span>
          </h1>

          <p className="hero__description">
            The {PRODUCT.name} delivers realistic dribbling feel with premium{" "}
            {PRODUCT.material.toLowerCase()} — engineered for quiet indoor
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
              alt={`${PRODUCT.name} — premium blue foam indoor training ball`}
              className="hero__product"
              width={560}
              height={560}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
