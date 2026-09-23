import React from 'react';
import { FaqSection } from '../components/sections/FaqSection';
import { NewsletterCta } from '../components/sections/NewsletterCta';

export const FaqPage = () => {
  return (
    <div className="faq-page">
      <FaqSection />
      <NewsletterCta />
    </div>
  );
};
