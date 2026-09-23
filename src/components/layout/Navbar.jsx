import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useBooking } from '../../context/BookingContext';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { openBookingModal } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Inclusive Care', path: '/inclusive-care' },
    { name: 'Technology', path: '/technology' },
    { name: 'Before & After', path: '/before-after' },
    { name: 'Apothecary', path: '/apothecary' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Locations', path: '/locations' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          background: isScrolled ? 'rgba(253,248,243,0.96)' : '#fdf8f3',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(44,24,16,0.09)' : '1px solid #ede5da',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: isScrolled ? '0 4px 30px rgba(44,24,16,0.07)' : 'none',
        }}
      >
        {/* Warm amber/terracotta accent line at very top */}
        <div
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #c4622d 30%, #c29b64 60%, transparent 100%)',
            opacity: isScrolled ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        />

        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(16px, 3vw, 36px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '72px' : '80px',
            gap: '12px',
            transition: 'height 0.35s ease',
          }}
        >
          {/* ── Brand Logo ── */}
          <Link
            to="/"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'transform 0.25s ease',
              transform: logoHovered ? 'translateY(-1px)' : 'none',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #3d2314 0%, #2c1810 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: logoHovered
                  ? '0 6px 20px rgba(61,35,20,0.38)'
                  : '0 4px 12px rgba(61,35,20,0.22)',
                transition: 'box-shadow 0.25s ease',
              }}
            >
              <Sparkles size={20} color="#d4784a" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.38rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#3d2314',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                }}
              >
                BEAUTY OASIS
              </div>
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#8b5e3c',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                Aesthetics &amp; Wellness Clinic
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(4px, 1vw, 16px)',
              margin: '0 auto',
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link-item ${isActive ? 'active-nav-link' : ''}`}
                style={({ isActive }) => ({
                  fontSize: 'clamp(11.5px, 0.9vw, 13px)',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#c4622d' : '#5c3520',
                  letterSpacing: '0.01em',
                  position: 'relative',
                  padding: '8px 8px',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'color 0.2s ease',
                })}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {/* Active underline — warm terracotta/gold */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '8px',
                        right: '8px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #c4622d, #c29b64)',
                        borderRadius: '2px',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left center',
                        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ── Right Actions ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
            }}
          >
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View shopping bag"
              className="hover-magnetic"
              style={{
                position: 'relative',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#f8f2eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3d2314',
                border: '1px solid #e4d8cc',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f0e4d6';
                e.currentTarget.style.borderColor = '#d4c0a8';
                e.currentTarget.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8f2eb';
                e.currentTarget.style.borderColor = '#e4d8cc';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ShoppingBag size={18} />
              {totalItemsCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    background: 'linear-gradient(135deg, #c4622d, #a84e22)',
                    color: '#ffffff',
                    fontSize: '9.5px',
                    fontWeight: 800,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(196,98,45,0.5)',
                    border: '2px solid #fdf8f3',
                  }}
                >
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Book CTA — desktop only */}
            <div className="desktop-cta">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowUpRight size={15} />}
                onClick={openBookingModal}
                style={{ padding: '11px 22px', fontSize: '13px', whiteSpace: 'nowrap' }}
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="mobile-menu-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: mobileMenuOpen ? '#3d2314' : '#f8f2eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: mobileMenuOpen ? '#fdf8f3' : '#3d2314',
                border: '1px solid #e4d8cc',
                transition: 'all 0.25s ease',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          style={{
            maxHeight: mobileMenuOpen ? '680px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div
            style={{
              background: '#fdf8f3',
              borderTop: '1px solid #ede5da',
              padding: mobileMenuOpen ? '20px 24px 28px' : '0 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              boxShadow: '0 14px 35px rgba(44,24,16,0.07)',
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '14.5px',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#c4622d' : '#3d2314',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(196,98,45,0.07)' : 'transparent',
                  borderLeft: isActive ? '2.5px solid #c4622d' : '2.5px solid transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                })}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          background: 'linear-gradient(135deg, #c4622d, #c29b64)',
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <div style={{ paddingTop: '14px', borderTop: '1px solid #ede5da', marginTop: '4px' }}>
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        .nav-link-item:hover {
          color: #c4622d !important;
        }
        .nav-link-item:hover > span:last-child {
          transform: scaleX(1) !important;
          opacity: 0.65 !important;
        }
        @media (min-width: 1060px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .desktop-cta { display: block !important; }
        }
        @media (max-width: 1059px) {
          .desktop-cta { display: none !important; }
        }
      `}</style>
    </>
  );
};
