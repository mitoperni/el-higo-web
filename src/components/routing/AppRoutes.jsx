import { Routes } from 'react-router-dom';
import { generateRoutes } from '../../utils/routeHelper';

function AppRoutes() {
  return (
    <Routes>
      {generateRoutes()}
    </Routes>
  );
}

export default AppRoutes;