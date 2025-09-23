import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SEOManager from './components/layout/SEOManager';
import AppRoutes from './components/routing/AppRoutes';
import MockupDisclaimerModal from './components/ui/MockupDisclaimerModal';
import useScrollToTop from './hooks/useScrollToTop';

import './i18n';

function AppContent() {
  useScrollToTop();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenMockupDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
    localStorage.setItem('hasSeenMockupDisclaimer', 'true');
  };

  return (
    <>
      <SEOManager />
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
      <MockupDisclaimerModal
        isOpen={showDisclaimer}
        onClose={handleCloseDisclaimer}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App
