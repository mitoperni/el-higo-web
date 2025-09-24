import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import ThePatioPage from '../pages/ThePatioPage';
import HowToFindUsPage from '../pages/HowToFindUsPage';
import ReservationsPage from '../pages/ReservationsPage';
import ContactPage from '../pages/ContactPage';

// Route configuration with SEO data
export const routeConfig = [
  {
    path: {
      es: '/',
      en: '/en'
    },
    component: HomePage,
    seo: {
      es: {
        title: 'El Higo - Restaurante en el Albaicín de Granada',
        description: 'Un rincón escondido en el Albaicín de Granada. Descubre sabores auténticos en un ambiente único.'
      },
      en: {
        title: 'El Higo - Restaurant in Granada\'s Albaicín',
        description: 'A hidden corner in Granada\'s Albaicín. Discover authentic flavors in a unique atmosphere.'
      }
    }
  },
  {
    path: {
      es: '/carta',
      en: '/en/menu'
    },
    component: MenuPage,
    seo: {
      es: {
        title: 'Carta - El Higo Restaurante Granada',
        description: 'Descubre nuestra carta mediterránea con opciones vegetarianas y veganas. Tapas, hummus, berenjenas y más.'
      },
      en: {
        title: 'Our Menu - El Higo Restaurant Granada',
        description: 'Discover our Mediterranean menu with vegetarian and vegan options. Tapas, hummus, eggplant and more.'
      }
    }
  },
  {
    path: {
      es: '/el-patio',
      en: '/en/the-patio'
    },
    component: ThePatioPage,
    seo: {
      es: {
        title: 'El Patio - Espacio Único en el Albaicín',
        description: 'Nuestro patio secreto en el corazón del Albaicín. Un espacio íntimo y auténtico en Granada.'
      },
      en: {
        title: 'The Patio - Unique Space in the Albaicín',
        description: 'Our secret patio in the heart of the Albaicín. An intimate and authentic space in Granada.'
      }
    }
  },
  {
    path: {
      es: '/como-llegar',
      en: '/en/how-to-find-us'
    },
    component: HowToFindUsPage,
    seo: {
      es: {
        title: 'Cómo Llegar - El Higo Albaicín Granada',
        description: 'Encuentra El Higo en el laberinto del Albaicín. Direcciones y consejos para llegar a nuestro restaurante.'
      },
      en: {
        title: 'How to Find Us - El Higo Albaicín Granada',
        description: 'Find El Higo in the Albaicín maze. Directions and tips to reach our restaurant.'
      }
    }
  },
  {
    path: {
      es: '/reservas',
      en: '/en/reservations'
    },
    component: ReservationsPage,
    seo: {
      es: {
        title: 'Reservas - El Higo Restaurante Granada',
        description: 'Reserva tu mesa en El Higo. Garantiza tu lugar en nuestro patio secreto del Albaicín.'
      },
      en: {
        title: 'Reservations - El Higo Restaurant Granada',
        description: 'Book your table at El Higo. Guarantee your place in our secret Albaicín patio.'
      }
    }
  },
  {
    path: {
      es: '/contacto',
      en: '/en/contact'
    },
    component: ContactPage,
    seo: {
      es: {
        title: 'Contacto - El Higo Restaurante Granada',
        description: 'Ponte en contacto con El Higo. Información, consultas y sugerencias. Estamos en el Albaicín.'
      },
      en: {
        title: 'Contact - El Higo Restaurant Granada',
        description: 'Get in touch with El Higo. Information, inquiries and suggestions. We are in the Albaicín.'
      }
    }
  }
];