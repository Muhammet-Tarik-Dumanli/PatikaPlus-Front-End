import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    const trimmed = text.trim();

    if (trimmed !== '') {
      const newToDo = { text: trimmed, done: false };
      setTodos([...todos, newToDo]);
    }
  }

  const toggleToDo = (index) => {
    const newToDos = [...todos];
    newToDos[index].done = !newToDos[index].done;
    setTodos(newToDos);
  }

  const deleteToDo = (index) => {
    const newToDos = todos.filter((_, i) => i !== index);
    setTodos(newToDos);
  }

  return (
    <section className='todoapp'>
      <Header addToDo={addToDo} />
      {todos.length > 0 && (
        <ToDoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
      )}
    </section>
  )
}

export default App
