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
    <section id="products" className="section-padding" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0fdf4 50%, #f0f7ff 100%)" }}>
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
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  background: isActive ? "linear-gradient(135deg, #1e5aa8 0%, #0f3460 100%)" : "#ffffff",
                  color: isActive ? "#ffffff" : "#1e3a5f",
                  border: isActive ? "1px solid #1e5aa8" : "1px solid #e2e8f0",
                  boxShadow: isActive ? "0 4px 14px rgba(30, 90, 168, 0.25)" : "0 1px 3px rgba(0,0,0,0.03)"
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
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 20px rgba(30, 90, 168, 0.05)",
            padding: "clamp(20px, 3vw, 28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShieldCheck size={22} color="#16a34a" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: "13px", color: "#0f2942", display: "block" }}>100% Authentic Formulations</strong>
              <span style={{ fontSize: "11.5px", color: "#475569" }}>Prescription-strength certified</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Truck size={22} color="#1e5aa8" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: "13px", color: "#0f2942", display: "block" }}>Complimentary Delivery</strong>
              <span style={{ fontSize: "11.5px", color: "#475569" }}>On orders above £100 / $125</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Sparkles size={22} color="#16a34a" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: "13px", color: "#0f2942", display: "block" }}>Personalized Regimen Support</strong>
              <span style={{ fontSize: "11.5px", color: "#475569" }}>Direct guidance from skin nurses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
