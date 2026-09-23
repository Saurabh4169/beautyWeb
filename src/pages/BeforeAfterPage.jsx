import React from 'react';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import { NewsletterCta } from '../components/sections/NewsletterCta';

export const BeforeAfterPage = () => {
  return (
    <div className="before-after-page">
      <BeforeAfterSection />
      <NewsletterCta />
    </div>
  );
};
