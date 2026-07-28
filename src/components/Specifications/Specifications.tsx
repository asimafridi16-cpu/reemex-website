import "./Specifications.css";
import specsImage from "../../assets/images/product.png";
import { useReveal } from "../../hooks/useReveal";
import { SPECS } from "../../constants/product";

export default function Specifications() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="specifications"
      className={`specs section section--muted reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container specs__inner">
        <div className="specs__visual">
          <div className="specs__image-wrap">
            <img
              src={specsImage}
              alt="REEMZAR Silent Basketball technical specifications"
            />
          </div>
        </div>

        <div className="specs__content">
          <span className="section-eyebrow">Specifications</span>
          <h2 className="section-title">Precision in every detail</h2>
          <p className="section-subtitle">
            Official Size 7 dimensions with premium PU foam construction —
            engineered for serious indoor training.
          </p>

          <dl className="specs__list">
            {SPECS.map((spec) => (
              <div key={spec.label} className="specs__item">
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
