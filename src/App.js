import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import Plex from './components/Plex.js'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='Plex' element={<Plex/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;