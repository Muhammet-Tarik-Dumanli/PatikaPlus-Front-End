import "../../styles/trainers.css";

function TrainersSection() {
    return (
        <section id="trainers">
            <div className="trainers-wrapper">
                <h2 className="section-header">OUR BEST TRAINERS</h2>
                <div className="highlight-line"></div>
                <p className="section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas corporis asperiores magni qui
                    nulla.
                </p>
                <div className="trainers-gallery">
                    <div className="trainer-card">
                        <div className="trainer-bg before-layer"></div>
                        <img src="./src/assets/images/trainer1.jpg" alt="trainer-1" className="trainer-photo" />
                        <div className="trainer-bg after-layer"></div>
                        <div className="trainer-label">
                            <span className="name">Ebru ŞALLI</span>
                            <span className="role">Fitness Coach</span>
                        </div>
                        <div className="trainer-bg after-layer-bottom"></div>
                    </div>
                    <div className="trainer-card">
                        <div className="trainer-bg before-layer"></div>
                        <img src="./src/assets/images/trainer2.jpg" alt="trainer-2" className="trainer-photo" />
                        <div className="trainer-bg after-layer"></div>
                        <div className="trainer-label">
                            <span className="name">Can YAMAN</span>
                            <span className="role">Strength Trainer</span>
                        </div>
                        <div className="trainer-bg after-layer-bottom"></div>
                    </div>
                    <div className="trainer-card">
                        <div className="trainer-bg before-layer"></div>
                        <img src="./src/assets/images/trainer3.jpg" alt="trainer-3" className="trainer-photo" />
                        <div className="trainer-bg after-layer"></div>
                        <div className="trainer-label">
                            <span className="name">Bülent ERSOY</span>
                            <span className="role">Cardio Trainer</span>
                        </div>
                        <div className="trainer-bg after-layer-bottom"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrainersSection;
