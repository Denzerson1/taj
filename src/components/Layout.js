import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileActionBar from './MobileActionBar';
import ReservationWidget from './ReservationWidget';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen overflow-x-clip">
        <Suspense fallback={<div className="min-h-screen bg-ink" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileActionBar />
      <ReservationWidget />
    </>
  );
}
