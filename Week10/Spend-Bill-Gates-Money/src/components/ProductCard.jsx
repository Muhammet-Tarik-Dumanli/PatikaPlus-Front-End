//Display a single product with buy/sell buttons

const ProductCard = ({ product, balance, quantity, onBuy, onSell }) => {
    const canBuy = balance >= product.price;
    const canSell = quantity > 0;

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toLocaleString()}</p>

            <div className="buttons">
                <button onClick={() => onSell(product)} disabled={!canSell}>Sell</button>
                <span>{quantity}</span>
                <button onClick={() => onBuy(product)} disabled={!canBuy}>Buy</button>
            </div>
        </div>
    );
};

export default ProductCard;