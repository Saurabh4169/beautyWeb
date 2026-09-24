import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Navigation, Globe, Share2, Play, ArrowUpRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import brandLogo from '../../assets/logo.jpeg';

export const Footer = () => {
  const { openBookingModal } = useBooking();

  const areasWeServe = [
    'Allen', 'Melissa', 'Anna', 'Plano',
    'Frisco', 'Princeton', 'Lucas', 'Richardson',
    'McKinney', 'Van Alstyne',
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bespoke Treatments', path: '/treatments' },
    { name: 'Inclusive Sensory Care', path: '/inclusive-care' },
    { name: 'Clinical Technology', path: '/technology' },
    { name: 'Before & After Results', path: '/before-after' },
    { name: 'Skincare Apothecary', path: '/apothecary' },
    { name: 'Patient Reviews', path: '/reviews' },
    { name: 'Clinic Locations & Map', path: '/locations' },
    { name: 'Frequently Asked Questions', path: '/faq' },
  ];

  const infoLinks = [
    { name: 'Clinical FAQ & Policies', path: '/faq' },
    { name: 'Directions & Parking', path: '/locations' },
    { name: 'Client Ratings & Feedback', path: '/reviews' },
    { name: 'Doctor Diagnostic Scans', path: '/treatments' },
  ];

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #091e36 0%, #061526 100%)',
        color: '#e2e8f0',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(32px, 5vw, 52px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top cyan/emerald gradient border */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.6) 25%, rgba(34,197,94,0.6) 50%, rgba(56,189,248,0.6) 75%, transparent 100%)',
        }}
      />

      {/* Ambient orbs */}
      <div
        className="animate-orb-1"
        style={{
          position: 'absolute', bottom: '-20%', left: '-10%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }}
      />
      <div
        className="animate-orb-2"
        style={{
          position: 'absolute', top: '-15%', right: '-8%',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%)',
          filter: 'blur(55px)', pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(28px, 4vw, 48px)',
            marginBottom: 'clamp(40px, 6vw, 72px)',
          }}
        >
          {/* Col 1: Brand & Contact */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '18px' }}>
              <div
                style={{
                  background: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  boxShadow: '0 6px 22px rgba(0,0,0,0.35)',
                  border: '1px solid rgba(56,189,248,0.4)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(0,0,0,0.35)';
                }}
              >
                <img
                  src={brandLogo}
                  alt="BeautyOasisRx — Renew Your Skin"
                  style={{
                    height: '42px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </Link>

            <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '20px', maxWidth: '240px' }}>
              Doctor-led clinical aesthetics delivering personalized medical-grade skin transformations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '0.85rem', color: '#e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                <MapPin size={15} color="#38bdf8" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>333 East Bethany 110-A, Allen, Texas 75002</span>
              </div>

              <a href="tel:+12145007825" style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#ffffff', fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                <Phone size={14} color="#38bdf8" />
                (214) 500-7825
              </a>

              <a href="mailto:infobeautyoasisrx@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#bae6fd', fontSize: '0.82rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#bae6fd')}
              >
                <Mail size={14} color="#38bdf8" />
                infobeautyoasisrx@gmail.com
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=333+East+Bethany+Dr+Suite+110-A+Allen+Texas+75002"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4ade80', fontWeight: 600, fontSize: '12.5px',
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '8px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '5px')}
              >
                <Navigation size={13} />
                Get Directions
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
              {[
                { Icon: Globe, href: '#', label: 'Website' },
                { Icon: Share2, href: '#', label: 'Social' },
                { Icon: Play, href: '#', label: 'Video' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px', height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#e2e8f0',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(56,189,248,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)';
                    e.currentTarget.style.color = '#38bdf8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4
              style={{
                color: '#ffffff', fontSize: '0.95rem',
                fontFamily: 'var(--font-serif-display)',
                marginBottom: '20px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              <span style={{ display: 'inline-block', width: '18px', height: '2px', background: 'linear-gradient(90deg, #38bdf8, transparent)' }} />
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{ color: '#94a3b8', transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '0px' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#38bdf8';
                      e.currentTarget.style.gap = '5px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.gap = '0px';
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Areas We Serve */}
          <div>
            <h4
              style={{
                color: '#ffffff', fontSize: '0.95rem',
                fontFamily: 'var(--font-serif-display)',
                marginBottom: '20px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              <span style={{ display: 'inline-block', width: '18px', height: '2px', background: 'linear-gradient(90deg, #4ade80, transparent)' }} />
              Areas We Serve
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '7px 12px',
                fontSize: '0.83rem',
              }}
            >
              {areasWeServe.map((area) => (
                <span
                  key={area}
                  style={{
                    color: '#cbd5e1',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#38bdf8', display: 'inline-block', flexShrink: 0 }} />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Info & Booking */}
          <div>
            <h4
              style={{
                color: '#ffffff', fontSize: '0.95rem',
                fontFamily: 'var(--font-serif-display)',
                marginBottom: '20px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              <span style={{ display: 'inline-block', width: '18px', height: '2px', background: 'linear-gradient(90deg, #38bdf8, transparent)' }} />
              Information &amp; Booking
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', marginBottom: '24px' }}>
              {infoLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={openBookingModal}
              className="btn-luxury"
              style={{
                background: 'linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)',
                color: '#ffffff',
                padding: '11px 24px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '13px',
                boxShadow: '0 4px 18px rgba(30,90,168,0.4)',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,90,168,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(30,90,168,0.4)';
              }}
            >
              Book Clinical Visit
              <ArrowUpRight size={14} />
            </button>

            {/* Opening hours */}
            <div
              style={{
                marginTop: '20px',
                padding: '14px 16px',
                background: 'rgba(30,90,168,0.12)',
                borderRadius: '12px',
                border: '1px solid rgba(56,189,248,0.25)',
                fontSize: '12px',
                color: '#e2e8f0',
                lineHeight: 1.6,
              }}
            >
              <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '4px', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em' }}>Clinic Hours</div>
              <div>Mon–Fri: 9:00 AM – 7:00 PM</div>
              <div>Saturday: 10:00 AM – 5:00 PM</div>
              <div>Sunday: By Appointment Only</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), rgba(56,189,248,0.3), rgba(255,255,255,0.08), transparent)',
            marginBottom: 'clamp(20px, 3vw, 32px)',
          }}
        />

        {/* Bottom Legal Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '11.5px',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()}{' '}
            <span style={{ color: '#bae6fd' }}>Beauty Oasis Rx.</span>{' '}
            All rights reserved. Registered Medical Aesthetics Clinic.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            {[
              { label: 'Privacy Policy', path: '/faq' },
              { label: 'Terms of Service', path: '/faq' },
              { label: 'Medical Disclaimer', path: '/faq' },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                style={{ color: '#64748b', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
