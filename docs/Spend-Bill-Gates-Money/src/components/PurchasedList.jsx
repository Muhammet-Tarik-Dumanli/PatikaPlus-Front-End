//List all purchased items with total prices

const PurchasedList = ({ purchased }) => {

    const purchasedItems = Object.values(purchased).filter((item) => item.quantity > 0);

    if (purchasedItems.length === 0) return null;

    return (
        <div className="purchased-list">
            <h2>Purchased Items</h2>
            <ul>
                {purchasedItems.map((item) => (
                    <li key={item.id}>
                        {item.title} x {item.quantity} = ${item.quantity * item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PurchasedList;