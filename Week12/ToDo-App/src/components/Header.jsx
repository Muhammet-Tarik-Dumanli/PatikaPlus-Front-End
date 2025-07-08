import React, { useState } from 'react'

function Header({ addToDo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText('');
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input className='new-todo' placeholder='What needs to be done?' autoFocus value={text} onChange={(e) => setText(e.target.value)} />
            </form>
        </header>
    )
}

export default Header