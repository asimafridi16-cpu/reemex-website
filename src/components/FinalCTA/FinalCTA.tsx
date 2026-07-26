import "./FinalCTA.css";
import { AMAZON_URL } from "../../constants/links";
import { useReveal } from "../../hooks/useReveal";

export default function FinalCTA() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      className={`cta section reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="cta__card">
          <div className="cta__glow" aria-hidden="true" />
          <div className="cta__content">
            <span className="section-eyebrow cta__eyebrow">Ready to train?</span>
            <h2 className="cta__title">
              Elevate your game — without the noise.
            </h2>
            <p className="cta__text">
              Join thousands of players who train smarter with REEMZAR.
              Premium foam. Official Size 7. Delivered to your door.
            </p>
            <div className="cta__actions">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--white btn--large"
              >
                Buy on Amazon
              </a>
              <a href="#features" className="btn btn--secondary btn--large cta__secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
