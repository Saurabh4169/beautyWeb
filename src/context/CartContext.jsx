import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "prod-creme-bio-ferment",
      name: "Cellular Restorative Bio-Ferment Crème",
      price: 145,
      quantity: 1,
      image: "/images/product_creme.jpg",
      subtitle: "50ml | Lipid Barrier Repair"
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          image: product.image,
          subtitle: product.subtitle
        }];
      }
    });
    showToast(`Added "${product.name}" to your medical bag.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast("Item removed from your bag.", "info");
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const applyDiscount = (code) => {
    if (code.trim().toUpperCase() === "OASIS15") {
      setDiscountPercent(15);
      showToast("15% Welcome Discount code applied!");
      return true;
    } else {
      showToast("Invalid promo code. Try OASIS15 for 15% off.", "error");
      return false;
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = rawSubtotal - discountAmount;
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 7.5;
  const finalTotal = subtotal + shipping;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        rawSubtotal,
        discountPercent,
        discountAmount,
        discountCode,
        setDiscountCode,
        applyDiscount,
        subtotal,
        shipping,
        finalTotal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
