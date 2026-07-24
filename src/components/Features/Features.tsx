import "./Features.css";

const features = [
  {
    title: "Quiet Training",
    text: "Designed to reduce noise for indoor basketball practice.",
  },
  {
    title: "Official Size 7",
    text: "24 cm diameter for a familiar training experience.",
  },
  {
    title: "High-Density Foam",
    text: "Soft, durable foam built for everyday practice.",
  },
  {
    title: "Comfort Grip",
    text: "Easy to handle for dribbling, passing and skill training.",
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Why Choose REEMZAR?</h2>
        <p className="subtitle">
          Designed for players who want to practice anytime, anywhere.
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;