import { useState } from "react";
import "./InteractiveProduct.css";
import productImage from "../../assets/images/specifications.png";
import { useReveal } from "../../hooks/useReveal";
import { PRODUCT } from "../../constants/product";

const hotspots = [
  {
    id: "size",
    label: "Official Size 7",
    detail: `${PRODUCT.size} with ${PRODUCT.diameter} diameter for regulation handling.`,
    position: { top: "18%", left: "52%" },
  },
  {
    id: "material",
    label: "PU Foam Core",
    detail: `${PRODUCT.material} delivers quiet impact absorption and consistent bounce.`,
    position: { top: "42%", left: "68%" },
  },
  {
    id: "grip",
    label: "Comfort Grip",
    detail: "Textured surface for confident dribbling, passing, and control drills.",
    position: { top: "58%", left: "38%" },
  },
  {
    id: "weight",
    label: "600 g Total",
    detail: `${PRODUCT.weight} ${PRODUCT.weightNote.toLowerCase()} — balanced for indoor training.`,
    position: { top: "72%", left: "58%" },
  },
] as const;

export default function InteractiveProduct() {
  const [activeId, setActiveId] = useState<string>(hotspots[0].id);
  const { ref, isVisible } = useReveal<HTMLElement>();
  const active = hotspots.find((h) => h.id === activeId) ?? hotspots[0];

  return (
    <section
      id="product"
      className={`interactive section reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="section-eyebrow">Interactive Product</span>
          <h2 className="section-title">Explore every detail</h2>
          <p className="section-subtitle">
            Tap a feature to discover what makes {PRODUCT.shortName} a premium
            indoor training essential.
          </p>
        </header>

        <div className="interactive__stage">
          <div className="interactive__visual">
            <img
              src={productImage}
              alt={`${PRODUCT.name} product view`}
              className="interactive__image"
              width={560}
              height={560}
            />
            {hotspots.map((spot) => (
              <button
                key={spot.id}
                type="button"
                className={`interactive__dot${activeId === spot.id ? " interactive__dot--active" : ""}`}
                style={{ top: spot.position.top, left: spot.position.left }}
                aria-label={`View ${spot.label}`}
                aria-pressed={activeId === spot.id}
                onClick={() => setActiveId(spot.id)}
              />
            ))}
          </div>

          <div className="interactive__panel" aria-live="polite">
            <span className="interactive__panel-label">{active.label}</span>
            <p>{active.detail}</p>
            <ul className="interactive__chips">
              {hotspots.map((spot) => (
                <li key={spot.id}>
                  <button
                    type="button"
                    className={`interactive__chip${activeId === spot.id ? " interactive__chip--active" : ""}`}
                    onClick={() => setActiveId(spot.id)}
                  >
                    {spot.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
