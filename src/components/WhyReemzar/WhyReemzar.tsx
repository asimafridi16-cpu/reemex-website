import "./WhyReemzar.css";
import { useReveal } from "../../hooks/useReveal";

const reasons = [
  {
    tag: "Silent",
    title: "Why silent matters",
    text: "Traditional basketballs echo through walls and floors. REEMZAR's foam construction dramatically reduces noise — so you can train at 6 AM or midnight without disturbing anyone.",
    reverse: false,
  },
  {
    tag: "Premium",
    title: "Why premium foam",
    text: "Not all foam balls are equal. REEMZAR uses high-density foam that maintains its shape, bounce, and grip through thousands of dribbles — not the cheap foam that flattens in weeks.",
    reverse: true,
  },
  {
    tag: "Indoor",
    title: "Built for indoor practice",
    text: "Hardwood, laminate, tile — REEMZAR is designed for indoor surfaces. Soft enough to protect floors, responsive enough for real skill development.",
    reverse: false,
  },
  {
    tag: "Safe",
    title: "Safer for your space",
    text: "No scuff marks, no loud thuds, no risk of damaging furniture or walls. Practice confidently in any room of your home.",
    reverse: true,
  },
  {
    tag: "Durable",
    title: "Built to last",
    text: "Premium materials and construction mean your REEMZAR ball keeps performing session after session. This isn't a novelty toy — it's a training tool.",
    reverse: false,
  },
  {
    tag: "Better",
    title: "Better than ordinary balls indoors",
    text: "Regulation balls are loud, hard on floors, and impractical for home use. REEMZAR gives you the training feel you need, in the environment you have.",
    reverse: true,
  },
];

export default function WhyReemzar() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="why-reemzar"
      className={`why section section--alt reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="section-eyebrow">Why REEMZAR</span>
          <h2 className="section-title">The smarter way to train indoors</h2>
          <p className="section-subtitle">
            Ordinary basketballs weren't designed for your living room.
            REEMZAR was.
          </p>
        </header>

        <div className="why__list">
          {reasons.map((item) => (
            <article
              key={item.tag}
              className={`why__row${item.reverse ? " why__row--reverse" : ""}`}
            >
              <div className="why__tag">{item.tag}</div>
              <div className="why__content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
