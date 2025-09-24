import { SITE_CONFIG, getBaseUrl, getFullUrl } from '../config/siteConfig';

// Schema.org structured data generator for SEO
export const generateRestaurantSchema = (language = 'es') => {
  const baseUrl = getBaseUrl();
  const { RESTAURANT } = SITE_CONFIG;

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': RESTAURANT.name,
    'description': RESTAURANT.description[language],
    'url': baseUrl,
    'logo': getFullUrl(SITE_CONFIG.SEO.defaultImage),
    'image': getFullUrl(SITE_CONFIG.SEO.defaultImage),
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': RESTAURANT.address.city,
      'addressRegion': RESTAURANT.address.region,
      'addressCountry': RESTAURANT.address.country,
      'streetAddress': RESTAURANT.address.street,
      'postalCode': RESTAURANT.address.postalCode
    },
    'telephone': RESTAURANT.contact.phone,
    'email': RESTAURANT.contact.email,
    'servesCuisine': RESTAURANT.business.cuisineTypes[language],
    'priceRange': RESTAURANT.business.priceRange,
    'openingHours': RESTAURANT.business.openingHours,
    'openingHoursSpecification': RESTAURANT.business.openingHoursSpecification,
    'acceptsReservations': RESTAURANT.business.acceptsReservations,
    'hasMenu': getFullUrl(language === 'es' ? '/carta' : '/en/menu'),
    'sameAs': [
      RESTAURANT.social.instagram,
      RESTAURANT.social.facebook
    ]
  };
};

export const generateBreadcrumbSchema = (currentPath, language = 'es') => {
  const baseUrl = getBaseUrl();

  const breadcrumbData = {
    es: {
      '/': [{ name: 'Inicio', url: baseUrl }],
      '/carta': [
        { name: 'Inicio', url: baseUrl },
        { name: 'Carta', url: `${baseUrl}/carta` }
      ],
      '/el-patio': [
        { name: 'Inicio', url: baseUrl },
        { name: 'El Patio', url: `${baseUrl}/el-patio` }
      ],
      '/como-llegar': [
        { name: 'Inicio', url: baseUrl },
        { name: 'Cómo Llegar', url: `${baseUrl}/como-llegar` }
      ],
      '/reservas': [
        { name: 'Inicio', url: baseUrl },
        { name: 'Reservas', url: `${baseUrl}/reservas` }
      ],
      '/contacto': [
        { name: 'Inicio', url: baseUrl },
        { name: 'Contacto', url: `${baseUrl}/contacto` }
      ]
    },
    en: {
      '/en': [{ name: 'Home', url: `${baseUrl}/en` }],
      '/en/menu': [
        { name: 'Home', url: `${baseUrl}/en` },
        { name: 'Menu', url: `${baseUrl}/en/menu` }
      ],
      '/en/the-patio': [
        { name: 'Home', url: `${baseUrl}/en` },
        { name: 'The Patio', url: `${baseUrl}/en/the-patio` }
      ],
      '/en/how-to-find-us': [
        { name: 'Home', url: `${baseUrl}/en` },
        { name: 'How to Find Us', url: `${baseUrl}/en/how-to-find-us` }
      ],
      '/en/reservations': [
        { name: 'Home', url: `${baseUrl}/en` },
        { name: 'Reservations', url: `${baseUrl}/en/reservations` }
      ],
      '/en/contact': [
        { name: 'Home', url: `${baseUrl}/en` },
        { name: 'Contact', url: `${baseUrl}/en/contact` }
      ]
    }
  };

  const breadcrumbs = breadcrumbData[language][currentPath] || breadcrumbData[language][language === 'es' ? '/' : '/en'];

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null; // No breadcrumb for single-level pages
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
};