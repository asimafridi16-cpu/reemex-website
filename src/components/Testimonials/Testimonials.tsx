import "./Testimonials.css";
import { useReveal } from "../../hooks/useReveal";

const testimonials = [
  {
    quote:
      "I can finally practice at 5 AM without waking my family. The grip feels legit and the bounce is consistent on hardwood.",
    name: "Marcus T.",
    role: "High school point guard",
    rating: 5,
  },
  {
    quote:
      "We use REEMZAR in our apartment gym setup. It's quiet, floor-safe, and the Size 7 feel keeps my handles sharp.",
    name: "Elena R.",
    role: "Club basketball player",
    rating: 5,
  },
  {
    quote:
      "Premium build quality. No cheap foam flattening after a few weeks — this feels like a real training tool, not a toy.",
    name: "James K.",
    role: "Youth coach & parent",
    rating: 5,
  },
] as const;

export default function Testimonials() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="testimonials"
      className={`testimonials section section--alt reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">Trusted by indoor players</h2>
          <p className="section-subtitle">
            Real feedback from athletes, coaches, and parents who train with
            REEMZAR® every day.
          </p>
        </header>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="testimonials__card">
              <div className="testimonials__stars" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }, (_, i) => (
                  <span key={i} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <cite>{item.name}</cite>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
