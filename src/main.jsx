import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Home from './components/navbar/home.jsx';
import About from './components/navbar/about.jsx';
import Portfolio from './components/navbar/portfolio.jsx';
import Contact from './components/navbar/contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>
  </StrictMode>,
)
