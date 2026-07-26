import "./Lifestyle.css";
import courtImg from "../../assets/images/hero.png";
import productImg from "../../assets/images/product.png";
import lifestyleImg from "../../assets/images/lifestyle.png";
import { useReveal } from "../../hooks/useReveal";

export default function Lifestyle() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="lifestyle"
      className={`lifestyle section reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Lifestyle</span>
          <h2 className="section-title">Your court. Your schedule.</h2>
          <p className="section-subtitle">
            Transform any space into a training ground. REEMZAR fits seamlessly
            into the way you live — and the way you play.
          </p>
        </header>

        <div className="lifestyle__editorial">
          <figure className="lifestyle__hero-image">
            <img
              src={lifestyleImg}
              alt="Training with REEMZAR Silent Basketball at home"
            />
            <figcaption>Train anywhere indoors</figcaption>
          </figure>

          <div className="lifestyle__side">
            <figure className="lifestyle__side-image lifestyle__side-image--top">
              <img
                src={productImg}
                alt="REEMZAR Silent Basketball product detail"
              />
              <figcaption>Premium foam construction</figcaption>
            </figure>
            <figure className="lifestyle__side-image">
              <img
                src={courtImg}
                alt="REEMZAR Silent Basketball on indoor court"
              />
              <figcaption>Official Size 7 feel</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
