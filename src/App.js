import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import Plex from './components/Plex.js'
import Dropbox from './components/Dropbox.js';
import Ebbo from './components/Ebbo.js';
import Backbone from './components/Backbone.js';
import Parsec from './components/Parsec.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='Plex' element={<Plex/>}/>
        <Route path='Dropbox' element={<Dropbox/>}/>
        <Route path='Ebbo' element={<Ebbo/>}/>
        <Route path='Backbone' element={<Backbone/>}/>
        <Route path='Parsec' element={<Parsec/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;