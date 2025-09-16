import { useTranslation } from 'react-i18next';
import LanguageLink from '../ui/LanguageLink';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cream max-w-2xl mx-auto leading-relaxed font-body">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`https://wa.me/34858984102?text=${encodeURIComponent(
              t('reservations.note')
            )}`}
            className="bg-terracotta hover:bg-green-leaf text-white font-body font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('hero.cta')}
          </a>
          <LanguageLink
            to="/carta"
            className="border-2 border-cream text-cream hover:bg-cream hover:text-dark-text font-body font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('navbar.menu')}
          </LanguageLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;