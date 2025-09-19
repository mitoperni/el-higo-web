import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';

function SEOManager() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const getCanonicalUrl = () => {
    const path = location.pathname;
    const baseUrl = 'https://elhigogranada.com';

    if (path === '/' || path === '/en') {
      return path === '/en' ? `${baseUrl}/en` : baseUrl;
    }
    return `${baseUrl}${path}`;
  };

  const getAlternateUrls = () => {
    const path = location.pathname;
    const baseUrl = 'https://elhigogranada.com';

    if (path === '/' || path === '/en') {
      return {
        es: baseUrl,
        en: `${baseUrl}/en`
      };
    } else if (path === '/carta' || path === '/en/menu') {
      return {
        es: `${baseUrl}/carta`,
        en: `${baseUrl}/en/menu`
      };
    } else if (path === '/el-patio' || path === '/en/the-patio') {
      return {
        es: `${baseUrl}/el-patio`,
        en: `${baseUrl}/en/the-patio`
      };
    } else if (path === '/como-llegar' || path === '/en/how-to-find-us') {
      return {
        es: `${baseUrl}/como-llegar`,
        en: `${baseUrl}/en/how-to-find-us`
      };
    } else if (path === '/reservas' || path === '/en/reservations') {
      return {
        es: `${baseUrl}/reservas`,
        en: `${baseUrl}/en/reservations`
      };
    } else if (path === '/contacto' || path === '/en/contact') {
      return {
        es: `${baseUrl}/contacto`,
        en: `${baseUrl}/en/contact`
      };
    }

    return { es: `${baseUrl}${path}`, en: `${baseUrl}${path}` };
  };

  const getPageTitle = useCallback(() => {
    const path = location.pathname;
    const baseBrand = "El Higo";

    if (path === '/' || path === '/en') {
      return `${baseBrand} - ${t("hero.title")}`;
    } else if (path === '/carta' || path === '/en/menu') {
      return `${t("menu.title")} - ${baseBrand}`;
    } else if (path === '/el-patio' || path === '/en/the-patio') {
      return `${t("thePatio.title")} - ${baseBrand}`;
    } else if (path === '/como-llegar' || path === '/en/how-to-find-us') {
      return `${t("howToFindUs.title")} - ${baseBrand}`;
    } else if (path === '/reservas' || path === '/en/reservations') {
      return `${t("reservations.title")} - ${baseBrand}`;
    } else if (path === '/opiniones' || path === '/en/reviews') {
      return `${t("reviews.title")} - ${baseBrand}`;
    } else if (path === '/contacto' || path === '/en/contact') {
      return `${t("contact.title")} - ${baseBrand}`;
    } else if (path === '/galeria' || path === '/en/gallery') {
      return `${t("gallery.title")} - ${baseBrand}`;
    }

    return `${baseBrand} - ${t("hero.title")}`;
  }, [location.pathname, t]);

  const getPageDescription = useCallback(() => {
    const path = location.pathname;

    if (path === '/' || path === '/en') {
      return t("hero.subtitle");
    } else if (path === '/carta' || path === '/en/menu') {
      return t("menu.subtitle");
    } else if (path === '/el-patio' || path === '/en/the-patio') {
      return t("thePatio.subtitle");
    } else if (path === '/como-llegar' || path === '/en/how-to-find-us') {
      return t("howToFindUs.subtitle");
    } else if (path === '/reservas' || path === '/en/reservations') {
      return t("reservations.subtitle");
    } else if (path === '/opiniones' || path === '/en/reviews') {
      return t("reviews.subtitle");
    } else if (path === '/contacto' || path === '/en/contact') {
      return t("contact.subtitle");
    } else if (path === '/galeria' || path === '/en/gallery') {
      return t("gallery.subtitle");
    }

    return t("hero.subtitle");
  }, [location.pathname, t]);

  const alternateUrls = getAlternateUrls();

  // Update html lang attribute and title using useEffect
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = getPageTitle();
  }, [i18n.language, location.pathname, t, getPageTitle]);

  return (
    <>
      <meta name="description" content={getPageDescription()} />
      <meta
        name="keywords"
        content="El Higo, restaurante Granada, Albaicín, patio escondido, tapas, vegetariano, vegano, hummus, berenjenas, tajín, hidden restaurant Granada, vegetarian Granada"
      />

      <meta property="og:type" content="restaurant" />
      <meta property="og:title" content={getPageTitle()} />
      <meta property="og:description" content={getPageDescription()} />
      <meta property="og:url" content="https://elhigogranada.com" />
      <meta property="og:site_name" content="El Higo" />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      <meta
        property="og:locale"
        content={i18n.language === "es" ? "es_ES" : "en_US"}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={getPageTitle()}
      />
      <meta name="twitter:description" content={getPageDescription()} />
      <meta
        name="twitter:image"
        content="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />

      <link rel="canonical" href={getCanonicalUrl()} />
      <link rel="alternate" hrefLang="es" href={alternateUrls.es} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.es} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "El Higo",
          description: "Restaurante acogedor en el Albaicín de Granada con tapas, opciones vegetarianas y un encantador patio escondido",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C. Horno del Hoyo 17, Albaicín",
            addressLocality: "Granada",
            postalCode: "18010",
            addressCountry: "ES",
          },
          telephone: "+34858984102",
          url: "https://elhigogranada.com",
          openingHours: ["Tu-Su 12:30-16:30", "Tu-Su 18:30-23:30"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "12:30",
              closes: "16:30"
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "18:30",
              closes: "23:30"
            }
          ],
          servesCuisine: ["Spanish", "Mediterranean", "Vegetarian", "Vegan", "Tapas"],
          priceRange: "$$",
          hasMenu: "https://elhigogranada.com/carta",
          acceptsReservations: "True",
          image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          sameAs: [
            "https://www.facebook.com/elhigogranada",
            "https://www.instagram.com/elhigogranada"
          ]
        })}
      </script>
    </>
  );
}

export default SEOManager;