import "../../styles/bmi.css";

function BMISection() {
    return (
        <section className="bmi-section">
            <div className="bmi-calculator">
                <h2>BMI calculator</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere est earum natus animi ex dicta
                    fugit dolore? Accusantium nam impedit cum dignissimos nostrum. Molestiae assumenda illum facere corrupti?
                </p>
                <div className="bmi-inputs">
                    <div className="input-group">
                        <input type="number" id="height" placeholder="Height (cm)" />
                    </div>
                    <div className="input-group">
                        <input type="number" id="weight" placeholder="Weight (kg)" />
                    </div>
                </div>
            </div>

            <div className="bmi-result">
                <h3>Your BMI</h3>
                <div className="bmi-visual">
                    <img src="./src/assets/images/bmi-index.jpg" alt="BMI Scale" className="bmi-img" />
                    <div className="bmi-pointer"></div>
                </div>
            </div>
        </section>
    );
}

export default BMISection;
