import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generateRestaurantSchema, generateBreadcrumbSchema } from '../../utils/schemaGenerator';
import { SITE_CONFIG, getBaseUrl, getFullUrl } from '../../config/siteConfig';

function SEOHead({ language, title, description }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define route mappings between languages
  const routeMappings = {
    '/': '/en',
    '/carta': '/en/menu',
    '/el-patio': '/en/the-patio',
    '/como-llegar': '/en/how-to-find-us',
    '/reservas': '/en/reservations',
    '/contacto': '/en/contact',
    '/en': '/',
    '/en/menu': '/carta',
    '/en/the-patio': '/el-patio',
    '/en/how-to-find-us': '/como-llegar',
    '/en/reservations': '/reservas',
    '/en/contact': '/contacto'
  };

  const getAlternateUrl = (currentPath) => {
    return routeMappings[currentPath] || '';
  };

  useEffect(() => {
    const alternateUrl = getAlternateUrl(currentPath);
    const baseUrl = getBaseUrl();

    // Determine hreflang URLs
    const spanishUrl = language === 'es' ? currentPath : alternateUrl;
    const englishUrl = language === 'en' ? currentPath : alternateUrl;
    const defaultUrl = spanishUrl; // Spanish is default

    // Set document title and meta tags
    if (title) {
      document.title = title;
    }

    // Set language attribute
    document.documentElement.lang = language;

    // Clean up existing SEO elements
    const cleanupSelectors = [
      'link[hreflang]',
      'link[rel="canonical"]',
      'meta[name="description"]',
      'script[type="application/ld+json"]'
    ];

    cleanupSelectors.forEach(selector => {
      const existing = document.querySelectorAll(selector);
      existing.forEach(el => el.remove());
    });

    // Add meta description
    if (description) {
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Add meta keywords (remove existing first)
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (existingKeywords) {
      existingKeywords.remove();
    }
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = SITE_CONFIG.SEO.keywords;
    document.head.appendChild(metaKeywords);

    // Add canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `${baseUrl}${currentPath}`;
    document.head.appendChild(canonical);

    // Add hreflang links
    const createHreflangLink = (hreflang, href) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = `${baseUrl}${href}`;
      document.head.appendChild(link);
    };

    if (spanishUrl) {
      createHreflangLink('es', spanishUrl);
    }
    if (englishUrl) {
      createHreflangLink('en', englishUrl);
    }
    if (defaultUrl) {
      createHreflangLink('x-default', defaultUrl);
    }

    // Enhanced Open Graph tags
    const setMetaProperty = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.property = property;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const setMetaName = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    if (title) {
      setMetaProperty('og:title', title);
      setMetaName('twitter:title', title);
    }
    if (description) {
      setMetaProperty('og:description', description);
      setMetaName('twitter:description', description);
    }

    // Enhanced Open Graph properties
    setMetaProperty('og:url', `${baseUrl}${currentPath}`);
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:site_name', SITE_CONFIG.RESTAURANT.name);
    setMetaProperty('og:locale', language === 'es' ? 'es_ES' : 'en_US');
    setMetaProperty('og:image', getFullUrl(SITE_CONFIG.SEO.defaultImage));
    setMetaProperty('og:image:width', '1200');
    setMetaProperty('og:image:height', '630');
    setMetaProperty('og:image:type', 'image/png');

    // Enhanced Twitter Card
    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:image', getFullUrl(SITE_CONFIG.SEO.defaultImage));
    setMetaName('twitter:site', SITE_CONFIG.SEO.twitter.site);

    if (alternateUrl) {
      setMetaProperty('og:locale:alternate', language === 'es' ? 'en_US' : 'es_ES');
    }

    // Add Structured Data (Schema.org)

    // Restaurant Schema (only on home pages)
    if (currentPath === '/' || currentPath === '/en') {
      const restaurantSchema = generateRestaurantSchema(language);
      const restaurantScript = document.createElement('script');
      restaurantScript.type = 'application/ld+json';
      restaurantScript.textContent = JSON.stringify(restaurantSchema, null, 2);
      document.head.appendChild(restaurantScript);
    }

    // Breadcrumb Schema (for sub-pages)
    const breadcrumbSchema = generateBreadcrumbSchema(currentPath, language);
    if (breadcrumbSchema) {
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema, null, 2);
      document.head.appendChild(breadcrumbScript);
    }

    // Cleanup function
    return () => {
      // Optional: cleanup if needed when component unmounts
    };
  }, [currentPath, language, title, description]);

  return null; // This component only manages head tags
}

export default SEOHead;