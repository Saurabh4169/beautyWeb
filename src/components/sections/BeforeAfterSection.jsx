import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { beforeAfterCases } from '../../data/beforeAfterData';

export const BeforeAfterSection = () => {
  return (
    <section id="before-after" className="section-padding" style={{ background: "#fdf8f3" }}>
      <div className="container">
        <SectionHeader
          badge="CLINICAL RESULTS GALLERY"
          title="See The Difference — Real Clinical Transformations"
          subtitle="Documented visual evidence of targeted treatment protocols photographed under standard cross-polarized clinical illumination."
        />

        <BeforeAfterSlider cases={beforeAfterCases} />
      </div>
    </section>
  );
};
