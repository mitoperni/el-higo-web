import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t('contact.title')}
          </h1>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text max-w-2xl mx-auto font-body">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-dark-text mb-6">
                Información de contacto / Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-terracotta mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-display font-semibold text-dark-text">Dirección / Address</h3>
                    <p className="text-dark-text font-body">
                      {t('contact.address')}<br />
                      {t('contact.city')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-terracotta mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-display font-semibold text-dark-text">Teléfono / Phone</h3>
                    <p className="text-dark-text font-body">
                      <a href="tel:+34858984102" className="hover:text-terracotta transition-colors">
                        {t('contact.phone')}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-terracotta mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                  </svg>
                  <div>
                    <h3 className="font-display font-semibold text-dark-text">WhatsApp</h3>
                    <p className="text-dark-text font-body">
                      <a href={`https://wa.me/34858984102`} className="hover:text-terracotta transition-colors">
                        {t('contact.phone')}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-terracotta mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-display font-semibold text-dark-text">{t('contact.hours')}</h3>
                    <div className="text-dark-text font-body">
                      <p>{t('contact.hoursDetail')}</p>
                      <p className="text-sm text-terracotta mt-1">{t('contact.closed')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-dark-text mb-6">
                {t('contact.socialMedia')}
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/elhigogranada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/elhigogranada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988 6.62 0 11.987-5.367 11.987-11.988C23.004 5.367 17.637.001 12.017.001zm4.624 7.179c.018.168.018.336.018.505 0 5.154-3.924 11.09-11.09 11.09-2.204 0-4.251-.645-5.975-1.75a7.869 7.869 0 005.803-1.625 3.928 3.928 0 01-3.665-2.723c.618.118 1.25.094 1.848-.072a3.922 3.922 0 01-3.145-3.845v-.05c.576.32 1.234.513 1.932.536a3.928 3.928 0 01-1.214-5.238 11.141 11.141 0 008.087 4.098 3.928 3.928 0 016.688-3.579 7.846 7.846 0 002.49-.95 3.938 3.938 0 01-1.724 2.17 7.837 7.837 0 002.255-.618 8.433 8.433 0 01-1.96 2.033z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-cream rounded-lg p-8">
              <h2 className="text-2xl font-display font-bold text-dark-text mb-6">
                Ubicación / Location
              </h2>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.0987654321098!2d-3.5916667846813145!3d37.17617997989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb1b1234567%3A0x1234567890abcdef!2sC.%20Horno%20del%20Hoyo%2C%2017%2C%2018010%20Granada%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="El Higo Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://goo.gl/maps/example-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-terracotta hover:text-green-leaf transition-colors duration-300 font-body"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Abrir en Google Maps / Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-terracotta text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              ¿Vienes a visitarnos? / Coming to visit us?
            </h3>
            <p className="font-body mb-6">
              {t('reservations.note')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/34858984102?text=${encodeURIComponent(
                  t('reservations.note')
                )}`}
                className="inline-flex items-center bg-white text-terracotta hover:bg-cream font-body font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
                {t('reservations.whatsapp')}
              </a>
              <a
                href="tel:+34858984102"
                className="inline-flex items-center bg-green-leaf text-white hover:bg-terracotta font-body font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar / Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;