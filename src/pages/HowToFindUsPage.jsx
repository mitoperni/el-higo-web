import { useTranslation } from 'react-i18next';

const HowToFindUsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-leaf to-terracotta">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-display font-bold mb-4">
              {t('howToFindUs.title')}
            </h1>
            <p className="text-xl font-body">
              {t('howToFindUs.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Directions */}
            <div>
              <h2 className="text-3xl font-display font-bold text-dark-text mb-6">
                {t('contact.address')}
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-terracotta mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-body text-dark-text font-semibold">
                      {t('howToFindUs.address')}
                    </p>
                    <p className="font-body text-dark-text">
                      {t('howToFindUs.city')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-terracotta mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-body text-dark-text font-semibold">
                      {t('contact.phone')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-dark-text mb-4">
                  Instrucciones / Instructions
                </h3>
                <p className="font-body text-dark-text leading-relaxed">
                  {t('howToFindUs.directions')}
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.0987654321098!2d-3.5916667846813145!3d37.17617997989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb1b1234567%3A0x1234567890abcdef!2sC.%20Horno%20del%20Hoyo%2C%2017%2C%2018010%20Granada%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="El Higo Location"
                  className="w-full h-96"
                ></iframe>
              </div>
              
              <div className="mt-6 text-center">
                <a
                  href="https://goo.gl/maps/example-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-terracotta text-white px-6 py-3 rounded-lg font-body font-semibold hover:bg-green-leaf transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Abrir en Google Maps / Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Tips */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-dark-text text-center mb-12">
              Consejos para llegar / Getting Here Tips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-terracotta text-white p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0V7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-dark-text">
                    A pie / Walking
                  </h3>
                </div>
                <p className="font-body text-dark-text">
                  Desde Plaza Nueva: 10 minutos caminando por el Albaicín. 
                  From Plaza Nueva: 10-minute walk through the Albaicín.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-leaf text-white p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-4a2 2 0 00-2-2H8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-dark-text">
                    Transporte público / Public Transport
                  </h3>
                </div>
                <p className="font-body text-dark-text">
                  Minibus C31, C32 - Parada "Albaicín". 
                  Minibus C31, C32 - Stop "Albaicín".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToFindUsPage;