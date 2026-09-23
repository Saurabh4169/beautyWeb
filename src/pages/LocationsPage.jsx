import React from 'react';
import { LocationMapSection } from '../components/sections/LocationMapSection';
import { NewsletterCta } from '../components/sections/NewsletterCta';

export const LocationsPage = () => {
  return (
    <div className="locations-page">
      <LocationMapSection />
      <NewsletterCta />
    </div>
  );
};
