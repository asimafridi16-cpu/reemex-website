import "./Specifications.css";
import specsImage from "../../assets/images/specifications.png";

const Specifications = () => {
  return (
    <section id="specifications" className="specifications">
      <div className="container specs-container">
        <div className="specs-image">
          <img src={specsImage} alt="REEMZAR Specifications" />
        </div>

        <div className="specs-content">
          <span className="section-tag">SPECIFICATIONS</span>

          <h2>Built for Everyday Training</h2>

          <div className="spec-list">
            <div className="spec-item">
              <span>Size</span>
              <strong>Official Size 7</strong>
            </div>

            <div className="spec-item">
              <span>Diameter</span>
              <strong>24 cm</strong>
            </div>

            <div className="spec-item">
              <span>Weight</span>
              <strong>320 g</strong>
            </div>

            <div className="spec-item">
              <span>Material</span>
              <strong>High-Density Foam</strong>
            </div>

            <div className="spec-item">
              <span>Recommended Use</span>
              <strong>Indoor Practice</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;