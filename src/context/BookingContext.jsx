import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewTreatment, setQuickViewTreatment] = useState(null);

  const openBookingModal = (treatment = null) => {
    setSelectedTreatment(treatment);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setSelectedTreatment(null);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        openBookingModal,
        closeBookingModal,
        selectedTreatment,
        setSelectedTreatment,
        quickViewProduct,
        setQuickViewProduct,
        quickViewTreatment,
        setQuickViewTreatment
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
