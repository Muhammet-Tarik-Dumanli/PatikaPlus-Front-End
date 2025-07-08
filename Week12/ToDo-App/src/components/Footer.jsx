import React from 'react'

function Footer({ todos, setFilter, clearCompleted, currentFilter }) {
    const activeCount = todos.filter((todo) => !todo.done).length;
    const completedCount = todos.filter((todo) => todo.done).length;

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> {activeCount === 1 ? 'item' : 'items'}
            </span>

            <ul className="filters">
                {['all', 'active', 'completed'].map((f) => (
                    <li key={f}>
                        <a href="#/" className={currentFilter === f ? 'selected' : ''} onClick={() => setFilter(f)}>
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>

            {completedCount > 0 && (
                <button className='clear-completed' onClick={clearCompleted}>Clear Completed</button>
            )}
        </footer>
    )
}

export default Footer