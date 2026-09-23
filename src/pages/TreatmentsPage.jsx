import React from 'react';
import { TreatmentsSection } from '../components/sections/TreatmentsSection';
import { NewsletterCta } from '../components/sections/NewsletterCta';

export const TreatmentsPage = () => {
  return (
    <div className="treatments-page">
      <TreatmentsSection />
      <NewsletterCta />
    </div>
  );
};
