import "./HowItWorks.css";
import { useReveal } from "../../hooks/useReveal";
import { PRODUCT } from "../../constants/product";

const steps = [
  {
    number: "01",
    title: "Unbox & Inspect",
    text: `Your REEMZAR® arrives ready to play. ${PRODUCT.size}, premium PU foam, no inflation needed.`,
  },
  {
    number: "02",
    title: "Find Your Space",
    text: "Clear a small area — living room, hallway, or garage. Any flat indoor surface works.",
  },
  {
    number: "03",
    title: "Start Training",
    text: "Dribble, pass, and drill with realistic feel. Quiet enough for any time of day.",
  },
  {
    number: "04",
    title: "Level Up Daily",
    text: "Consistent reps build muscle memory. REEMZAR® makes daily practice effortless.",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="how-it-works"
      className={`how section section--alt reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">From unbox to game-ready in minutes</h2>
          <p className="section-subtitle">
            No setup, no noise complaints, no excuses. Just open and train.
          </p>
        </header>

        <ol className="how__timeline">
          {steps.map((step, index) => (
            <li key={step.number} className="how__step">
              <div className="how__marker">
                <span className="how__number">{step.number}</span>
                {index < steps.length - 1 && <span className="how__line" aria-hidden="true" />}
              </div>
              <div className="how__content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
