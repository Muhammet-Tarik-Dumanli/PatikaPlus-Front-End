import "../../styles/stats.css";

function StatsSection() {
  return (
    <section className="stats">
    <div className="stats-card">
      <div className="stat-box">
        <h3>325</h3>
        <p>Course</p>
      </div>
      <div className="stat-box">
        <h3>405</h3>
        <p>Work Out</p>
      </div>
      <div className="stat-box">
        <h3>305</h3>
        <p>Working Hour</p>
      </div>
      <div className="stat-box">
        <h3>705</h3>
        <p>Happy Client</p>
      </div>
    </div>
  </section>
  );
}

export default StatsSection;
