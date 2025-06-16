import "../../styles/purchase.css";

function PurchaseSection() {
    return (
        <section className="purchase">
            <div className="purchase-container">
                <h2 className="section-header">PURCHASE FROM US</h2>
                <div className="highlight-line"></div>
                <p className="section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sed! Dolorum, incidunt!
                </p>
                <div className="purchase-wrapper">
                    <div className="product-card">
                        <img src="./src/assets/images/purchase1.jpg" alt="Kettlebell 5 kg" className="product-img" />
                        <p>Kettlebell / 5kg</p>
                        <p className="product-price"><s>$89,99</s> / 59,99</p>
                        <button className="add-to-cart-btn">Add To Cart</button>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="product-card">
                        <img src="./src/assets/images/purchase2.jpg" alt="Treadmill" className="product-img" />
                        <p>Treadmill</p>
                        <p className="product-price"><s>$89,99$</s> / 59,99</p>
                        <button className="add-to-cart-btn">Add To Cart</button>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="product-card">
                        <img src="./src/assets/images/purchase3.jpg" alt="Adjustable Dumbbell" className="product-img" />
                        <p>Adjustable Dumbbell</p>
                        <p className="product-price"><s>$89,99$</s> / 59,99</p>
                        <button className="add-to-cart-btn">Add To Cart</button>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="product-card">
                        <img src="./src/assets/images/purchase4.jpg" alt="Kettlebell 3 kg" className="product-img" />
                        <p>Kettlebell / 3kg</p>
                        <p className="product-price"><s>$89,99</s> / $59,99</p>
                        <button className="add-to-cart-btn">Add To Cart</button>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PurchaseSection;
