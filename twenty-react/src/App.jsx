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
import Resume from './pages/ResumePage';   

function App() {


  return (
    <Router>
      <div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950 text-white'>
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<AboutMePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>


        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App
