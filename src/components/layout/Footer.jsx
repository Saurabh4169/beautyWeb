import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Navigation, Globe, Share2, Play, ArrowUpRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

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
        background: 'linear-gradient(180deg, #1a0e08 0%, #120904 100%)',
        color: '#dfc8a4',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(32px, 5vw, 52px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top gold gradient border */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(194,155,100,0.5) 25%, rgba(196,98,45,0.4) 50%, rgba(194,155,100,0.5) 75%, transparent 100%)',
        }}
      />

      {/* Ambient orbs */}
      <div
        className="animate-orb-1"
        style={{
          position: 'absolute', bottom: '-20%', left: '-10%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,98,45,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }}
      />
      <div
        className="animate-orb-2"
        style={{
          position: 'absolute', top: '-15%', right: '-8%',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194,155,100,0.07) 0%, transparent 70%)',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #3d2314, #2c1810)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(196,98,45,0.3)',
                }}
              >
                <Sparkles size={18} color="#d4784a" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.3rem', color: '#fdf8f3', fontWeight: 700, lineHeight: 1.1 }}>
                  Beauty Oasis Rx
                </div>
                <div style={{ fontSize: '8px', letterSpacing: '0.2em', color: '#d4784a', textTransform: 'uppercase', fontWeight: 700 }}>
                  Renew Your Skin
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', color: '#b89e8c', lineHeight: 1.65, marginBottom: '20px', maxWidth: '240px' }}>
              Doctor-led clinical aesthetics delivering personalized medical-grade skin transformations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '0.85rem', color: '#dfc8a4' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                <MapPin size={15} color="#c4622d" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>333 East Bethany 110-A, Allen, Texas 75002</span>
              </div>

              <a href="tel:+12145007825" style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#fdf8f3', fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#d4784a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fdf8f3')}
              >
                <Phone size={14} color="#c4622d" />
                (214) 500-7825
              </a>

              <a href="mailto:infobeautyoasisrx@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#dfc8a4', fontSize: '0.82rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#d4784a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#dfc8a4')}
              >
                <Mail size={14} color="#c4622d" />
                infobeautyoasisrx@gmail.com
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=333+East+Bethany+Dr+Suite+110-A+Allen+Texas+75002"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#d4784a', fontWeight: 600, fontSize: '12.5px',
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
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#dfc8a4',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(196,98,45,0.18)';
                    e.currentTarget.style.borderColor = 'rgba(196,98,45,0.35)';
                    e.currentTarget.style.color = '#d4784a';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#dfc8a4';
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
                color: '#fdf8f3', fontSize: '0.95rem',
                fontFamily: 'var(--font-serif-display)',
                marginBottom: '20px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              <span style={{ display: 'inline-block', width: '18px', height: '1.5px', background: 'linear-gradient(90deg, #c4622d, transparent)' }} />
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{ color: '#b89e8c', transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '0px' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d4784a';
                      e.currentTarget.style.gap = '5px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#b89e8c';
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
                color: '#fdf8f3', fontSize: '0.95rem',
                fontFamily: 'var(--font-serif-display)',
                marginBottom: '20px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              <span style={{ display: 'inline-block', width: '18px', height: '1.5px', background: 'linear-gradient(90deg, #c29b64, transparent)' }} />
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
                    color: '#dfc8a4',
                    display: 'flex', alignItems: 'center', gap: '5px',
                  }}
                >
                  <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#c4622d', display: 'inline-block', flexShrink: 0 }} />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Info & Booking */}
          <div>
            <h4
              style={{
                color: '#fdf8f3', fontSize: '0.95rem',
                fontFamily: 'var(--font-serif-display)',
                marginBottom: '20px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              <span style={{ display: 'inline-block', width: '18px', height: '1.5px', background: 'linear-gradient(90deg, #c4622d, transparent)' }} />
              Information &amp; Booking
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', marginBottom: '24px' }}>
              {infoLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{ color: '#b89e8c', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#d4784a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#b89e8c')}
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
                background: 'linear-gradient(135deg, #c4622d 0%, #a84e22 100%)',
                color: '#ffffff',
                padding: '11px 24px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '13px',
                boxShadow: '0 4px 18px rgba(196,98,45,0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,98,45,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(196,98,45,0.35)';
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
                background: 'rgba(196,98,45,0.08)',
                borderRadius: '12px',
                border: '1px solid rgba(196,98,45,0.2)',
                fontSize: '12px',
                color: '#dfc8a4',
                lineHeight: 1.6,
              }}
            >
              <div style={{ fontWeight: 700, color: '#d4784a', marginBottom: '4px', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.08em' }}>Clinic Hours</div>
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
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), rgba(194,155,100,0.2), rgba(255,255,255,0.07), transparent)',
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
            color: '#a68a78',
          }}
        >
          <div>
            © {new Date().getFullYear()}{' '}
            <span style={{ color: '#dfc8a4' }}>Beauty Oasis Rx.</span>{' '}
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
                style={{ color: '#a68a78', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#d4784a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a68a78')}
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
