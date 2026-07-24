import "./Gallery.css";

import hero from "../../assets/images/hero.png";
import product from "../../assets/images/product.png";
import lifestyle from "../../assets/images/lifestyle.png";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Product Gallery</h2>

        <div className="gallery-grid">
          <img src={hero} alt="Hero" />
          <img src={product} alt="Product" />
          <img src={lifestyle} alt="Lifestyle" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;