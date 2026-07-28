import "./Story.css";
import { useReveal } from "../../hooks/useReveal";
import { PRODUCT } from "../../constants/product";

export default function Story() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="story"
      className={`story section section--alt reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container story__inner">
        <header className="section-header">
          <span className="section-eyebrow">Our Story</span>
          <h2 className="section-title">Designed for the way you train today</h2>
        </header>

        <div className="story__content">
          <p className="story__lead">
            {PRODUCT.shortName} was born from a simple frustration: great players
            need daily reps, but traditional basketballs were never built for
            modern indoor life.
          </p>
          <p>
            We set out to engineer a ball that feels authentic in the hand —
            Official Size 7, {PRODUCT.diameter} diameter, premium{" "}
            {PRODUCT.material.toLowerCase()} — while staying quiet enough for
            apartments, home gyms, and late-night sessions.
          </p>
          <p>
            Every {PRODUCT.name} is refined for control, durability, and
            floor-safe performance. No inflation. No compromise. Just focused
            training, on your schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
