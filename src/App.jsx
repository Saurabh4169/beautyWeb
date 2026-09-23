import React from 'react';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import { TopAnnouncementBar } from './components/layout/TopAnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { CartDrawer } from './components/layout/CartDrawer';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatsBar } from './components/sections/StatsBar';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { InclusiveCareBanner } from './components/sections/InclusiveCareBanner';
import { ClinicalTechnologySection } from './components/sections/ClinicalTechnologySection';
import { BeforeAfterSection } from './components/sections/BeforeAfterSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { LocationMapSection } from './components/sections/LocationMapSection';
import { NewsletterCta } from './components/sections/NewsletterCta';
import { QuickViewModal } from './components/ui/QuickViewModal';
import { BookingModal } from './components/ui/BookingModal';
import { Toast } from './components/ui/Toast';

export function App() {
  return (
    <CartProvider>
      <BookingProvider>
        <div className="beauty-oasis-app">
          {/* Top Announcement Bar */}
          <TopAnnouncementBar />

          {/* Sticky Navigation Header */}
          <Navbar />

          {/* Main Website Flow */}
          <main>
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Clinical Stats Strip */}
            <StatsBar />

            {/* 3. Bespoke Treatments Grid */}
            <TreatmentsSection />

            {/* 4. Inclusive & Neuro-Divergent Skincare Banner */}
            <InclusiveCareBanner />

            {/* 5. Clinical Technology Dark Section */}
            <ClinicalTechnologySection />

            {/* 6. Before & After Interactive Transformations */}
            <BeforeAfterSection />

            {/* 7. Most Popular Products / Medical-Grade Skin Care */}
            <ProductsSection />

            {/* 8. Testimonials & Client Reviews */}
            <TestimonialsSection />

            {/* 9. Frequently Asked Questions */}
            <FaqSection />

            {/* 10. Dynamic Interactive Map & Locations */}
            <LocationMapSection />

            {/* 11. VIP Newsletter & Journal CTA */}
            <NewsletterCta />
          </main>

          {/* Footer & Accreditations */}
          <Footer />

          {/* Interactive Drawers & Modals */}
          <CartDrawer />
          <QuickViewModal />
          <BookingModal />
          <Toast />
        </div>
      </BookingProvider>
    </CartProvider>
  );
}

export default App;
