import React from 'react';

import './index.css';
import{BrowserRouter as Router,Switch,Route,Link,Routes}from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
      
    </Router>
  )
}

export default App