import React from 'react';
import './index.css';
import{BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import ClassesCard from './components/ClassesCard'; 

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ClassesCard" element={<ClassesCard />}/>
      </Routes>
      
    </Router>
  )
}

export default App