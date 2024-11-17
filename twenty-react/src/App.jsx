import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components 
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import AboutMePage from './pages/AboutmePage';
import Portfolio from './pages/PortfolioPage';
import Contact from './pages/ContactPage';

function App() {


  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>


        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App

/* import Resume from './pages/ResumePage';   */