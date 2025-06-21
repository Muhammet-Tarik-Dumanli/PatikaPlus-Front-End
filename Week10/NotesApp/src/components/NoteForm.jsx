import { useState } from "react";

const colors = ['#e57373', '#64b5f6', '#fff176', '#81c784', '#ba68c8'];

const NodeForm = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === '') return;

        onAdd(text, selectedColor);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea placeholder="Enter your note here..." value={text} onChange={e => setText(e.target.value)} />
            <div className="color-picker">
                {colors.map(color => (
                    <div className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        style={{
                            backgroundColor: color
                        }}
                    />
                ))}
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default NodeForm;