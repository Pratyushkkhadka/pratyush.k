import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import SocialSidebar from './components/SocialSidebar';
import BackgroundGrid from './components/BackgroundGrid';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // We still sync the class just in case React state drifts, though index.html does it first.
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-200 font-sans relative overflow-x-hidden">
      {/* Background */}
      <BackgroundGrid />

      {/* Navigation */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <SocialSidebar />

      {/* Main Content */}
      <main className="md:ml-[70px] relative z-10 md:pb-0 pb-[60px] overflow-hidden">
        <div key={activeSection} className="animate-reveal">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
