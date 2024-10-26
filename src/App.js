// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import PropertyForm from './components/PropertyForm';
import NavBar from './components/Navbar';
import Footer from './components/Footer'; // استيراد الفوتر
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/add" element={<PropertyForm />} />
          <Route path="/edit/:id" element={<PropertyForm />} />
        </Routes>
        <Footer /> {/* إضافة الفوتر هنا */}
      </div>
    </Router>
  );
};

export default App;
