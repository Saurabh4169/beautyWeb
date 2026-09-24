import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { BeautyTechHeroVisual } from '../ui/BeautyTechHeroVisual';
import { useBooking } from '../../context/BookingContext';

export const HeroSection = () => {
  const { openBookingModal } = useBooking();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Skin Health', color: '#1e5aa8' },
    { label: 'Body Contouring', color: '#16a34a' },
    { label: 'Sensory Wellness', color: '#0284c7' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(155deg, #f0f7ff 0%, #ffffff 45%, #f0fdf4 100%)',
        paddingTop: 'clamp(52px, 7vw, 88px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Luminous Orbs — Ocean Sky & Spring Mint */}
      <div
        className="animate-orb-1"
        style={{
          position: 'absolute', top: '-15%', right: '5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(56,189,248,0.08) 55%, transparent 75%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }}
      />
      <div
        className="animate-orb-2"
        style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '460px', height: '460px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, rgba(37,99,235,0.06) 60%, transparent 75%)',
          filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
        }}
      />
      {/* Decorative clean grid pattern */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* ── Luxury Beauty Background Layer ── */}
      <div
        className="hero-beauty-girl-bg-container"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/beauty_girl_applying_product.jpg"
          alt="Woman applying luxury skincare cream at Beauty Oasis"
          className="hero-beauty-girl-bg-img"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '68% 28%',
            opacity: 0.52,
            filter: 'contrast(105%) brightness(103%) saturate(104%)',
          }}
        />

        {/* Luminous Light Wash — ensures crisp contrast with pleasant bright backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(248,250,252,0.82) 40%, rgba(240,249,255,0.35) 75%, rgba(255,255,255,0.18) 100%),
              linear-gradient(to top, rgba(255,255,255,0.7) 0%, transparent 25%),
              linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, transparent 20%)
            `,
            pointerEvents: 'none',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(44px, 6vw, 72px)',
            alignItems: 'center',
          }}
        >
          {/* ── Left Column ── */}
          <div>
            {/* Top Pill Badge */}
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '6px 16px', borderRadius: '9999px',
                  fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
                  color: '#15803d',
                  border: '1px solid #bbf7d0',
                  boxShadow: '0 2px 14px rgba(22,163,74,0.12)',
                }}
              >
                <Sparkles size={13} color="#16a34a" />
                Clinical Excellence · Medical Grade Aesthetics
              </span>

              {/* Live indicator */}
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '5px 12px', borderRadius: '9999px',
                  fontSize: '10px', fontWeight: 700, color: '#ffffff',
                  background: '#1e5aa8',
                  letterSpacing: '0.06em',
                }}
              >
                <span
                  style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#4ade80',
                    boxShadow: '0 0 8px #4ade80',
                    animation: 'pulseGlow 2s infinite',
                  }}
                />
                NOW BOOKING
              </span>
            </div>

            {/* Headline with Staggered & Shimmer Animations */}
            <h1
              className="hero-interactive-headline"
              style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
                lineHeight: 1.06,
                color: '#0f2942',
                letterSpacing: '-0.03em',
                marginBottom: '24px',
                fontFamily: 'var(--font-serif-display)',
                cursor: 'pointer',
              }}
            >
              <span className="hero-headline-line-1" data-cursor="Beauty">
                <span className="hero-word-hover">Your</span>{' '}
                <span className="hero-word-hover hero-word-highlight">Beauty,</span>
              </span>
              <br />
              <span className="hero-headline-line-2" data-cursor="Wellness">
                <span className="hero-word-hover">Your</span>{' '}
                <span className="hero-word-hover hero-word-highlight" style={{ color: '#16a34a' }}>Wellness,</span>
              </span>
              <br />
              <span className="hero-headline-line-3" data-cursor="Oasis">
                <span
                  className="hero-oasis-shimmer hero-word-hover"
                  style={{
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 500,
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  Your Oasis.
                  <span className="hero-oasis-underline" />
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(0.96rem, 1.3vw, 1.1rem)',
                color: '#334155',
                lineHeight: 1.72,
                maxWidth: '530px',
                marginBottom: '36px',
              }}
            >
              At Beauty Oasis Rx, skincare is rooted in medical science. We craft bespoke clinical aesthetic treatments and personalized care tailored precisely to your unique dermal signature and longevity goals.
            </p>

            {/* Treatment Category Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    border: activeTab === i ? `1.5px solid ${tab.color}` : '1.5px solid #cbd5e1',
                    background: activeTab === i ? `${tab.color}15` : '#ffffff',
                    color: activeTab === i ? tab.color : '#475569',
                    boxShadow: activeTab === i ? `0 4px 14px ${tab.color}25` : 'none',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '32px',
              }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={17} />}
                onClick={openBookingModal}
                data-cursor="Book"
                style={{
                  background: 'linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)',
                  boxShadow: '0 8px 25px rgba(30, 90, 168, 0.35)',
                  border: 'none',
                }}
              >
                Book Consultation
              </Button>

              <Link to="/treatments">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<ArrowUpRight size={17} />}
                  data-cursor="Explore"
                  style={{
                    borderColor: '#1e5aa8',
                    color: '#1e5aa8',
                    background: '#ffffff',
                  }}
                >
                  Explore Treatments
                </Button>
              </Link>
            </div>

            {/* Trust Strip */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                flexWrap: 'wrap', fontSize: '12px', color: '#475569', fontWeight: 600,
              }}
            >
              {[
                'Doctor-Led Clinic',
                '12,000+ Five-Star Treatments',
                'GMC & Board Certified',
              ].map((text, i) => (
                <React.Fragment key={text}>
                  {i > 0 && <span style={{ color: '#94a3b8', fontWeight: 400 }}>·</span>}
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <CheckCircle2 size={14} color="#16a34a" />
                    {text}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── Right Column: AI Girl Video Visual ── */}
          <div style={{ position: 'relative', width: '100%' }}>
            <BeautyTechHeroVisual activeTabIndex={activeTab} onTabChange={setActiveTab} />

            {/* Patient Review Card */}
            <div
              className="hero-review-card"
              style={{
                marginTop: '22px',
                zIndex: 7,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                padding: '16px 22px',
                borderRadius: '20px',
                boxShadow: '0 16px 44px rgba(15,41,66,0.08), 0 0 20px rgba(37,99,235,0.06)',
                border: '1.5px solid #e2e8f0',
                transition: 'transform 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                {/* Avatar cluster */}
                <div style={{ display: 'flex' }}>
                  {['#1e5aa8', '#16a34a', '#0284c7'].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: '24px', height: '24px', borderRadius: '50%',
                        background: c, border: '2px solid #fff',
                        marginLeft: i > 0 ? '-7px' : '0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '9px', fontWeight: 800, color: '#fff',
                      }}
                    >
                      {['S', 'J', 'M'][i]}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#16a34a" color="#16a34a" />
                  ))}
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#0f2942' }}>
                  Verified Patient
                </span>
              </div>

              <p style={{ fontSize: '12px', color: '#334155', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '4px' }}>
                "Noticeable transformation after just one session. The sensory-calm room was pure bliss."
              </p>

              <div style={{ fontSize: '10px', color: '#1e5aa8', fontWeight: 700 }}>
                — Sarah W. · Clinical Hydrafacial + RF Microneedling
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroBgFloat {
          0% { transform: scale(1); }
          50% { transform: scale(1.025); }
          100% { transform: scale(1); }
        }
        .hero-beauty-girl-bg-img {
          animation: heroBgFloat 16s ease-in-out infinite;
        }
        @media (max-width: 991px) {
          .hero-beauty-girl-bg-img {
            opacity: 0.42 !important;
            object-position: 75% 25% !important;
          }
        }
        @media (min-width: 992px) {
          .hero-main-grid {
            grid-template-columns: 1.12fr 0.88fr !important;
          }
        }
        @media (min-width: 768px) {
          .hero-review-card {
            max-width: 440px;
          }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 18px rgba(37,99,235,0.3); }
          50%       { box-shadow: 0 0 35px rgba(22,163,74,0.5); }
        }
      `}</style>
    </section>
  );
};
