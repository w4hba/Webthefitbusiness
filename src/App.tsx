import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Spotlight from './components/Spotlight';
import Services from './components/Services';
import BookCall from './components/BookCall';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SupplementsPage from './components/SupplementsPage';

export default function App() {
  const [showSupplements, setShowSupplements] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <Hero onSupplementsClick={() => setShowSupplements(true)} />
      <About />
      <Spotlight />
      <Services />
      <BookCall />
      <Blog onSupplementsClick={() => setShowSupplements(true)} />
      <Newsletter />
      <Footer onSupplementsClick={() => setShowSupplements(true)} />
      
      {showSupplements && (
        <SupplementsPage onClose={() => setShowSupplements(false)} />
      )}
    </div>
  );
}