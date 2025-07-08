import { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

  const clearCompleted = () => {
    const newToDos = todos.filter((todo) => !todo.done);
    setTodos(newToDos);
  }

  const filteredToDos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  })

  const toggleAll = () => {
    const allDone = todos.every((todo) => todo.done);
    setTodos(todos.map((todo) => ({ ...todo, done: !allDone })))
  }

  return (
    <section className='todoapp'>
      <Header addToDo={addToDo} />
      {todos.length > 0 && (
        <>
          <ToDoList todos={filteredToDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} toggleAll={toggleAll} />
          <Footer todos={todos} setFilter={setFilter} clearCompleted={clearCompleted} currentFilter={filter} />
        </>
      )}
    </section>
  )
}

export default App
