import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { useCart } from '../../context/CartContext';
import { Badge } from './Badge';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct } = useBooking();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, qty);
    setQuickViewProduct(null);
  };

  return (
    <div className="modal-overlay" onClick={() => setQuickViewProduct(null)}>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          maxWidth: "850px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          padding: "36px",
          animation: "fadeIn 0.3s ease"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setQuickViewProduct(null)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#f2f7f4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#304b42",
            transition: "all 0.2s"
          }}
        >
          <X size={18} />
        </button>

        {/* Product Image */}
        <div
          style={{
            borderRadius: "18px",
            overflow: "hidden",
            background: "#faf9f6",
            border: "1px solid #eef3f0",
            height: "100%",
            minHeight: "300px"
          }}
        >
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              {quickViewProduct.badge && (
                <Badge variant={quickViewProduct.badgeColor === "gold" ? "gold" : "emerald"}>
                  {quickViewProduct.badge}
                </Badge>
              )}
              <span style={{ fontSize: "12px", color: "#6e847c" }}>{quickViewProduct.category}</span>
            </div>

            <h2
              style={{
                fontSize: "1.65rem",
                color: "var(--color-primary-dark)",
                fontFamily: "var(--font-serif-display)",
                lineHeight: 1.25,
                marginBottom: "8px"
              }}
            >
              {quickViewProduct.name}
            </h2>

            <div style={{ fontSize: "13px", color: "#4f6e63", fontWeight: 600, marginBottom: "14px" }}>
              {quickViewProduct.subtitle}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ display: "flex", gap: "2px", color: "#eab308" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#eab308" color="#eab308" />
                ))}
              </div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#163a31" }}>{quickViewProduct.rating}</span>
              <span style={{ fontSize: "13px", color: "#839c92" }}>({quickViewProduct.reviewCount} clinical reviews)</span>
            </div>

            <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#163a31", marginBottom: "18px" }}>
              £{quickViewProduct.price}.00
            </div>

            <p style={{ fontSize: "0.92rem", color: "#546860", lineHeight: 1.6, marginBottom: "20px" }}>
              {quickViewProduct.description}
            </p>

            <div style={{ background: "#f5f9f7", borderRadius: "12px", padding: "14px", marginBottom: "24px", fontSize: "12px", color: "#3e574d" }}>
              <strong>Key Actives:</strong> {quickViewProduct.ingredients}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #c9ded5",
                borderRadius: "9999px",
                padding: "4px 12px",
                background: "#ffffff"
              }}
            >
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                style={{ padding: "4px 8px", fontSize: "16px", color: "#163a31", fontWeight: 700 }}
              >
                -
              </button>
              <span style={{ padding: "0 10px", fontSize: "14px", fontWeight: 700, color: "#163a31" }}>
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                style={{ padding: "4px 8px", fontSize: "16px", color: "#163a31", fontWeight: 700 }}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "#163a31",
                color: "#ffffff",
                padding: "13px 24px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "14px",
                boxShadow: "0 4px 18px rgba(22, 58, 49, 0.25)"
              }}
            >
              <ShoppingBag size={16} />
              <span>Add to Bag • £{quickViewProduct.price * qty}.00</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
