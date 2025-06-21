export default function Note({ id, text, color, onDelete }) {
    return (
        <div className="note"
            style={{
                backgroundColor: color
            }}
        >
            <span>{text}</span>
            <button onClick={() => onDelete(id)} className="delete-btn">🗑</button>
        </div>
    );
}