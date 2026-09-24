import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useBooking } from '../../context/BookingContext';

export const HeroSection = () => {
  const { openBookingModal } = useBooking();

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
            opacity: 1,
            filter: 'contrast(104%) brightness(103%) saturate(106%)',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-main-grid"
          style={{
            maxWidth: '640px',
            alignItems: 'center',
          }}
        >
          {/* ── Main Content Column ── */}
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
                textShadow: '0 2px 12px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.12)',
              }}
            >
              <span className="hero-headline-line-1" data-cursor="Beauty" style={{ color: '#16447e' }}>
                <span className="hero-word-hover">Your</span>{' '}
                <span className="hero-word-hover hero-word-highlight">Beauty,</span>
              </span>
              <br />
              <span className="hero-headline-line-2" data-cursor="Wellness">
                <span className="hero-word-hover" style={{ color: '#16447e' }}>Your</span>{' '}
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

            {/* Subtitle with subtle white border container for perfect visibility */}
            <div
              style={{
                maxWidth: '540px',
                marginBottom: '32px',
                background: 'rgba(255, 255, 255, 0.62)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '14px 20px',
                boxShadow: '0 4px 20px rgba(15, 41, 66, 0.06), 0 1px 2px rgba(255, 255, 255, 0.8) inset',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(0.96rem, 1.3vw, 1.05rem)',
                  color: '#0f2942',
                  fontWeight: 500,
                  lineHeight: 1.72,
                  margin: 0,
                  textShadow: '0 0 1px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.7)',
                }}
              >
                At Beauty Oasis Rx, skincare is rooted in medical science. We craft bespoke clinical aesthetic treatments and personalized care tailored precisely to your unique dermal signature and longevity goals.
              </p>
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
            opacity: 1 !important;
            filter: contrast(104%) brightness(103%) saturate(106%) !important;
            object-position: 68% 25% !important;
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
