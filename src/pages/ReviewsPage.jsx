import React from 'react';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { NewsletterCta } from '../components/sections/NewsletterCta';

export const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <TestimonialsSection />
      <NewsletterCta />
    </div>
  );
};
