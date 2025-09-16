import { Routes, Route } from 'react-router-dom';
import LanguageWrapper from './LanguageWrapper';
import HomePage from '../../pages/HomePage';
import MenuPage from '../../pages/MenuPage';
import ThePatioPage from '../../pages/ThePatioPage';
import HowToFindUsPage from '../../pages/HowToFindUsPage';
import ReservationsPage from '../../pages/ReservationsPage';
import ContactPage from '../../pages/ContactPage';

function AppRoutes() {
  return (
    <Routes>
      {/* Spanish routes (default) */}
      <Route path="/" element={
        <LanguageWrapper language="es">
          <HomePage />
        </LanguageWrapper>
      } />
      <Route path="/carta" element={
        <LanguageWrapper language="es">
          <MenuPage />
        </LanguageWrapper>
      } />
      <Route path="/el-patio" element={
        <LanguageWrapper language="es">
          <ThePatioPage />
        </LanguageWrapper>
      } />
      <Route path="/como-llegar" element={
        <LanguageWrapper language="es">
          <HowToFindUsPage />
        </LanguageWrapper>
      } />
      <Route path="/reservas" element={
        <LanguageWrapper language="es">
          <ReservationsPage />
        </LanguageWrapper>
      } />
      <Route path="/contacto" element={
        <LanguageWrapper language="es">
          <ContactPage />
        </LanguageWrapper>
      } />
      
      {/* English routes */}
      <Route path="/en" element={
        <LanguageWrapper language="en">
          <HomePage />
        </LanguageWrapper>
      } />
      <Route path="/en/menu" element={
        <LanguageWrapper language="en">
          <MenuPage />
        </LanguageWrapper>
      } />
      <Route path="/en/the-patio" element={
        <LanguageWrapper language="en">
          <ThePatioPage />
        </LanguageWrapper>
      } />
      <Route path="/en/how-to-find-us" element={
        <LanguageWrapper language="en">
          <HowToFindUsPage />
        </LanguageWrapper>
      } />
      <Route path="/en/reservations" element={
        <LanguageWrapper language="en">
          <ReservationsPage />
        </LanguageWrapper>
      } />
      <Route path="/en/contact" element={
        <LanguageWrapper language="en">
          <ContactPage />
        </LanguageWrapper>
      } />
    </Routes>
  );
}

export default AppRoutes;