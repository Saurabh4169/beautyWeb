import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Check } from 'lucide-react';
import { Badge } from './Badge';
import { useCart } from '../../context/CartContext';
import { useBooking } from '../../context/BookingContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { setQuickViewProduct } = useBooking();
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnim, setAddedAnim] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1200);
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        border: "1px solid #e2e8f0",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.35s ease",
        position: "relative",
        boxShadow: "0 4px 18px rgba(15, 41, 66, 0.04)",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 36px rgba(30, 90, 168, 0.12)";
        e.currentTarget.style.borderColor = "#1e5aa8";
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 18px rgba(15, 41, 66, 0.04)";
        e.currentTarget.style.borderColor = "#e2e8f0";
      }}
      onClick={() => setQuickViewProduct(product)}
    >
      <div>
        {/* Top badge */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", minHeight: "26px" }}>
          {product.badge ? (
            <Badge variant={product.badgeColor === "gold" ? "blue" : "emerald"}>
              {product.badge}
            </Badge>
          ) : <div />}

          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            title="Quick view"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "#f0f7ff",
              border: "1px solid #bae6fd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1e5aa8",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <Eye size={15} />
          </button>
        </div>

        {/* Product Image Frame */}
        <div
          style={{
            height: "220px",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "18px",
            background: "#f8fafc",
            position: "relative"
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: isHovered ? "scale(1.06)" : "scale(1)"
            }}
          />
        </div>

        {/* Category & Subtitle */}
        <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#16a34a", fontWeight: 700, marginBottom: "4px" }}>
          {product.subtitle}
        </div>

        {/* Product Name */}
        <h4
          style={{
            fontSize: "1.15rem",
            color: "#0f2942",
            marginBottom: "10px",
            lineHeight: 1.3,
            fontFamily: "var(--font-serif-display)",
            minHeight: "44px"
          }}
        >
          {product.name}
        </h4>

        {/* Rating Stars */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="#16a34a" color="#16a34a" />
            ))}
          </div>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#0f2942" }}>{product.rating}</span>
          <span style={{ fontSize: "12px", color: "#64748b" }}>({product.reviewCount})</span>
        </div>
      </div>

      {/* Price and Add to Cart Row */}
      <div
        style={{
          borderTop: "1px solid #e2e8f0",
          paddingTop: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e5aa8", fontFamily: "var(--font-sans)" }}>
            £{product.price}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: "0.85rem", textDecoration: "line-through", color: "#94a3b8" }}>
              £{product.originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={handleAdd}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: addedAnim ? "#16a34a" : "linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)",
            color: "#ffffff",
            padding: "9px 18px",
            borderRadius: "9999px",
            fontSize: "13px",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            transition: "all 0.25s ease",
            boxShadow: "0 4px 14px rgba(30, 90, 168, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(30, 90, 168, 0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(30, 90, 168, 0.3)";
          }}
        >
          {addedAnim ? (
            <>
              <Check size={14} />
              <span>Added</span>
            </>
          ) : (
            <>
              <ShoppingBag size={14} />
              <span>Add to Bag</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
