import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    const trimmed = text.trim();

    if (trimmed !== '') {
      const newToDo = { text: trimmed, done: false };
      setTodos([...todos, newToDo]);
    }
  }

  return (
    <section className='todoapp'>
      <Header addToDo={addToDo}/>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </section>
  )
}

export default App
