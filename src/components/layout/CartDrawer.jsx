import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    rawSubtotal,
    discountPercent,
    discountAmount,
    discountCode,
    setDiscountCode,
    applyDiscount,
    subtotal,
    shipping,
    finalTotal
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    applyDiscount(inputCode);
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      setCheckoutComplete(false);
      setIsCartOpen(false);
    }, 2800);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          maxWidth: "480px",
          background: "#ffffff",
          boxShadow: "-10px 0 40px rgba(11, 37, 69, 0.18)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 1001,
          animation: "fadeIn 0.25s ease"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: "24px 28px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "linear-gradient(135deg, #f0f7ff 0%, #f0fdf4 100%)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShoppingBag size={20} color="#1e5aa8" />
            <h3 style={{ fontSize: "1.25rem", color: "#0f2942", fontFamily: "var(--font-serif-display)" }}>
              Prescription Medical Bag
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "#f0f7ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1e5aa8"
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ background: "#f0fdf4", padding: "12px 28px", borderBottom: "1px solid #dcfce7", fontSize: "12px", color: "#166534" }}>
          {subtotal >= 100 ? (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#16a34a", fontWeight: 600 }}>
              <Sparkles size={14} color="#16a34a" />
              <span>You've unlocked Complimentary Express Courier Delivery!</span>
            </div>
          ) : (
            <div style={{ color: "#334155" }}>
              Add <strong style={{ color: "#1e5aa8" }}>£{(100 - subtotal).toFixed(2)}</strong> more to qualify for <strong style={{ color: "#16a34a" }}>Free Express Delivery</strong>
            </div>
          )}
        </div>

        {/* Cart Item List */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <ShoppingBag size={48} color="#bfdbfe" style={{ margin: "0 auto 16px auto" }} />
              <h4 style={{ fontSize: "1.1rem", color: "#0f2942", marginBottom: "6px", fontFamily: "var(--font-serif-display)" }}>
                Your bag is empty
              </h4>
              <p style={{ fontSize: "0.88rem", color: "#475569", marginBottom: "20px" }}>
                Explore our medical-grade skincare apothecary to add clinical formulations to your routine.
              </p>
              <Button variant="primary" size="sm" onClick={() => setIsCartOpen(false)}>
                Explore Apothecary
              </Button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "16px",
                  paddingBottom: "18px",
                  borderBottom: "1px solid #e2e8f0"
                }}
              >
                <div
                  style={{
                    width: "74px",
                    height: "74px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#f0f7ff",
                    flexShrink: 0,
                    border: "1px solid #e2e8f0"
                  }}
                >
                  <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h4 style={{ fontSize: "0.95rem", color: "#0f2942", fontWeight: 600, lineHeight: 1.25 }}>
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ color: "#94a3b8", padding: "2px" }}
                        title="Remove"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    {item.subtitle && (
                      <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                        {item.subtitle}
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #e2e8f0",
                        borderRadius: "9999px",
                        padding: "2px 8px",
                        background: "#f0f7ff"
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ padding: "2px 6px", fontSize: "14px", color: "#0f2942" }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: "12px", fontWeight: 700, padding: "0 8px", color: "#0f2942" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ padding: "2px 6px", fontSize: "14px", color: "#0f2942" }}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1e5aa8" }}>
                      £{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div style={{ padding: "20px 28px", borderTop: "1px solid #e2e8f0", background: "#f8fafc" }}>
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <div style={{ position: "relative", flex: 1 }}>
                <Tag size={14} color="#64748b" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }} />
                <input
                  type="text"
                  placeholder="Promo Code (use OASIS15)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 12px 9px 34px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "12px",
                    textTransform: "uppercase"
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: "#1e5aa8",
                  color: "#ffffff",
                  padding: "0 16px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600
                }}
              >
                Apply
              </button>
            </form>

            {/* Calculations */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", color: "#475569", marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Subtotal</span>
                <span>£{rawSubtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", color: "#16a34a", fontWeight: 600 }}>
                  <span>Oasis Promo ({discountPercent}%)</span>
                  <span>-£{discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Express Delivery</span>
                <span>{shipping === 0 ? "FREE" : `£${shipping.toFixed(2)}`}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0f2942",
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "8px",
                  marginTop: "4px"
                }}
              >
                <span>Total Due</span>
                <span>£{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            {checkoutComplete ? (
              <div
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  color: "#ffffff",
                  padding: "14px",
                  borderRadius: "9999px",
                  textAlign: "center",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}
              >
                <ShieldCheck size={18} />
                <span>Order Placed Securely!</span>
              </div>
            ) : (
              <button
                onClick={handleCheckout}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #1e5aa8 0%, #0284c7 50%, #16a34a 100%)",
                  color: "#ffffff",
                  padding: "14px",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  boxShadow: "0 4px 18px rgba(30, 90, 168, 0.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}
              >
                <ShieldCheck size={16} color="#ffffff" />
                <span>Secure Clinical Checkout • £{finalTotal.toFixed(2)}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
