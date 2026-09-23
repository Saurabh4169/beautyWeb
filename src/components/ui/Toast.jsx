import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  const getIcon = () => {
    switch (toastMessage.type) {
      case 'error':
        return <AlertCircle size={18} color="#ef4444" />;
      case 'info':
        return <Info size={18} color="#3b82f6" />;
      default:
        return <CheckCircle2 size={18} color="#10b981" />;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        background: "#163a31",
        color: "#ffffff",
        padding: "14px 22px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        boxShadow: "0 12px 35px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        animation: "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        maxWidth: "400px"
      }}
    >
      {getIcon()}
      <div style={{ fontSize: "13px", fontWeight: 500 }}>
        {toastMessage.message}
      </div>
    </div>
  );
};
