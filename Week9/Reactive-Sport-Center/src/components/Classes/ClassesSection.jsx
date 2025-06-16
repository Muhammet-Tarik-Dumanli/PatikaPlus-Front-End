import "../../styles/classes.css";

function ClassesSection() {
  return (
    <section id="classes">
    <div className="bg-graphic"></div>
    <div className="classes-wrapper">
      <h2 className="section-header">OUR CLASSES</h2>
      <div className="highlight-line"></div>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas corporis asperiores magni qui
        nulla.
      </p>
      <div className="category-buttons">
        <button type="button" className="category-btn" data-category="Yoga">Yoga</button>
        <button type="button" className="category-btn" data-category="Group">Group</button>
        <button type="button" className="category-btn" data-category="Solo">Solo</button>
        <button type="button" className="category-btn" data-category="Stretching">Stretching</button>
      </div>
      <div className="classes-details">
      </div>
    </div>
  </section>
  );
}

export default ClassesSection;
