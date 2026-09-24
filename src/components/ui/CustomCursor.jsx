import React, { useEffect, useState, useRef, useCallback } from 'react';

// Sparkle particle pool
const MAX_SPARKLES = 12;

function createSparkle(x, y) {
  return {
    id: Math.random(),
    x,
    y,
    size: Math.random() * 5 + 3,
    opacity: 1,
    color: Math.random() > 0.5 ? '#1e5aa8' : '#16a34a',
    vx: (Math.random() - 0.5) * 2.4,
    vy: (Math.random() - 0.5) * 2.4 - 1.2,
    life: 1,
  };
}

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [sparkles, setSparkles] = useState([]);

  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const trailPos = useRef({ x: -200, y: -200 });
  const lastSparkleTime = useRef(0);
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);

  // Sync state refs for use inside RAF loop (avoids closure issues)
  useEffect(() => { isHoveredRef.current = isHovered; }, [isHovered]);
  useEffect(() => { isVisibleRef.current = isVisible; }, [isVisible]);

  const spawnSparkle = useCallback((x, y) => {
    const now = performance.now();
    if (now - lastSparkleTime.current < 55) return; // throttle
    lastSparkleTime.current = now;

    setSparkles((prev) => {
      const next = [...prev, createSparkle(x, y)];
      return next.slice(-MAX_SPARKLES);
    });
  }, []);

  // Age sparkles
  useEffect(() => {
    let frame;
    const tick = () => {
      setSparkles((prev) =>
        prev
          .map((s) => ({ ...s, life: s.life - 0.04, x: s.x + s.vx, y: s.y + s.vy, vy: s.vy + 0.08 }))
          .filter((s) => s.life > 0)
      );
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }

      // Spawn sparkle trail when hovering interactives
      if (isHoveredRef.current) {
        spawnSparkle(e.clientX, e.clientY);
      }
    };

    const onMouseDown = () => {
      setIsClicked(true);
      spawnSparkle(mousePos.current.x, mousePos.current.y);
      spawnSparkle(mousePos.current.x + 4, mousePos.current.y - 4);
      spawnSparkle(mousePos.current.x - 4, mousePos.current.y + 4);
    };
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], input, select, textarea, .treatment-card-hover, .product-card-hover, .hover-magnetic, .card-lift'
      );
      if (target) {
        setIsHovered(true);
        setHoverText(target.getAttribute('data-cursor') || '');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    // Smooth lerp loop for trailing ring & soft-trail
    let raf;
    const render = () => {
      const easeRing = 0.14;
      const easeTrail = 0.07;

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * easeRing;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * easeRing;

      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * easeTrail;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * easeTrail;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      if (trailRef.current) {
        trailRef.current.style.left = `${trailPos.current.x}px`;
        trailRef.current.style.top = `${trailPos.current.y}px`;
      }

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
      cancelAnimationFrame(raf);
    };
  }, [spawnSparkle]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const dotSize = isClicked ? 5 : isHovered ? 6 : 8;
  const ringSize = isClicked ? 24 : isHovered ? 58 : 34;

  return (
    <>
      {/* Sparkle Particles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          style={{
            position: 'fixed',
            top: s.y,
            left: s.x,
            width: `${s.size * s.life}px`,
            height: `${s.size * s.life}px`,
            marginLeft: `-${(s.size * s.life) / 2}px`,
            marginTop: `-${(s.size * s.life) / 2}px`,
            borderRadius: '50%',
            background: s.color,
            opacity: s.life * 0.85,
            pointerEvents: 'none',
            zIndex: 99996,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
          }}
        />
      ))}

      {/* Soft glow trail (slowest) */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '72px',
          height: '72px',
          marginLeft: '-36px',
          marginTop: '-36px',
          borderRadius: '50%',
          background: isHovered
            ? 'radial-gradient(circle, rgba(196,98,45,0.18) 0%, rgba(194,155,100,0.1) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(61,35,20,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 99997,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease, background 0.4s ease',
          filter: 'blur(8px)',
        }}
      />

      {/* Outer Trailing Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          marginLeft: `-${ringSize / 2}px`,
          marginTop: `-${ringSize / 2}px`,
          borderRadius: '50%',
          background: isHovered
            ? 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, rgba(22,163,74,0.08) 60%, transparent 100%)'
            : 'transparent',
          border: isHovered
            ? '1.5px solid rgba(37,99,235,0.75)'
            : '1.2px solid rgba(30,90,168,0.3)',
          boxShadow: isHovered
            ? '0 0 20px rgba(37,99,235,0.35), inset 0 0 10px rgba(22,163,74,0.2)'
            : 'none',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible ? 1 : 0,
          transform: `scale(${isClicked ? 0.8 : 1})`,
          transition:
            'opacity 0.25s ease, width 0.35s cubic-bezier(0.34,1.56,0.64,1), height 0.35s cubic-bezier(0.34,1.56,0.64,1), margin 0.35s cubic-bezier(0.34,1.56,0.64,1), border 0.3s ease, background 0.3s ease, transform 0.15s ease',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {hoverText && (
          <span
            style={{
              fontSize: '8px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0f2942',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            {hoverText}
          </span>
        )}
      </div>

      {/* Precision Inner Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          marginLeft: `-${dotSize / 2}px`,
          marginTop: `-${dotSize / 2}px`,
          borderRadius: '50%',
          background: isHovered
            ? 'linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)'
            : '#1e5aa8',
          boxShadow: isHovered
            ? '0 0 14px rgba(37,99,235,0.9)'
            : '0 0 5px rgba(30,90,168,0.5)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transition:
            'opacity 0.2s ease, width 0.2s ease, height 0.2s ease, margin 0.2s ease, background 0.25s ease, box-shadow 0.25s ease',
        }}
      />
    </>
  );
};
