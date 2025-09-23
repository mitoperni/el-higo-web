import { useState } from 'react';
import Menu from '../components/features/Menu';
import Spinner from '../components/ui/Spinner';

const MenuPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  if (!imagesLoaded) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-cream pt-16">
          <Spinner size="large" className="text-terracotta" />
        </div>
        <div style={{ display: 'none' }}>
          <Menu onImagesLoad={setImagesLoaded} />
        </div>
      </>
    );
  }

  return (
    <div className="pt-16">
      <Menu />
    </div>
  );
};

export default MenuPage;