import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import { TopAnnouncementBar } from './components/layout/TopAnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { CartDrawer } from './components/layout/CartDrawer';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { InclusiveCarePage } from './pages/InclusiveCarePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { ApothecaryPage } from './pages/ApothecaryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { LocationsPage } from './pages/LocationsPage';
import { FaqPage } from './pages/FaqPage';

// Global Modals & Notifications
import { QuickViewModal } from './components/ui/QuickViewModal';
import { BookingModal } from './components/ui/BookingModal';
import { Toast } from './components/ui/Toast';
import { CustomCursor } from './components/ui/CustomCursor';

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <BookingProvider>
          <div className="beauty-oasis-app">
            {/* Custom Luxury Fluid Cursor */}
            <CustomCursor />

            {/* Scroll to top automatically when navigating */}
            <ScrollToTop />

            {/* Top Announcement Bar */}
            <TopAnnouncementBar />

            {/* Sticky Navigation Header with Active Link State */}
            <Navbar />

            {/* Routed Pages */}
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/treatments" element={<TreatmentsPage />} />
                <Route path="/inclusive-care" element={<InclusiveCarePage />} />
                <Route path="/technology" element={<TechnologyPage />} />
                <Route path="/before-after" element={<BeforeAfterPage />} />
                <Route path="/apothecary" element={<ApothecaryPage />} />
                <Route path="/products" element={<ApothecaryPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/faq" element={<FaqPage />} />
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Footer & Accreditations */}
            <Footer />

            {/* Global Interactive Drawers & Modals */}
            <CartDrawer />
            <QuickViewModal />
            <BookingModal />
            <Toast />
          </div>
        </BookingProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
