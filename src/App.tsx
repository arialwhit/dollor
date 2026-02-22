
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Gallery from './components/Gallery.tsx';
import BookingForm from './components/BookingForm.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import TrendInspiration from './components/TrendInspiration.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Home: React.FC = () => (
  <main className="flex flex-col gap-24 pb-24">
    <Hero />
    <TrendInspiration />
    <Services />
    <Gallery />
    <div id="booking-section">
      <BookingForm />
    </div>
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50 selection:bg-rose-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<div className="pt-24"><BookingForm /></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
