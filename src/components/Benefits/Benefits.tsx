import "./Benefits.css";
import { useReveal } from "../../hooks/useReveal";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12a9 9 0 1 0 18 0" strokeLinecap="round" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Train Anytime",
    text: "Early mornings, late nights — no noise restrictions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" />
      </svg>
    ),
    title: "Any Room Works",
    text: "Living room, garage, hallway — your home is your court.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Floor Safe",
    text: "Soft foam protects hardwood and laminate surfaces.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Skill Development",
    text: "Real handling feel for dribbling, passing, and footwork.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "All Skill Levels",
    text: "From beginners to advanced players refining their game.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
    title: "Year-Round Practice",
    text: "Rain, snow, or heat — never miss a training day.",
  },
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
            REEMZAR removes every barrier between you and consistent practice.
          </p>
        </header>

        <div className="benefits__grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="benefits__card">
              <div className="benefits__icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
