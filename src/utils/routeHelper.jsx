import { Route } from 'react-router-dom';
import LanguageWrapper from '../components/routing/LanguageWrapper';
import { routeConfig } from './routeConfig';

// Helper function to generate routes for both languages
export const generateRoutes = () => {
  const routes = [];

  routeConfig.forEach((config) => {
    // Spanish route
    routes.push(
      <Route
        key={`es-${config.path.es}`}
        path={config.path.es}
        element={
          <LanguageWrapper
            language="es"
            title={config.seo.es.title}
            description={config.seo.es.description}
          >
            <config.component />
          </LanguageWrapper>
        }
      />
    );

    // English route
    routes.push(
      <Route
        key={`en-${config.path.en}`}
        path={config.path.en}
        element={
          <LanguageWrapper
            language="en"
            title={config.seo.en.title}
            description={config.seo.en.description}
          >
            <config.component />
          </LanguageWrapper>
        }
      />
    );
  });

  return routes;
};