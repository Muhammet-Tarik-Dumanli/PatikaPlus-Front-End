import "../../styles/footer.css";

function FooterSection() {
    return (
        <footer>
            <div class="footer-container">
                <img src="./src/assets/images/logo.png" alt="powerfull-logo" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur esse vitae facere accusantium consectetur
                    maxime, officia itaque adipisci nulla veritatis ut aut doloribus, assumenda at natus! Illum dolore odit eius.
                    Fugit cumque perferendis quo praesentium sit tempore quisquam illo numquam impedit ullam iste possimus officiis
                    corrupti velit, incidunt similique officia ad ratione rem reiciendis a expedita veritatis voluptates iure?
                    Ipsam?
                </p>
                <div class="information-and-links">
                    <div class="information">
                        <h3>Information</h3>
                        <a href="#hero">About Us</a>
                        <a href="#classes">Classes</a>
                        <a href="#trainers">Trainers</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div class="helpful-links">
                        <h3>Helpful links</h3>
                        <a href="#">Services</a>
                        <a href="#">Supports</a>
                        <a href="#">Terms & Condition</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;
