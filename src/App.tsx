import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ChargingStations from './pages/ChargingStations';
import BatteryCalculator from './pages/BatteryCalculator';
import UserDashboard from './pages/UserDashboard';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stations" element={<ChargingStations />} />
          <Route path="/calculator" element={<BatteryCalculator />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;