import React from 'react';
import { ProductsSection } from '../components/sections/ProductsSection';
import { NewsletterCta } from '../components/sections/NewsletterCta';

export const ApothecaryPage = () => {
  return (
    <div className="apothecary-page">
      <ProductsSection />
      <NewsletterCta />
    </div>
  );
};
