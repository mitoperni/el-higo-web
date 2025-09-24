// Global site configuration
// Change this when moving from development to production

export const SITE_CONFIG = {
  // Domain configuration
  DOMAIN: {
    DEVELOPMENT: 'https://el-higo-web.vercel.app',
    PRODUCTION: 'https://elhigogranada.com'
  },

  // Current environment domain
  BASE_URL: 'https://el-higo-web.vercel.app', // Change this to PRODUCTION when going live

  // Restaurant information
  RESTAURANT: {
    name: 'El Higo',
    description: {
      es: 'Un rincón escondido en el Albaicín de Granada. Descubre sabores auténticos en un ambiente único.',
      en: 'A hidden corner in Granada\'s Albaicín. Discover authentic flavors in a unique atmosphere.'
    },
    address: {
      street: 'C. Horno del Hoyo 17, Albaicín',
      city: 'Granada',
      postalCode: '18010',
      country: 'ES',
      region: 'Andalucía'
    },
    contact: {
      phone: '+34858984102',
      email: 'info@elhigogranada.com'
    },
    business: {
      openingHours: ['Tu-Su 12:30-16:30', 'Tu-Su 18:30-23:30'],
      openingHoursSpecification: [
        {
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '12:30',
          closes: '16:30'
        },
        {
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '18:30',
          closes: '23:30'
        }
      ],
      cuisineTypes: {
        es: ['Mediterránea', 'Vegetariana', 'Vegana', 'Tapas'],
        en: ['Mediterranean', 'Vegetarian', 'Vegan', 'Tapas']
      },
      priceRange: '€€',
      acceptsReservations: true
    },
    social: {
      facebook: 'https://www.facebook.com/elhigogranada',
      instagram: 'https://www.instagram.com/elhigogranada'
    }
  },

  // SEO Configuration
  SEO: {
    defaultImage: '/og_image.png',
    keywords: 'El Higo, restaurante Granada, Albaicín, patio escondido, tapas, vegetariano, vegano, hummus, berenjenas, tajín, hidden restaurant Granada, vegetarian Granada',
    twitter: {
      site: '@elhigogranada',
      creator: '@elhigogranada'
    }
  }
};

// Helper function to get current base URL
export const getBaseUrl = () => SITE_CONFIG.BASE_URL;

// Helper function to get full URL
export const getFullUrl = (path = '') => {
  const baseUrl = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};