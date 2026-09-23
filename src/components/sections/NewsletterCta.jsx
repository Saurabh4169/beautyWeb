import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const NewsletterCta = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast("Welcome to the Beauty Oasis Journal! Your 15% code is OASIS15.");
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #163a31 0%, #0d241e 100%)",
        color: "#ffffff",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "4px 14px",
              borderRadius: "9999px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#34d399",
              marginBottom: "18px"
            }}
          >
            <Sparkles size={13} />
            <span>THE CLINICAL JOURNAL</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              color: "#ffffff",
              fontFamily: "var(--font-serif-display)",
              lineHeight: 1.15,
              marginBottom: "16px"
            }}
          >
            Elevate Your Skincare Knowledge
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "#9dbdb3",
              lineHeight: 1.6,
              marginBottom: "32px"
            }}
          >
            Subscribe to receive evidence-based aesthetic research, physician advice, private event invitations, and <strong>15% off</strong> your first medical appointment or apothecary purchase.
          </p>

          {subscribed ? (
            <div
              style={{
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid #10b981",
                padding: "20px",
                borderRadius: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "#ffffff"
              }}
            >
              <CheckCircle2 size={22} color="#10b981" />
              <span>Thank you! Your promo code <strong>OASIS15</strong> is now active.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{
                display: "flex",
                gap: "10px",
                maxWidth: "520px",
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: "1 1 280px",
                  padding: "14px 20px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  fontSize: "14px"
                }}
              />
              <button
                type="submit"
                style={{
                  background: "#10b981",
                  color: "#081e17",
                  padding: "14px 30px",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  boxShadow: "0 4px 18px rgba(16, 185, 129, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>Subscribe</span>
                <ArrowRight size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
