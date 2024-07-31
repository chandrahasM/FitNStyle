import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import UserProfile from './UserProfile';
import PhysicalAttributes from './PhysicalAttributes'
import StylePreferences from './StylePreferences';
import ColorSeason from './colorSeason';

const DetailDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Router>
        <header className="bg-red-400 text-white py-4 md:py-6 lg:py-8">
          <h1 className="text-5xl md:text-3xl lg:text-4xl text-center font-bold">StyleNSync</h1>
        </header>
        <Navbar />
        <main className="flex-grow p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/PhysicalAttributes" element={<PhysicalAttributes />} />
            <Route path="/StylePreferences" element={<StylePreferences />} />
            <Route path="/ColorSeason" element={<ColorSeason />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default DetailDashboard;