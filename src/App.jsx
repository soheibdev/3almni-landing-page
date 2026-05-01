import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Modules from './components/Modules';
import Features from './components/Features';
import Experience from './components/Experience';
import SystemFlow from './components/SystemFlow';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <Experience />
      <Features />
      <SystemFlow />
      <DownloadApp />
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-top" onClick={handleClick} aria-label="العودة للأعلى" title="العودة للأعلى">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

export default App;
