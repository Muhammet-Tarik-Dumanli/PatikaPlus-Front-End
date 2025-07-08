import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import StarshipDetail from './pages/StarshipDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/starship/:id' element={<StarshipDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
