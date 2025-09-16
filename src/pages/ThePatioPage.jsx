import { useTranslation } from 'react-i18next';

const ThePatioPage = () => {
  const { t } = useTranslation();

  const patioImages = [
    { 
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center',
      alt: 'El Higo Patio 1'
    },
    { 
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center',
      alt: 'El Higo Patio 2'
    },
    { 
      src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&crop=center',
      alt: 'El Higo Patio 3'
    },
    { 
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
      alt: 'El Higo Patio 4'
    },
    { 
      src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&h=600&fit=crop&crop=center',
      alt: 'El Higo Patio 5'
    },
    { 
      src: 'https://images.unsplash.com/photo-1552566669-54c581bc7b31?w=800&h=600&fit=crop&crop=center',
      alt: 'El Higo Patio 6'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-terracotta to-green-leaf">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-display font-bold mb-4">
              {t('thePatio.title')}
            </h1>
            <p className="text-xl font-body">
              {t('thePatio.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-dark-text font-body leading-relaxed">
              {t('thePatio.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patioImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-terracotta text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            {t('hero.cta')}
          </h2>
          <a
            href={`https://wa.me/34858984102?text=${encodeURIComponent(
              t('reservations.note')
            )}`}
            className="inline-block bg-white text-terracotta px-8 py-3 rounded-lg font-body font-semibold hover:bg-cream transition-colors duration-300"
          >
            {t('reservations.whatsapp')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ThePatioPage;