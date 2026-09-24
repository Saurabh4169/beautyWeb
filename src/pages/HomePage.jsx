import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Cpu, Sparkle, Star, Layers, MapPin, ArrowUpRight } from 'lucide-react';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsBar } from '../components/sections/StatsBar';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import { NewsletterCta } from '../components/sections/NewsletterCta';
import { Badge } from '../components/ui/Badge';
import { useBooking } from '../context/BookingContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const HomePage = () => {
  const { openBookingModal } = useBooking();
  useScrollReveal();

  const highlights = [
    {
      badge: 'CLINICAL EXCELLENCE',
      title: 'Bespoke Aesthetic Treatments',
      desc: 'Doctor-led dermal therapies, RF microneedling, and cellular biostimulation tailored to your skin signature.',
      link: '/treatments',
      linkText: 'Explore Treatments',
      icon: <Sparkles size={22} color="#1e5aa8" />,
      accent: '#1e5aa8',
      delay: 'stagger-1',
    },
    {
      badge: 'INCLUSIVE WELLNESS',
      title: 'Sensory-Calm Suite Care',
      desc: 'Specialized low-stimulation skincare journeys with dimmable cove lighting and unhurried pacing.',
      link: '/inclusive-care',
      linkText: 'Discover Sensory Care',
      icon: <Heart size={22} color="#16a34a" />,
      accent: '#16a34a',
      delay: 'stagger-2',
    },
    {
      badge: 'CLINICAL SCIENCE',
      title: 'Advanced Technology Suite',
      desc: 'Tri-Fractional RF, Picosecond photo-acoustic laser, and vortex hydro-infusion systems.',
      link: '/technology',
      linkText: 'View Technology',
      icon: <Cpu size={22} color="#0284c7" />,
      accent: '#0284c7',
      delay: 'stagger-3',
    },
    {
      badge: 'DOCUMENTED RESULTS',
      title: 'Clinical Transformations',
      desc: 'Standard polarized before & after photography documenting acne clearance and structural rejuvenation.',
      link: '/before-after',
      linkText: 'View Case Gallery',
      icon: <Layers size={22} color="#16a34a" />,
      accent: '#16a34a',
      delay: 'stagger-4',
    },
    {
      badge: 'PRESCRIPTION CARE',
      title: 'Medical Skincare Apothecary',
      desc: 'Potent at-home formulations to protect, accelerate, and maintain your clinic outcomes.',
      link: '/apothecary',
      linkText: 'Shop Apothecary',
      icon: <Sparkle size={22} color="#1e5aa8" />,
      accent: '#1e5aa8',
      delay: 'stagger-5',
    },
    {
      badge: 'FLAGSHIP SUITES',
      title: 'Visit Our Clinics',
      desc: 'Find our Allen, Texas clinic (333 East Bethany Dr). Get direct GPS directions and parking guidance.',
      link: '/locations',
      linkText: 'View Locations & Map',
      icon: <MapPin size={22} color="#16a34a" />,
      accent: '#16a34a',
      delay: 'stagger-6',
    },
  ];

  return (
    <div className="home-page">
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Animated Stats Strip */}
      <StatsBar />

      {/* 3. Curated Overview Highlights */}
      <section className="section-padding" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        {/* Background subtle sky orb */}
        <div
          style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div
            className="reveal"
            style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}
          >
            <Badge variant="emerald">WELCOME TO BEAUTY OASIS RX</Badge>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.9rem)',
                color: '#0f2942',
                fontFamily: 'var(--font-serif-display)',
                margin: '14px 0 16px 0',
                lineHeight: 1.12,
              }}
            >
              Where Medical Science Meets{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #1e5aa8, #0ea5e9, #16a34a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Serene Wellness
              </span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.68 }}>
              Explore our specialized departments, doctor-administered clinical protocols, sensory accommodations, and pharmaceutical at-home formulations.
            </p>
            {/* Decorative divider */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <span className="divider-emerald" />
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
              gap: '22px',
              marginBottom: '52px',
            }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`reveal border-luxury-gradient card-lift ${item.delay}`}
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  border: '1px solid #e2e8f0',
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(15,41,66,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle top accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: '24px', right: '24px',
                    height: '2.5px',
                    background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                    borderRadius: '0 0 2px 2px',
                  }}
                />

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '46px', height: '46px',
                        borderRadius: '14px',
                        background: `${item.accent}14`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: `1px solid ${item.accent}25`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      style={{
                        fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em',
                        color: item.accent,
                        background: `${item.accent}12`,
                        padding: '4px 10px', borderRadius: '9999px',
                        textTransform: 'uppercase',
                        border: `1px solid ${item.accent}20`,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.3rem', color: '#0f2942',
                      fontFamily: 'var(--font-serif-display)',
                      marginBottom: '10px', lineHeight: 1.22,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.65, marginBottom: '22px' }}>
                    {item.desc}
                  </p>
                </div>

                <Link
                  to={item.link}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    color: item.accent, fontWeight: 700, fontSize: '13px',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '16px',
                    transition: 'gap 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '6px';
                  }}
                >
                  <span>{item.linkText}</span>
                  <ArrowRight size={14} color="currentColor" />
                </Link>
              </div>
            ))}
          </div>

          {/* Doctor Consultation Callout */}
          <div
            className="reveal"
            style={{
              background: 'linear-gradient(135deg, #0b2545 0%, #1e5aa8 100%)',
              borderRadius: '24px',
              padding: 'clamp(28px, 4vw, 48px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(11,37,69,0.2)',
            }}
          >
            {/* Background shimmer */}
            <div
              style={{
                position: 'absolute', top: '-40%', right: '-10%',
                width: '360px', height: '360px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />
            {/* Bright decorative line top */}
            <div
              style={{
                position: 'absolute', top: 0, left: '40px', right: '40px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={17} color="#4ade80" />
                <span
                  style={{
                    fontSize: '11px', textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: '#bae6fd', fontWeight: 700,
                  }}
                >
                  Board-Certified &amp; GMC Registered Clinicians
                </span>
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                  fontFamily: 'var(--font-serif-display)',
                  color: '#ffffff', margin: 0, lineHeight: 1.2,
                }}
              >
                Ready to begin your personalized aesthetic journey?
              </h3>
              <p style={{ color: '#e0f2fe', fontSize: '0.9rem', marginTop: '8px', lineHeight: 1.5 }}>
                Book a comprehensive clinical consultation at our Allen, Texas clinic.
              </p>
            </div>

            <button
              onClick={openBookingModal}
              className="btn-luxury"
              style={{
                background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '14px',
                boxShadow: '0 6px 24px rgba(22,163,74,0.4)',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                position: 'relative',
                zIndex: 1,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(22,163,74,0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(22,163,74,0.4)';
              }}
            >
              <span>Book Doctor Consultation</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Real Clinical Before & After Transformation Slider */}
      <BeforeAfterSection />

      {/* 5. VIP Newsletter CTA */}
      <NewsletterCta />
    </div>
  );
};
