import "./Features.css";
import Icon from "../icons/Icon";
import { useReveal } from "../../hooks/useReveal";
import { PRODUCT } from "../../constants/product";

const features = [
  {
    icon: "quiet" as const,
    title: "Ultra-Quiet Dribbling",
    text: "High-density PU foam absorbs impact sound so you can practice in apartments, hallways, and home courts.",
  },
  {
    icon: "size" as const,
    title: "Official Size 7",
    text: `${PRODUCT.diameter} diameter matches regulation feel — the same grip and handling you expect from a real basketball.`,
  },
  {
    icon: "foam" as const,
    title: "Premium Foam Core",
    text: `Engineered ${PRODUCT.material.toLowerCase()} delivers consistent bounce, soft touch, and long-lasting durability.`,
  },
  {
    icon: "grip" as const,
    title: "Comfort Grip Surface",
    text: "Textured exterior ensures confident handling for dribbling, passing, and skill development drills.",
  },
];

export default function Features() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="features"
      className={`features section reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="section-eyebrow">Features</span>
          <h2 className="section-title">Engineered for silent excellence</h2>
          <p className="section-subtitle">
            Every detail of the {PRODUCT.name} is designed for a premium training
            experience — quiet, controlled, and built to last.
          </p>
        </header>

        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.title} className="features__card">
              <div className="features__icon">
                <Icon name={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
