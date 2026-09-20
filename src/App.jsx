import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StoryPage from './pages/StoryPage';
import FinalPage from './pages/FinalPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/story/:id" element={<StoryPage />} />
      <Route path="/final" element={<FinalPage />} />
      {/* Fallback to home */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
