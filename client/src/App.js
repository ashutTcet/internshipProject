import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Locations from './pages/Locations';
import HomeServices from './pages/HomeServices';
import DailyFood from './pages/DailyFood';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/home-services" element={<HomeServices />} />
              <Route path="/daily-food" element={<DailyFood />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
