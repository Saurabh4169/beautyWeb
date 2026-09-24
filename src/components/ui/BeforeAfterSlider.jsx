import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Calendar, Layers, ChevronsLeftRight, SplitSquareVertical, Columns, Eye, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Badge } from './Badge';
import { useBooking } from '../../context/BookingContext';

export const BeforeAfterSlider = ({ cases }) => {
  const { openBookingModal } = useBooking();
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'side-by-side' | 'toggle'
  const [toggleState, setToggleState] = useState('after'); // 'before' | 'after' for toggle mode
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const containerRef = useRef(null);
  const currentCase = cases[activeCaseIndex] || cases[0];

  // Calculate slider position from pointer event
  const handlePointerMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
    setHasInteracted(true);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    handlePointerMove(e);
  };

  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (isDragging) {
        handlePointerMove(e);
      }
    };
    const handleGlobalUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('pointermove', handleGlobalMove);
      window.addEventListener('pointerup', handleGlobalUp);
      window.addEventListener('touchmove', handleGlobalMove);
      window.addEventListener('touchend', handleGlobalUp);
    }
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging, handlePointerMove]);

  // Reset slider position when changing cases
  const handleSelectCase = (idx) => {
    setActiveCaseIndex(idx);
    setSliderPosition(50);
  };

  const beforeSrc = currentCase.beforeImage || currentCase.image;
  const afterSrc = currentCase.afterImage || currentCase.image;
  const isSplitComposite = currentCase.isSplitComposite;

  return (
    <div style={{ maxWidth: '1140px', margin: '0 auto', width: '100%' }}>
      {/* ── Case Category Selector Tabs ── */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '24px',
          flexWrap: 'wrap',
        }}
      >
        {cases.map((c, idx) => {
          const isActive = activeCaseIndex === idx;
          return (
            <button
              key={c.id}
              onClick={() => handleSelectCase(idx)}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: isActive ? '#1e5aa8' : '#ffffff',
                color: isActive ? '#ffffff' : '#334155',
                border: isActive ? '1px solid #1e5aa8' : '1px solid #e2e8f0',
                boxShadow: isActive ? '0 6px 20px rgba(30, 90, 168, 0.25)' : '0 2px 6px rgba(15, 41, 66, 0.04)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transform: isActive ? 'scale(1.02)' : 'none',
              }}
            >
              {c.isVerifiedCase && (
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: isActive ? '#4ade80' : '#16a34a',
                    display: 'inline-block',
                  }}
                />
              )}
              <span>{c.category}</span>
              {idx === 0 && (
                <span
                  style={{
                    fontSize: '9.5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '2px 7px',
                    borderRadius: '6px',
                    background: isActive ? 'rgba(255,255,255,0.25)' : '#dcfce7',
                    color: isActive ? '#ffffff' : '#15803d',
                    fontWeight: 800,
                  }}
                >
                  Verified Patient
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Main Comparison Showcase Card ── */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 'clamp(20px, 3.5vw, 28px)',
          border: '1px solid #e2e8f0',
          padding: 'clamp(18px, 3.5vw, 36px)',
          boxShadow: '0 16px 50px rgba(15, 41, 66, 0.07)',
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '20px',
            marginBottom: '22px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <Badge variant="emerald">
                {currentCase.badgeText || `CLINICAL STUDY #${activeCaseIndex + 1}`}
              </Badge>
              <span
                style={{
                  fontSize: '12px',
                  color: '#1e5aa8',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <ShieldCheck size={14} color="#16a34a" />
                Cross-Polarized Clinical Photography
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)',
                color: '#0f2942',
                fontFamily: 'var(--font-serif-display)',
                fontWeight: 700,
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              {currentCase.title}
            </h3>
          </div>

          {/* View Mode Switcher Controls */}
          <div
            style={{
              display: 'inline-flex',
              background: '#f0f7ff',
              padding: '4px',
              borderRadius: '9999px',
              border: '1px solid #bae6fd',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setViewMode('slider')}
              title="Interactive Split Slider"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s ease',
                background: viewMode === 'slider' ? '#1e5aa8' : 'transparent',
                color: viewMode === 'slider' ? '#ffffff' : '#334155',
              }}
            >
              <SplitSquareVertical size={14} />
              <span>Interactive Slider</span>
            </button>

            <button
              onClick={() => setViewMode('side-by-side')}
              title="Side-by-Side Dual View"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s ease',
                background: viewMode === 'side-by-side' ? '#1e5aa8' : 'transparent',
                color: viewMode === 'side-by-side' ? '#ffffff' : '#334155',
              }}
            >
              <Columns size={14} />
              <span>Side-by-Side</span>
            </button>

            <button
              onClick={() => {
                setViewMode('toggle');
                setToggleState(toggleState === 'before' ? 'after' : 'before');
              }}
              title="1-Click Quick Toggle"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s ease',
                background: viewMode === 'toggle' ? '#1e5aa8' : 'transparent',
                color: viewMode === 'toggle' ? '#ffffff' : '#334155',
              }}
            >
              <Eye size={14} />
              <span>Quick Toggle</span>
            </button>
          </div>
        </div>

        {/* ── Mode 1: Interactive Split Slider ── */}
        {viewMode === 'slider' && (
          <div style={{ position: 'relative', width: '100%', userSelect: 'none' }}>
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              style={{
                position: 'relative',
                width: '100%',
                maxHeight: '560px',
                minHeight: '360px',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'ew-resize',
                boxShadow: '0 8px 30px rgba(15, 41, 66, 0.1)',
                background: '#091e36',
                touchAction: 'none',
              }}
            >
              {/* If split composite image (like case 2) */}
              {isSplitComposite ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img
                    src={currentCase.image}
                    alt={currentCase.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '560px',
                      display: 'block',
                      objectFit: 'cover',
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Floating split notice */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(11, 37, 69, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#e2e8f0',
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span>Left: Clinical Baseline</span>
                    <span style={{ color: '#38bdf8' }}>•</span>
                    <span>Right: Post-Treatment Clearance</span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Base Layer: AFTER Image */}
                  <img
                    src={afterSrc}
                    alt={`${currentCase.title} - After Treatment Result`}
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '560px',
                      objectFit: 'contain',
                      display: 'block',
                      background: '#091e36',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Overlaid Layer: BEFORE Image (clipped to sliderPosition %) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: `${sliderPosition}%`,
                      overflow: 'hidden',
                      pointerEvents: 'none',
                      borderRight: '2px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '4px 0 20px rgba(0, 0, 0, 0.35)',
                    }}
                  >
                    <div
                      style={{
                        width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                        height: '100%',
                      }}
                    >
                      <img
                        src={beforeSrc}
                        alt={`${currentCase.title} - Before Treatment Baseline`}
                        style={{
                          width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                          height: '100%',
                          maxHeight: '560px',
                          objectFit: 'contain',
                          display: 'block',
                          background: '#091e36',
                          pointerEvents: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Draggable Divider Line & Handle */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: `${sliderPosition}%`,
                      transform: 'translateX(-50%)',
                      width: '4px',
                      background: 'linear-gradient(180deg, #1e5aa8 0%, #ffffff 50%, #16a34a 100%)',
                      pointerEvents: 'none',
                      zIndex: 10,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)',
                        border: '2px solid #ffffff',
                        boxShadow: '0 4px 18px rgba(0,0,0,0.35), 0 0 14px rgba(37,99,235,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        cursor: 'ew-resize',
                        pointerEvents: 'auto',
                      }}
                    >
                      <ChevronsLeftRight size={22} color="#ffffff" />
                    </div>
                  </div>
                </>
              )}

              {/* Floating Pill Badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(11, 37, 69, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  zIndex: 5,
                  pointerEvents: 'none',
                }}
              >
                Before Baseline
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(21, 128, 61, 0.9)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(134, 239, 172, 0.45)',
                  zIndex: 5,
                  pointerEvents: 'none',
                }}
              >
                After Result
              </div>

              {/* Interaction Hint Overlay */}
              {!hasInteracted && !isSplitComposite && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(15, 41, 66, 0.92)',
                    backdropFilter: 'blur(10px)',
                    color: '#ffffff',
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
                    border: '1px solid rgba(56,189,248,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    pointerEvents: 'none',
                    animation: 'pulseGlow 2.5s infinite',
                  }}
                >
                  <ChevronsLeftRight size={16} color="#38bdf8" />
                  <span>Drag slider left or right to inspect dermal clearance</span>
                </div>
              )}
            </div>

            {/* Accessible slider input */}
            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '11px', color: '#1e5aa8', fontWeight: 700, textTransform: 'uppercase' }}>
                Before
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => {
                  setSliderPosition(Number(e.target.value));
                  setHasInteracted(true);
                }}
                aria-label="Before and After Comparison Slider"
                style={{
                  flex: 1,
                  accentColor: '#1e5aa8',
                  cursor: 'pointer',
                  height: '6px',
                }}
              />
              <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700, textTransform: 'uppercase' }}>
                After
              </span>
            </div>
          </div>
        )}

        {/* ── Mode 2: Side-by-Side Dual View ── */}
        {viewMode === 'side-by-side' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '16px',
            }}
          >
            {/* Left: Baseline Card */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#091e36',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(15,41,66,0.06)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 41, 66, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  border: '1px solid rgba(56,189,248,0.4)',
                  zIndex: 2,
                }}
              >
                1. Initial Baseline (Week 0)
              </div>
              <img
                src={beforeSrc}
                alt={`${currentCase.title} Before`}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'contain',
                  display: 'block',
                  background: '#091e36',
                }}
              />
              <div style={{ padding: '14px', background: '#f0f7ff', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '11px', color: '#1e5aa8', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2px' }}>
                  Diagnostic Presentation
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                  {currentCase.beforeNotes}
                </p>
              </div>
            </div>

            {/* Right: Treated Card */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#091e36',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(15,41,66,0.06)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(21, 128, 61, 0.9)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  border: '1px solid rgba(134,239,172,0.4)',
                  zIndex: 2,
                }}
              >
                2. Post-Protocol Outcome ({currentCase.timeline})
              </div>
              <img
                src={afterSrc}
                alt={`${currentCase.title} After`}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'contain',
                  display: 'block',
                  background: '#091e36',
                }}
              />
              <div style={{ padding: '14px', background: '#f0fdf4', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '11px', color: '#15803d', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2px' }}>
                  Documented Outcome
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                  {currentCase.afterNotes}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Mode 3: 1-Click Quick Toggle ── */}
        {viewMode === 'toggle' && (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#091e36',
                border: '1px solid #e2e8f0',
                maxHeight: '520px',
                marginBottom: '16px',
              }}
            >
              <img
                src={toggleState === 'before' ? beforeSrc : afterSrc}
                alt={currentCase.title}
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'opacity 0.3s ease',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: toggleState === 'before' ? '#1e5aa8' : '#16a34a',
                  color: '#ffffff',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                }}
              >
                Viewing: {toggleState === 'before' ? 'Initial Baseline' : 'Post-Treatment Result'}
              </div>
            </div>

            <div style={{ display: 'inline-flex', gap: '12px' }}>
              <button
                onClick={() => setToggleState('before')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  border: 'none',
                  background: toggleState === 'before' ? '#1e5aa8' : '#f0f7ff',
                  color: toggleState === 'before' ? '#ffffff' : '#1e5aa8',
                  transition: 'all 0.2s ease',
                }}
              >
                View Before
              </button>
              <button
                onClick={() => setToggleState('after')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  border: 'none',
                  background: toggleState === 'after' ? '#16a34a' : '#f0fdf4',
                  color: toggleState === 'after' ? '#ffffff' : '#15803d',
                  transition: 'all 0.2s ease',
                }}
              >
                View After
              </button>
            </div>
          </div>
        )}

        {/* ── Clinical Protocol & Metric Statistics Bar ── */}
        <div
          style={{
            marginTop: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '16px',
            background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f0fdf4 100%)',
            borderRadius: '16px',
            padding: 'clamp(16px, 2.5vw, 24px)',
            border: '1px solid #e2e8f0',
          }}
        >
          {/* Metadata pill column */}
          <div>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#334155' }}>
                <Calendar size={15} color="#1e5aa8" />
                <span><strong>Timeline:</strong> {currentCase.timeline}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#334155' }}>
                <Layers size={15} color="#16a34a" />
                <span><strong>Protocol:</strong> {currentCase.sessions}</span>
              </div>
            </div>

            <div style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, color: '#1e5aa8', marginBottom: '4px' }}>
              Clinical Pathway Administered:
            </div>
            <p style={{ fontSize: '0.86rem', color: '#0f2942', lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
              {currentCase.protocolUsed}
            </p>
          </div>

          {/* Key Clinical Stats */}
          {currentCase.stats && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                alignItems: 'center',
                background: '#ffffff',
                borderRadius: '12px',
                padding: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(15,41,66,0.04)',
              }}
            >
              {currentCase.stats.map((s, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                      fontWeight: 700,
                      color: idx === 1 ? '#16a34a' : '#1e5aa8',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#475569', fontWeight: 600 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Box */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderLeft: '1px solid #e2e8f0',
              paddingLeft: '18px',
            }}
          >
            <div style={{ fontSize: '11px', color: '#1e5aa8', fontWeight: 600, marginBottom: '6px' }}>
              Experiencing similar skin concerns?
            </div>
            <button
              onClick={openBookingModal}
              style={{
                background: 'linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '9999px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(30, 90, 168, 0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 90, 168, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(30, 90, 168, 0.35)';
              }}
            >
              <span>Book Skin Diagnostic</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
