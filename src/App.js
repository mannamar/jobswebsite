// Amardeep Mann
// 3-3-23
// Jobs that interest you
// We created a single page React website about companies that we'd be interested in working at
// Peer Review by Ken: "Spartan, but easy to navigate and easy on the eyes. No real bugs that I could find. The code was easy to follow. The company logos were a nice touch, along with the links to the career pages. Thoughtful and introspective assessments of the five companies as well. As always, good job!" -Kenneth Fujimura

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