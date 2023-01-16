import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
import About from './pages/About';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)