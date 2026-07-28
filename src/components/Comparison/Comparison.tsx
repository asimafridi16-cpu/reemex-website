import "./Comparison.css";
import Icon from "../icons/Icon";
import { useReveal } from "../../hooks/useReveal";
import { PRODUCT } from "../../constants/product";

const rows = [
  {
    feature: "Indoor noise level",
    reemzar: "Ultra-quiet foam construction",
    standard: "Loud on hard floors",
  },
  {
    feature: "Floor protection",
    reemzar: "Soft PU foam — no scuff marks",
    standard: "Can mark hardwood & tile",
  },
  {
    feature: "Size & feel",
    reemzar: `${PRODUCT.size}, ${PRODUCT.diameter} diameter`,
    standard: "Varies by ball type",
  },
  {
    feature: "Setup",
    reemzar: "Ready to play — no inflation",
    standard: "Requires pump & maintenance",
  },
  {
    feature: "Best environment",
    reemzar: "Home, apartment, indoor gym",
    standard: "Outdoor courts preferred",
  },
  {
    feature: "Weight",
    reemzar: `${PRODUCT.weight} (${PRODUCT.weightNote.toLowerCase()})`,
    standard: "580–620 g (inflated leather)",
  },
] as const;

export default function Comparison() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="comparison"
      className={`comparison section section--muted reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="section-eyebrow">Comparison</span>
          <h2 className="section-title">{PRODUCT.shortName} vs. standard basketball</h2>
          <p className="section-subtitle">
            See why serious indoor players choose foam engineered for silence,
            control, and daily reps.
          </p>
        </header>

        <div className="comparison__table" role="table" aria-label="Product comparison">
          <div className="comparison__head" role="row">
            <span role="columnheader">Feature</span>
            <span role="columnheader">{PRODUCT.shortName}</span>
            <span role="columnheader">Standard Ball</span>
          </div>
          {rows.map((row) => (
            <div key={row.feature} className="comparison__row" role="row">
              <span className="comparison__feature" role="cell">
                {row.feature}
              </span>
              <span className="comparison__cell comparison__cell--reemzar" role="cell">
                <Icon name="check" size={18} />
                {row.reemzar}
              </span>
              <span className="comparison__cell comparison__cell--standard" role="cell">
                <Icon name="x" size={18} />
                {row.standard}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
