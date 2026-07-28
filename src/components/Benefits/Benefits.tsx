import "./Benefits.css";
import Icon from "../icons/Icon";
import { useReveal } from "../../hooks/useReveal";

const benefits = [
  { icon: "clock" as const, title: "Train Anytime", text: "Early mornings, late nights — no noise restrictions." },
  { icon: "home" as const, title: "Any Room Works", text: "Living room, garage, hallway — your home is your court." },
  { icon: "shield" as const, title: "Floor Safe", text: "Soft foam protects hardwood and laminate surfaces." },
  { icon: "bolt" as const, title: "Skill Development", text: "Real handling feel for dribbling, passing, and footwork." },
  { icon: "user" as const, title: "All Skill Levels", text: "From beginners to advanced players refining their game." },
  { icon: "sun" as const, title: "Year-Round Practice", text: "Rain, snow, or heat — never miss a training day." },
];

export default function Benefits() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="benefits"
      className={`benefits section reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="section-eyebrow">Benefits</span>
          <h2 className="section-title">More reps. Less noise. Better game.</h2>
          <p className="section-subtitle">
            REEMZAR® removes every barrier between you and consistent practice.
          </p>
        </header>

        <div className="benefits__grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="benefits__card">
              <div className="benefits__icon">
                <Icon name={benefit.icon} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
