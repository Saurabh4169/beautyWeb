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
        border: "1px solid #ede5da",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.35s ease",
        position: "relative",
        boxShadow: "0 4px 18px rgba(44, 24, 16, 0.04)",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 36px rgba(44, 24, 16, 0.1)";
        e.currentTarget.style.borderColor = "#c4622d";
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 18px rgba(44, 24, 16, 0.04)";
        e.currentTarget.style.borderColor = "#ede5da";
      }}
      onClick={() => setQuickViewProduct(product)}
    >
      <div>
        {/* Top badge */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", minHeight: "26px" }}>
          {product.badge ? (
            <Badge variant={product.badgeColor === "gold" ? "gold" : "emerald"}>
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
              background: "#f8f2eb",
              border: "1px solid #e4d8cc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#3d2314",
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
            background: "#fdf8f3",
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
        <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#8b5e3c", fontWeight: 600, marginBottom: "4px" }}>
          {product.subtitle}
        </div>

        {/* Product Name */}
        <h4
          style={{
            fontSize: "1.15rem",
            color: "var(--color-primary-dark)",
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
          <div style={{ display: "flex", gap: "2px", color: "#c29b64" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="#c29b64" color="#c29b64" />
            ))}
          </div>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#3d2314" }}>{product.rating}</span>
          <span style={{ fontSize: "12px", color: "#8b5e3c" }}>({product.reviewCount})</span>
        </div>
      </div>

      {/* Price and Add to Cart Row */}
      <div
        style={{
          borderTop: "1px solid #ede5da",
          paddingTop: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-primary-dark)", fontFamily: "var(--font-sans)" }}>
            £{product.price}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: "0.85rem", textDecoration: "line-through", color: "#9c7b68" }}>
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
            background: addedAnim ? "#c4622d" : "#3d2314",
            color: "#ffffff",
            padding: "9px 16px",
            borderRadius: "9999px",
            fontSize: "13px",
            fontWeight: 600,
            transition: "all 0.25s ease",
            boxShadow: "0 4px 14px rgba(44, 24, 16, 0.2)"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#c4622d'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = addedAnim ? '#c4622d' : '#3d2314'; }}
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
