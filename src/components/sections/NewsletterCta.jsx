import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight, Star, Shield } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const NewsletterCta = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [focused, setFocused] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast('Welcome to the Beauty Oasis Journal! Your 15% code is OASIS15.');
  };

  return (
    <section
      style={{
        background: 'linear-gradient(155deg, #1a0e08 0%, #241409 40%, #2c1810 70%, #1a0e08 100%)',
        color: '#ffffff',
        padding: 'clamp(64px, 10vw, 110px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient orbs */}
      <div
        className="animate-orb-1"
        style={{
          position: 'absolute', top: '-30%', left: '-10%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,98,45,0.14) 0%, transparent 70%)',
          filter: 'blur(70px)', pointerEvents: 'none',
        }}
      />
      <div
        className="animate-orb-2"
        style={{
          position: 'absolute', bottom: '-20%', right: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194,155,100,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }}
      />

      {/* Decorative top gold border */}
      <div
        style={{
          position: 'absolute', top: 0, left: '10%', right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(194,155,100,0.5), rgba(196,98,45,0.4), rgba(194,155,100,0.5), transparent)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '740px', margin: '0 auto', textAlign: 'center' }}>

          {/* Top Badge */}
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'rgba(196,98,45,0.16)',
              border: '1px solid rgba(196,98,45,0.35)',
              padding: '6px 18px', borderRadius: '9999px',
              fontSize: '10.5px', fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#dfc8a4', marginBottom: '24px',
            }}
          >
            <Sparkles size={12} color="#c4622d" />
            The Clinical Journal
          </div>

          {/* Stars trust line */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginBottom: '16px' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="#c29b64" color="#c29b64" />
            ))}
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: '#ffffff',
              fontFamily: 'var(--font-serif-display)',
              lineHeight: 1.12,
              marginBottom: '18px',
              letterSpacing: '-0.02em',
            }}
          >
            Elevate Your{' '}
            <span
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #d4784a 0%, #c29b64 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Skincare Knowledge
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1rem',
              color: '#b89e8c',
              lineHeight: 1.68,
              marginBottom: '36px',
              maxWidth: '560px',
              margin: '0 auto 36px auto',
            }}
          >
            Subscribe to receive evidence-based aesthetic research, physician advice, private event invitations, and{' '}
            <strong style={{ color: '#dfc8a4' }}>15% off</strong>{' '}
            your first medical appointment or apothecary purchase.
          </p>

          {subscribed ? (
            <div
              style={{
                background: 'rgba(196,98,45,0.16)',
                border: '1px solid rgba(196,98,45,0.4)',
                padding: '20px 28px',
                borderRadius: '18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                color: '#ffffff',
                backdropFilter: 'blur(10px)',
                animation: 'fadeInScale 0.5s ease both',
              }}
            >
              <CheckCircle2 size={24} color="#c4622d" />
              <span style={{ fontSize: '1rem' }}>
                Thank you! Your promo code{' '}
                <strong style={{ color: '#dfc8a4', letterSpacing: '0.06em' }}>OASIS15</strong>{' '}
                is now active.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{
                display: 'flex',
                gap: '10px',
                maxWidth: '560px',
                margin: '0 auto 24px auto',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  flex: '1 1 280px',
                  position: 'relative',
                  borderRadius: '9999px',
                  padding: '1px',
                  background: focused
                    ? 'linear-gradient(135deg, rgba(196,98,45,0.7), rgba(194,155,100,0.5))'
                    : 'rgba(255,255,255,0.12)',
                  transition: 'background 0.3s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    background: 'rgba(44, 24, 16, 0.88)',
                    borderRadius: '9999px',
                    padding: '0 20px',
                  }}
                >
                  <Mail size={16} color="#dfc8a4" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                      flex: 1,
                      padding: '14px 0',
                      background: 'transparent',
                      color: '#ffffff',
                      fontSize: '14px',
                      border: 'none',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-luxury"
                style={{
                  background: 'linear-gradient(135deg, #c4622d 0%, #a84e22 100%)',
                  color: '#ffffff',
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '14px',
                  boxShadow: '0 6px 20px rgba(196,98,45,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(196,98,45,0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(196,98,45,0.4)';
                }}
              >
                <span>Subscribe</span>
                <ArrowRight size={15} />
              </button>
            </form>
          )}

          {/* Privacy note */}
          {!subscribed && (
            <div
              style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px',
                fontSize: '11.5px', color: '#8b5e3c',
              }}
            >
              <Shield size={13} color="#c4622d" />
              <span>Your data is 100% private. Unsubscribe anytime.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
