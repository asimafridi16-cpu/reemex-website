import { useState } from "react";
import "./FAQ.css";
import { useReveal } from "../../hooks/useReveal";
import { PRODUCT } from "../../constants/product";

const faqs = [
  {
    question: "How quiet is the REEMZAR® Silent Basketball?",
    answer:
      "REEMZAR® dramatically reduces the sound of dribbling compared to a standard basketball. While not completely silent, it's quiet enough for apartment living, early morning sessions, and indoor spaces where noise is a concern.",
  },
  {
    question: "Is it the same size as a regulation basketball?",
    answer: `Yes. REEMZAR® is ${PRODUCT.size} with a ${PRODUCT.diameter} diameter — the same size used in professional and collegiate basketball. The weight is ${PRODUCT.weight} (${PRODUCT.weightNote.toLowerCase()}).`,
  },
  {
    question: "Can I use it outdoors?",
    answer:
      "REEMZAR® is designed primarily for indoor use. Outdoor surfaces like concrete and asphalt may wear the foam surface faster. For best longevity, we recommend indoor training.",
  },
  {
    question: "Does it bounce like a real basketball?",
    answer:
      "REEMZAR® provides a realistic dribbling feel with a softer, controlled bounce suited for indoor surfaces. It won't replicate the exact bounce of an inflated leather ball, but it's engineered for effective skill training.",
  },
  {
    question: "Is it safe for hardwood floors?",
    answer:
      "Absolutely. The soft PU foam construction is gentle on hardwood, laminate, and tile — no scuff marks or damage from normal dribbling and handling.",
  },
  {
    question: "How do I clean it?",
    answer:
      "Wipe with a damp cloth and mild soap. Avoid harsh chemicals or submerging in water. Air dry before storing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useReveal<HTMLElement>();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`faq section reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container faq__inner">
        <header className="section-header">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Common questions</h2>
          <p className="section-subtitle">
            Everything you need to know before you buy.
          </p>
        </header>

        <div className="faq__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="faq__item">
                <h3 className="faq__heading">
                  <button
                    id={buttonId}
                    type="button"
                    className={`faq__question${isOpen ? " faq__question--open" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className="faq__chevron"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={`faq__answer${isOpen ? " faq__answer--open" : ""}`}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
