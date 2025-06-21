import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'

function App() {

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, color) => {
    const newNote = { id: Date.now(), text, color };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  return (
    <div className="container">
      <h1>NotesApp</h1>
      <input type='text' placeholder='Search...' onChange={e => setSearchTerm(e.target.value)} />
      <NoteForm onAdd={addNote} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} />
    </div>
  )
}

export default App
