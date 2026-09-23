import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProductCard } from '../ui/ProductCard';
import { productCategories, productsData } from '../../data/productsData';
import { Sparkles, ShieldCheck, Truck } from 'lucide-react';

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = activeCategory === "All Products"
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="section-padding" style={{ background: "#fdf8f3" }}>
      <div className="container">
        {/* Header */}
        <SectionHeader
          badge="CLINICAL AT-HOME REGIMEN"
          title="Most Popular Products & Medical Grade Skin Care"
          subtitle="Potent dermatological formulations designed to maintain, protect, and accelerate your clinic results in your daily home ritual."
        />

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "36px"
          }}
        >
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "7px 16px",
                  borderRadius: "9999px",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  background: isActive ? "#3d2314" : "#ffffff",
                  color: isActive ? "#ffffff" : "#6b4c38",
                  border: isActive ? "1px solid #3d2314" : "1px solid #ede5da",
                  boxShadow: isActive ? "0 4px 12px rgba(44, 24, 16, 0.22)" : "none"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "24px",
            marginBottom: "40px"
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Apothecary Assurance Strip */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            border: "1px solid #ede5da",
            padding: "clamp(20px, 3vw, 28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShieldCheck size={22} color="#c4622d" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: "13px", color: "#3d2314", display: "block" }}>100% Authentic Formulations</strong>
              <span style={{ fontSize: "11.5px", color: "#8b5e3c" }}>Prescription-strength certified</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Truck size={22} color="#c4622d" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: "13px", color: "#3d2314", display: "block" }}>Complimentary Delivery</strong>
              <span style={{ fontSize: "11.5px", color: "#8b5e3c" }}>On orders above £100 / $125</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Sparkles size={22} color="#c4622d" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: "13px", color: "#3d2314", display: "block" }}>Personalized Regimen Support</strong>
              <span style={{ fontSize: "11.5px", color: "#8b5e3c" }}>Direct guidance from skin nurses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
