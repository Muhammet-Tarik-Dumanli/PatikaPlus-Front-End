import "../../styles/review.css";

function ReviewSection() {
    return (
        <section id="review">
            <div className="review-container">
                <h2 className="section-header">REVIEW CLIENT</h2>
                <div className="highlight-line"></div>
                <p className="section-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dignissimos blanditiis quo?
                </p>
                <div className="client-reviews">
                    <div className="review-card">
                        <div className="client-info">
                            <img src="./src/assets/images/client1.jpg" alt="Client 1" />
                            <div className="client-name">
                                <p>Diet Expert</p>
                                <p>CFO</p>
                            </div>
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas est illo. Esse debitis deserunt
                                itaque maiores iusto id eveniet laudantium velit voluptates.
                            </p>
                        </div>
                    </div>
                    <div className="review-card">
                        <div className="client-info">
                            <img src="./src/assets/images/client2.jpg" alt="Client 2" />
                            <div className="client-name">
                                <p>Cardio Trainer</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas est illo. Esse debitis deserunt
                                itaque maiores iusto id eveniet laudantium velit voluptates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;
