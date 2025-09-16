import { useTranslation } from 'react-i18next';
import LanguageLink from '../ui/LanguageLink';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-display font-bold text-terracotta mb-4">{t('footer.brand')}</h3>
            <p className="text-cream mb-4 font-body leading-relaxed">
              Un rincón escondido en el Albaicín de Granada donde cada plato cuenta una historia y cada visita es una experiencia única.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/elhigogranada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/elhigogranada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-2 rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm4.624 7.179c.018.168.018.336.018.505 0 5.154-3.924 11.09-11.09 11.09-2.204 0-4.251-.645-5.975-1.75a7.869 7.869 0 005.803-1.625 3.928 3.928 0 01-3.665-2.723c.618.118 1.25.094 1.848-.072a3.922 3.922 0 01-3.145-3.845v-.05c.576.32 1.234.513 1.932.536a3.928 3.928 0 01-1.214-5.238 11.141 11.141 0 008.087 4.098 3.928 3.928 0 016.688-3.579 7.846 7.846 0 002.49-.95 3.938 3.938 0 01-1.724 2.17 7.837 7.837 0 002.255-.618 8.433 8.433 0 01-1.96 2.033z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">Navegación / Navigation</h4>
            <ul className="space-y-2 font-body">
              <li>
                <LanguageLink
                  to="/"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.home')}
                </LanguageLink>
              </li>
              <li>
                <LanguageLink
                  to="/carta"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.menu')}
                </LanguageLink>
              </li>
              <li>
                <LanguageLink
                  to="/el-patio"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.thePatio')}
                </LanguageLink>
              </li>
              <li>
                <LanguageLink
                  to="/como-llegar"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.howToFindUs')}
                </LanguageLink>
              </li>
              <li>
                <LanguageLink
                  to="/reservas"
                  className="text-cream hover:text-terracotta transition-colors duration-300"
                >
                  {t('navbar.reservations')}
                </LanguageLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">Contacto / Contact</h4>
            <div className="space-y-2 text-cream font-body">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">
                  {t('contact.address')}, {t('contact.city')}
                </span>
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+34858984102" className="hover:text-terracotta transition-colors text-sm">
                  {t('contact.phone')}
                </a>
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
                <a href={`https://wa.me/34858984102`} className="hover:text-terracotta transition-colors text-sm">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">{t('contact.hours')}</h4>
            <div className="text-cream space-y-1 font-body">
              <p className="font-medium text-sm">{t('footer.hours')}</p>
              <p className="text-terracotta mt-2 text-sm">{t('contact.closed')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-leaf mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-cream text-sm mb-4 md:mb-0 font-body">
              <p>© 2024 {t('footer.brand')} - {t('footer.location')}</p>
              <p className="text-xs mt-1 opacity-75">{t('footer.disclaimer')}</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-cream font-body">
              <p className="text-xs">
                🤖 Generated with <a href="https://claude.ai/code" className="hover:text-terracotta transition-colors" target="_blank" rel="noopener noreferrer">Claude Code</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;