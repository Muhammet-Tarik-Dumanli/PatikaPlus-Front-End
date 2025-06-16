import "../../styles/header.css";

function HeaderSection() {
    return (
        <header id="header" className="fixed-top">
            <div className="container">
                <div className="logo">
                    <img src="./src/assets/images/logo.png" alt="powerfull-logo" />
                </div>
                <nav id="navbar" className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-nav"
                        aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active scrollto" aria-current="page" href="#hero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#classes">Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#trainers">Trainer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#review">Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto join-btn" href="#join-us">JOIN US</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderSection;
