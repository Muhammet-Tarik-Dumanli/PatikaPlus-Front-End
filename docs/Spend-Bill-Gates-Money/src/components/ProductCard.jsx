import { useState } from "react";

//Display a single product with buy/sell buttons and quantity input
const ProductCard = ({ product, balance, quantity, onBuy, onSell }) => {
    const canSell = quantity > 0;
    const [count, setCount] = useState(1);

    const totalPrice = product.price * count;

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toLocaleString()}</p>

            <input type="number" min={1} value={count} onChange={(e) => setCount(parseInt(e.target.value)) || 1} style={{ width: "60px", marginBottom: "0.5rem" }} />
            <div className="buttons">
                <button className="sell" onClick={() => onSell(product, count)} disabled={!canSell}>Sell</button>
                <span>{quantity}</span>
                <button className="buy" onClick={() => onBuy(product, count)} disabled={totalPrice > balance}>Buy</button>
            </div>
        </div>
    );
};

export default ProductCard;