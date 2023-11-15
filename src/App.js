import React from 'react';

import './index.css';
import{BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
      
    </Router>
  )
}

export default App