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
    { label: 'Skin', color: '#c4622d' },
    { label: 'Body', color: '#c29b64' },
    { label: 'Wellness', color: '#8b5e3c' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(155deg, #fdf8f3 0%, #faf3eb 40%, #f5ece2 100%)',
        paddingTop: 'clamp(52px, 7vw, 88px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Orbs */}
      <div
        className="animate-orb-1"
        style={{
          position: 'absolute', top: '-15%', right: '5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,98,45,0.12) 0%, rgba(194,155,100,0.08) 55%, transparent 75%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }}
      />
      <div
        className="animate-orb-2"
        style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '460px', height: '460px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194,155,100,0.12) 0%, rgba(196,98,45,0.06) 60%, transparent 75%)',
          filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
        }}
      />
      {/* Decorative grid pattern */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(44,24,16,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(44,24,16,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* ── Luxury Beauty Girl Background Layer (Transparent & Visible Across Section) ── */}
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
            opacity: 0.58,
            filter: 'contrast(106%) brightness(102%) saturate(102%)',
          }}
        />

        {/* Translucent Warm Luxury Wash — protects text contrast while highlighting the woman and beauty product */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to right, rgba(253,248,243,0.88) 0%, rgba(253,248,243,0.72) 40%, rgba(253,248,243,0.28) 72%, rgba(253,248,243,0.14) 100%),
              linear-gradient(to top, rgba(253,248,243,0.6) 0%, transparent 20%),
              linear-gradient(to bottom, rgba(253,248,243,0.6) 0%, transparent 18%)
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
                  fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, rgba(253,240,232,0.95), rgba(252,247,237,0.95))',
                  color: '#8b5e3c',
                  border: '1px solid rgba(196,98,45,0.3)',
                  boxShadow: '0 2px 14px rgba(196,98,45,0.12)',
                }}
              >
                <Sparkles size={12} color="#c4622d" />
                Clinical Excellence · Medical Grade Aesthetics
              </span>

              {/* Live indicator */}
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '5px 12px', borderRadius: '9999px',
                  fontSize: '10px', fontWeight: 700, color: '#fdf8f3',
                  background: '#3d2314',
                  letterSpacing: '0.06em',
                }}
              >
                <span
                  style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#c4622d',
                    boxShadow: '0 0 6px #c4622d',
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
                color: 'var(--color-primary-dark)',
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
                <span className="hero-word-hover hero-word-highlight">Wellness,</span>
              </span>
              <br />
              <span className="hero-headline-line-3" data-cursor="Oasis">
                <span
                  className="hero-oasis-shimmer hero-word-hover"
                  style={{
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 400,
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
                color: '#6b4c38',
                lineHeight: 1.72,
                maxWidth: '530px',
                marginBottom: '36px',
              }}
            >
              At Beauty Oasis, skincare is rooted in medical science. We craft bespoke clinical aesthetic treatments and personalized care tailored precisely to your unique dermal signature and longevity goals.
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
                    border: activeTab === i ? `1.5px solid ${tab.color}` : '1.5px solid #e4d8cc',
                    background: activeTab === i ? `${tab.color}18` : 'transparent',
                    color: activeTab === i ? tab.color : '#8b5e3c',
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
              >
                Book Consultation
              </Button>

              <Link to="/treatments">
                <Button variant="outline" size="lg" icon={<ArrowUpRight size={17} />} data-cursor="Explore">
                  Explore Treatments
                </Button>
              </Link>
            </div>

            {/* Trust Strip */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                flexWrap: 'wrap', fontSize: '12px', color: '#6b4c38', fontWeight: 600,
              }}
            >
              {[
                'Doctor-Led Clinic',
                '12,000+ Five-Star Treatments',
                'GMC Registered',
              ].map((text, i) => (
                <React.Fragment key={text}>
                  {i > 0 && <span style={{ color: '#d4c5b9', fontWeight: 400 }}>·</span>}
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <CheckCircle2 size={14} color="#c4622d" />
                    {text}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── Right Column: AI Girl Video Visual ── */}
          <div style={{ position: 'relative', width: '100%' }}>
            <BeautyTechHeroVisual activeTabIndex={activeTab} onTabChange={setActiveTab} />

            {/* Patient Review Card — floats gracefully over transparent background */}
            <div
              className="hero-review-card"
              style={{
                marginTop: '22px',
                zIndex: 7,
                background: 'rgba(255,255,255,0.88)',
                backdropFilter: 'blur(20px)',
                padding: '16px 22px',
                borderRadius: '20px',
                boxShadow: '0 16px 44px rgba(44,24,16,0.08), 0 0 20px rgba(196,98,45,0.06)',
                border: '1.5px solid rgba(255,255,255,0.95)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                {/* Avatar cluster */}
                <div style={{ display: 'flex' }}>
                  {['#c4622d', '#c29b64', '#3d2314'].map((c, i) => (
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
                    <Star key={i} size={11} fill="#c29b64" color="#c29b64" />
                  ))}
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#3d2314' }}>
                  Verified Patient
                </span>
              </div>

              <p style={{ fontSize: '12px', color: '#5c3520', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '4px' }}>
                "Noticeable transformation after just one session. The sensory-calm room was pure bliss."
              </p>

              <div style={{ fontSize: '10px', color: '#8b5e3c', fontWeight: 700 }}>
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
          0%, 100% { box-shadow: 0 0 18px rgba(196,98,45,0.3); }
          50%       { box-shadow: 0 0 35px rgba(196,98,45,0.6); }
        }
        @keyframes goldPulse {
          0%, 100% { box-shadow: 0 8px 24px rgba(44,24,16,0.13); }
          50%       { box-shadow: 0 8px 28px rgba(194,155,100,0.35); }
        }
      `}</style>
    </section>
  );
};
