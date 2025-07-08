import React from 'react'

function ToDoItem({toDo, index, toggleToDo, deleteToDo}) {
  return (
    <li className={toDo.done ? 'completed' : ''}>
        <div className="view">
            <input type='checkbox' className="toggle" checked={toDo.done} onChange={() => toggleToDo(index)}/>
            <label>{toDo.text}</label>
            <button className='destroy' onClick={() => deleteToDo(index)}></button>
        </div>
    </li>
  )
}

export default ToDoItem