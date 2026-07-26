import "./Features.css";
import { useReveal } from "../../hooks/useReveal";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "Ultra-Quiet Dribbling",
    text: "High-density foam absorbs impact sound so you can practice in apartments, hallways, and home courts.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18" />
      </svg>
    ),
    title: "Official Size 7",
    text: "24 cm diameter matches regulation feel — the same grip and handling you expect from a real basketball.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9h7z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Premium Foam Core",
    text: "Engineered high-density foam delivers consistent bounce, soft touch, and long-lasting durability.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z" strokeLinejoin="round" />
      </svg>
    ),
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
            Every detail is designed to give you a premium training experience —
            quiet, controlled, and built to last.
          </p>
        </header>

        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.title} className="features__card">
              <div className="features__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
