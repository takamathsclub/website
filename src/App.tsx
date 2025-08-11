import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const HomePage = lazy(() => import('./pages/Home'));
const ActivitiesPage = lazy(() => import('./pages/Activities'));
const RegistrationPage = lazy(() => import('./pages/Registration'));
const ContactPage = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Suspense fallback={<div className="loading-container"><h1>Chargement...</h1></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accueil" element={<HomePage />} />
            <Route path="/activités" element={<ActivitiesPage />} />
            <Route path="/inscription" element={<RegistrationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
