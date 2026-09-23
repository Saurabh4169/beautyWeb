import React from 'react';
import { InclusiveCareBanner } from '../components/sections/InclusiveCareBanner';
import { NewsletterCta } from '../components/sections/NewsletterCta';

export const InclusiveCarePage = () => {
  return (
    <div className="inclusive-care-page">
      <InclusiveCareBanner />
      <NewsletterCta />
    </div>
  );
};
