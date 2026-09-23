import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useBooking } from '../../context/BookingContext';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { openBookingModal } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Treatments", href: "#treatments" },
    { name: "Inclusive Care", href: "#inclusive-care" },
    { name: "Technology", href: "#technology" },
    { name: "Before & After", href: "#before-after" },
    { name: "Apothecary", href: "#products" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Locations", href: "#locations" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 900,
        background: isScrolled ? "rgba(255, 255, 255, 0.97)" : "#ffffff",
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        borderBottom: "1px solid #e7eeea",
        transition: "all 0.3s ease",
        boxShadow: isScrolled ? "0 4px 25px rgba(16, 38, 31, 0.07)" : "none"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1420px",
          margin: "0 auto",
          padding: "0 clamp(16px, 3vw, 36px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "82px",
          gap: "16px"
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            flexShrink: 0
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #163a31 0%, #0d251f 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 4px 12px rgba(22, 58, 49, 0.25)"
            }}
          >
            <Sparkles size={20} color="#34d399" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-serif-display)",
                fontSize: "1.42rem",
                fontWeight: 700,
                letterSpacing: "0.03em",
                color: "#163a31",
                lineHeight: 1.1,
                whiteSpace: "nowrap"
              }}
            >
              BEAUTY OASIS
            </div>
            <div
              style={{
                fontSize: "8.5px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6b8a80",
                fontWeight: 700,
                whiteSpace: "nowrap"
              }}
            >
              Aesthetics & Wellness Clinic
            </div>
          </div>
        </a>

        {/* Desktop Navigation Bar */}
        <nav
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "clamp(10px, 1.4vw, 24px)",
            margin: "0 auto",
            padding: "0 10px"
          }}
        >
          {navLinks.map((link) => {
            const isHovered = hoveredLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: isHovered ? "#10b981" : "#2d423a",
                  letterSpacing: "0.01em",
                  position: "relative",
                  padding: "8px 4px",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  transition: "color 0.2s ease"
                }}
              >
                {link.name}
                {/* Subtle indicator bar */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "2px",
                    left: "50%",
                    transform: isHovered ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
                    width: "80%",
                    height: "2px",
                    background: "#10b981",
                    borderRadius: "2px",
                    transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Bag & Consultation Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0
          }}
        >
          {/* Shopping Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="View shopping bag"
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "#f0f6f3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#163a31",
              border: "1px solid #dce8e2",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e2ede8";
              e.currentTarget.style.borderColor = "#bed9cd";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#f0f6f3";
              e.currentTarget.style.borderColor = "#dce8e2";
            }}
          >
            <ShoppingBag size={18} />
            {totalItemsCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  background: "#10b981",
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: 700,
                  width: "19px",
                  height: "19px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(16, 185, 129, 0.4)",
                  border: "2px solid #ffffff"
                }}
              >
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Book Consultation CTA Button */}
          <div className="desktop-cta">
            <Button
              variant="primary"
              size="md"
              icon={<ArrowUpRight size={15} />}
              onClick={() => openBookingModal()}
              style={{
                padding: "11px 22px",
                fontSize: "13.5px",
                whiteSpace: "nowrap"
              }}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "#f0f6f3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#163a31",
              border: "1px solid #dce8e2"
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderBottom: "1px solid #e1ebe6",
            padding: "20px 24px 28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            animation: "fadeIn 0.25s ease",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#163a31",
                padding: "10px 0",
                borderBottom: "1px solid #f2f7f4"
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ paddingTop: "14px" }}>
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .desktop-cta {
            display: block !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-cta {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
