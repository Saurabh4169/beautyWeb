import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useBooking } from '../../context/BookingContext';
import { Button } from '../ui/Button';
import brandLogo from '../../assets/logo.jpeg';

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
          background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid #e2e8f0' : '1px solid #f1f5f9',
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: isScrolled ? '0 4px 20px rgba(15, 41, 66, 0.06)' : 'none',
        }}
      >
        {/* Luminous Blue & Green accent line at very top */}
        <div
          style={{
            height: '2.5px',
            background: 'linear-gradient(90deg, #1e5aa8 0%, #0284c7 35%, #16a34a 70%, #22c55e 100%)',
            opacity: 1,
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
            height: isScrolled ? '72px' : '82px',
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
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'transform 0.25s ease, filter 0.25s ease',
              transform: logoHovered ? 'translateY(-1px) scale(1.02)' : 'none',
              filter: logoHovered ? 'drop-shadow(0 4px 14px rgba(37, 99, 235, 0.22))' : 'none',
            }}
          >
            <img
              src={brandLogo}
              alt="BeautyOasisRx — Renew Your Skin"
              style={{
                height: isScrolled ? '46px' : '54px',
                width: 'auto',
                maxWidth: '220px',
                objectFit: 'contain',
                mixBlendMode: 'multiply',
                transition: 'height 0.3s ease',
                display: 'block',
              }}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(4px, 1vw, 14px)',
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className="nav-link-item"
                style={({ isActive }) => ({
                  position: 'relative',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#1e5aa8' : '#334155',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                })}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {/* Active underline — vibrant blue & green */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '8px',
                        right: '8px',
                        height: '2.5px',
                        background: 'linear-gradient(90deg, #1e5aa8, #16a34a)',
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
              gap: '12px',
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
                background: '#f0f7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e5aa8',
                border: '1px solid #bae6fd',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e0f2fe';
                e.currentTarget.style.borderColor = '#7dd3fc';
                e.currentTarget.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f0f7ff';
                e.currentTarget.style.borderColor = '#bae6fd';
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
                    background: 'linear-gradient(135deg, #1e5aa8, #16a34a)',
                    color: '#ffffff',
                    fontSize: '9.5px',
                    fontWeight: 800,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.4)',
                    border: '2px solid #ffffff',
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
                style={{
                  padding: '11px 22px',
                  fontSize: '13px',
                  whiteSpace: 'nowrap',
                  background: 'linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)',
                  boxShadow: '0 4px 16px rgba(30, 90, 168, 0.3)',
                  border: 'none',
                }}
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
                background: mobileMenuOpen ? '#1e5aa8' : '#f0f7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: mobileMenuOpen ? '#ffffff' : '#1e5aa8',
                border: '1px solid #bae6fd',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
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
              background: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              padding: mobileMenuOpen ? '20px 24px 28px' : '0 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              boxShadow: '0 14px 35px rgba(15, 41, 66, 0.08)',
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
                  color: isActive ? '#1e5aa8' : '#334155',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(37,99,235,0.08)' : 'transparent',
                  borderLeft: isActive ? '3px solid #1e5aa8' : '3px solid transparent',
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
                          width: '7px', height: '7px', borderRadius: '50%',
                          background: 'linear-gradient(135deg, #1e5aa8, #16a34a)',
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <div style={{ paddingTop: '14px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
                style={{
                  background: 'linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)',
                }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        .nav-link-item:hover {
          color: #1e5aa8 !important;
        }
        .nav-link-item:hover > span:last-child {
          transform: scaleX(1) !important;
          opacity: 0.75 !important;
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
