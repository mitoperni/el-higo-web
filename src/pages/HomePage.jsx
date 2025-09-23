import { useState } from 'react';
import Hero from '../components/features/Hero';
import Gallery from '../components/features/Gallery';
import Reviews from '../components/features/Reviews';
import Spinner from '../components/ui/Spinner';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!imageLoaded) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-cream">
          <Spinner size="large" className="text-terracotta" />
        </div>
        <div style={{ display: 'none' }}>
          <Hero onImageLoad={setImageLoaded} />
        </div>
      </>
    );
  }

  return (
    <>
      <Hero />
      {/* <Gallery /> */}
      <Reviews />
    </>
  );
};

export default HomePage;