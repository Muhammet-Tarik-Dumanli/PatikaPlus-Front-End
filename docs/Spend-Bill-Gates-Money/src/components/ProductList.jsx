import ProductCard from "./ProductCard";

//Render a list of product cards

const ProductList = ({ products, balance, purchased, onBuy, onSell }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    balance={balance}
                    quantity={purchased[product.id]?.quantity || 0}
                    onBuy={onBuy}
                    onSell={onSell}
                />
            ))}
        </div>
    );
};

export default ProductList;

