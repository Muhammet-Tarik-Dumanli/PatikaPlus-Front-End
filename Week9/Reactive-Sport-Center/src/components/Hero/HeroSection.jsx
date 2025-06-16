import "../../styles/hero.css";

function HeroSection() {
  return (
    <section className="hero" id="hero">
    <div className="hero-content">
      <span className="label">POWERFULL</span>
      <h1>Group<>Practice</>With Trainer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id cum illo corrupti obcaecati modi vitae
        mollitia blanditiis deserunt perferendis quis magnam sunt ex, dolorum suscipit dignissimos velit totam minus?
      </p>
      <div className="hero-buttons">
        <a href="#" className="btn primary">Sign Up</a>
        <a href="#" className="btn secondary">Details</a>
      </div>
    </div>
  </section>
  );
}

export default HeroSection;
