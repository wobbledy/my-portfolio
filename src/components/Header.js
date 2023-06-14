import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return null;
  };
    

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page-container">
      <header>
        <div className="header-content">
          <h1>Wobbledy</h1>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
      <main className="main-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}