import React from 'react';
import { ClinicalTechnologySection } from '../components/sections/ClinicalTechnologySection';
import { NewsletterCta } from '../components/sections/NewsletterCta';

export const TechnologyPage = () => {
  return (
    <div className="technology-page">
      <ClinicalTechnologySection />
      <NewsletterCta />
    </div>
  );
};
