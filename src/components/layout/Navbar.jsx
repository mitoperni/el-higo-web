import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import LanguageLink from "../ui/LanguageLink";
import { useLanguageNavigation } from "../../hooks/useLanguageNavigation";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const { switchLanguage } = useLanguageNavigation();
  const languageDropdownRef = useRef(null);

  const languages = [
    {
      code: 'es',
      name: t('languageSelector.spanish.name'),
      flag: '🇪🇸',
      nativeName: t('languageSelector.spanish.name'),
      description: t('languageSelector.spanish.description')
    },
    {
      code: 'en',
      name: t('languageSelector.english.name'),
      flag: '🇺🇸',
      nativeName: t('languageSelector.english.name'),
      description: t('languageSelector.english.description')
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language);
  const otherLanguage = languages.find(lang => lang.code !== i18n.language);

  const toggleLanguage = (langCode) => {
    switchLanguage(langCode);
    setIsLanguageOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getCurrentBasePath = () => {
    const path = location.pathname;
    if (path === "/" || path === "/en") return "/";
    if (path === "/carta" || path === "/en/menu") return "/carta";
    if (path === "/el-patio" || path === "/en/the-patio") return "/el-patio";
    if (path === "/como-llegar" || path === "/en/how-to-find-us") return "/como-llegar";
    if (path === "/reservas" || path === "/en/reservations") return "/reservas";
    if (path === "/contacto" || path === "/en/contact") return "/contacto";
    return path;
  };

  return (
    <nav className="bg-cream shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <LanguageLink
              to="/"
              className="text-2xl font-display font-bold text-terracotta hover:text-green-leaf transition-colors"
            >
              El Higo
            </LanguageLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <LanguageLink
                to="/carta"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/carta"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.menu")}
              </LanguageLink>
              <LanguageLink
                to="/el-patio"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/el-patio"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.thePatio")}
              </LanguageLink>
              <LanguageLink
                to="/como-llegar"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/como-llegar"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.howToFindUs")}
              </LanguageLink>
              <LanguageLink
                to="/reservas"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/reservas"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.reservations")}
              </LanguageLink>
              <LanguageLink
                to="/contacto"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  getCurrentBasePath() === "/contacto"
                    ? "bg-terracotta/20 text-terracotta"
                    : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
                }`}
              >
                {t("navbar.contact")}
              </LanguageLink>
            </div>
          </div>

          <div className="hidden md:flex items-center relative" ref={languageDropdownRef}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-3 bg-gradient-to-r from-white to-cream border-2 border-terracotta/30 text-terracotta hover:border-terracotta hover:shadow-lg px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group backdrop-blur-sm"
              aria-label={t('languageSelector.ariaLabel')}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg transform group-hover:scale-110 transition-transform duration-200">
                  {currentLanguage?.flag}
                </span>
                <span className="font-semibold">{currentLanguage?.nativeName}</span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-terracotta/20 overflow-hidden z-50 transform transition-all duration-200 origin-top-right animate-in fade-in slide-in-from-top-2">
                <div className="p-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => toggleLanguage(language.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                        language.code === i18n.language
                          ? 'bg-terracotta/10 text-terracotta border border-terracotta/20'
                          : 'hover:bg-terracotta/5 text-dark-text hover:text-terracotta'
                      }`}
                      title={language.description}
                    >
                      <span className="text-xl transform group-hover:scale-110 transition-transform duration-200">
                        {language.flag}
                      </span>
                      <div className="flex-1">
                        <div className="font-semibold">{language.nativeName}</div>
                        <div className="text-xs opacity-70">{language.description}</div>
                      </div>
                      {language.code === i18n.language && (
                        <svg className="w-4 h-4 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-text hover:text-terracotta hover:bg-terracotta/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-terracotta"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream shadow-lg">
            <LanguageLink
              to="/carta"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/carta"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.menu")}
            </LanguageLink>
            <LanguageLink
              to="/el-patio"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/el-patio"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.thePatio")}
            </LanguageLink>
            <LanguageLink
              to="/como-llegar"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/como-llegar"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.howToFindUs")}
            </LanguageLink>
            <LanguageLink
              to="/reservas"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/reservas"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.reservations")}
            </LanguageLink>
            <LanguageLink
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                getCurrentBasePath() === "/contacto"
                  ? "bg-terracotta/20 text-terracotta"
                  : "text-dark-text hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {t("navbar.contact")}
            </LanguageLink>
            <div className="px-3 py-2">
              <button
                onClick={() => {toggleLanguage(otherLanguage?.code); setIsMenuOpen(false);}}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group bg-white border border-terracotta/20 text-terracotta hover:bg-terracotta/5 hover:border-terracotta/40"
              >
                <span className="text-xl transform group-hover:scale-110 transition-transform duration-200">
                  {otherLanguage?.flag}
                </span>
                <div className="flex-1">
                  <div className="font-semibold">{otherLanguage?.nativeName}</div>
                  <div className="text-xs text-dark-text/60">
                    {otherLanguage?.description}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
