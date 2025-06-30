import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-black min-h-screen">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/:id" element={<CaseStudyPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;