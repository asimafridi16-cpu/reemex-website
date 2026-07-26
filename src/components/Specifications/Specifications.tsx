import "./Specifications.css";
import specsImage from "../../assets/images/specifications.png";
import { useReveal } from "../../hooks/useReveal";

const specs = [
  { label: "Size", value: "Official Size 7" },
  { label: "Diameter", value: "24 cm" },
  { label: "Weight", value: "320 g" },
  { label: "Material", value: "High-Density Foam" },
  { label: "Surface", value: "Textured Comfort Grip" },
  { label: "Recommended Use", value: "Indoor Practice" },
];

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
              alt="REEMZAR Silent Basketball specifications detail"
            />
          </div>
        </div>

        <div className="specs__content">
          <span className="section-eyebrow">Specifications</span>
          <h2 className="section-title">Precision in every detail</h2>
          <p className="section-subtitle">
            Official Size 7 dimensions with premium foam construction —
            engineered for serious indoor training.
          </p>

          <dl className="specs__list">
            {specs.map((spec) => (
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
