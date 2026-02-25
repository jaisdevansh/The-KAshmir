import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Catering from './pages/Catering';
import Contact from './pages/Contact';
import './styles/global.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />

          <a
            href="https://wa.me/919910559269"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <svg viewBox="0 0 32 32" className="whatsapp-icon" fill="currentColor">
              <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.733 5.48 2.01 7.79l-2.01 7.21 7.377-1.937c2.253 1.222 4.834 1.937 7.56 1.937 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.455 0-4.755-0.655-6.76-1.785l-0.485-0.27-4.39 1.15 1.173-4.212-0.297-0.473c-1.253-2-1.975-4.362-1.975-6.887 0-7.352 5.98-13.333 13.333-13.333s13.333 5.98 13.333 13.333-5.98 13.333-13.333 13.333zM22.95 19.338c-0.385-0.193-2.277-1.123-2.63-1.25s-0.61-0.193-0.867 0.193c-0.257 0.385-0.995 1.25-1.22 1.507s-0.45 0.288-0.835 0.095c-0.385-0.193-1.625-0.6-3.097-1.912-1.145-1.022-1.918-2.283-2.143-2.668s-0.025-0.593 0.168-0.785c0.175-0.173 0.385-0.45 0.578-0.675 0.193-0.225 0.257-0.385 0.385-0.642s0.065-0.483-0.033-0.675c-0.095-0.193-0.867-2.088-1.187-2.858-0.312-0.75-0.627-0.648-0.867-0.66s-0.483-0.013-0.74-0.013c-0.257 0-0.675 0.095-1.027 0.483-0.353 0.385-1.348 1.317-1.348 3.21s1.38 3.722 1.573 3.978c0.193 0.257 2.715 4.145 6.577 5.812 0.917 0.395 1.635 0.632 2.193 0.81 0.923 0.293 1.763 0.252 2.427 0.153 0.742-0.112 2.277-0.93 2.597-1.83s0.32-1.67 0.225-1.83c-0.095-0.16-0.353-0.257-0.74-0.45z"></path>
            </svg>
          </a>
        </>
      )}
    </div>
  );
};

export default App;
