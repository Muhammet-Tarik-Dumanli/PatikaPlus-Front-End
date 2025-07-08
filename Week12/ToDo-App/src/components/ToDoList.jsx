import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({ todos, toggleToDo, deleteToDo, toggleAll }) {

    const allCompleted = todos.length > 0 && todos.every((todo) => todo.done);
    return (
        <section className='main'>
            <input type="checkbox" className='toggle-all' id='toggle-all' checked={allCompleted} onChange={toggleAll}/>
            <label htmlFor='toggle-all'>Mark all as completed</label>

            <ul className='todo-list'>
                {todos.map((toDo, index) => (
                    <ToDoItem key={index} toDo={toDo} index={index} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
                ))}
            </ul>
        </section>
    )
}

export default ToDoList