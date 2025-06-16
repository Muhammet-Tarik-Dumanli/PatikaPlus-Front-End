import "../../styles/contact.css";

function ContactSection() {
    return (
        <section id="contact">
            <div className="contact-section">
                <h2 className="section-header">CONTACT US</h2>
                <div className="highlight-line"></div>
                <p className="section-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dignissimos blanditiis quo?
                </p>
                <div className="contact-content">
                    <div className="contact-details">
                        <div className="contact-info-group">
                            <div className="contact-item">
                                <h4>Mobile Number</h4>
                                <p>+90 533 123 45 67</p>
                            </div>
                            <div className="contact-item">
                                <h4>Email Address</h4>
                                <p>info@sportcenter.com.tr</p>
                            </div>
                        </div>
                        <h3 className="form-title">Make An Appointment</h3>
                        <form className="contact-form">
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        </form>
                    </div>
                    <div className="contact-map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12231.32857896746!2d32.76144467043155!3d39.967505439668265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3497338812e0d%3A0x8809dd53a5df5afa!2sMehmet%20Akif%20Ersoy%2C%2006200%20Yenimahalle%2FAnkara!5e0!3m2!1str!2str!4v1749553196154!5m2!1str!2str"
                            style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            className="contact-map"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
