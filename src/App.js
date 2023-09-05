import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/contact" element={ <Contact /> }/>
      </Routes>
    </>
  );
}

export default App;
