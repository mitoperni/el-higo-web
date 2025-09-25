import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t, i18n } = useTranslation();

  const getHomeLink = () => {
    return i18n.language === 'en' ? '/en' : '/';
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-terracotta mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-charcoal mb-6">
            {t('notFound.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {t('notFound.description')}
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to={getHomeLink()}
            className="inline-block bg-terracotta text-cream px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('notFound.homeButton')}
          </Link>

          <div className="mt-8 text-sm text-gray-500">
            <p>{t('notFound.suggestion')}</p>
          </div>
        </div>

        <div className="mt-12 opacity-60">
          <svg
            className="w-24 h-24 mx-auto text-terracotta"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;