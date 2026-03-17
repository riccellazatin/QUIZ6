import React, { useState } from 'react';
import PaymentForm from '../components/PaymentForm';
import PayPalCheckout from '../components/PayPalCheckout';

const PaymentScreen = () => {
  const [paymentData, setPaymentData] = useState(null);

  const handlePaymentSuccess = (data) => {
    setPaymentData(data);
  };

  const handleReset = () => {
    setPaymentData(null);
  };

  return (
    <div className="home-screen">
      <header className="header">
        <h1>Payment Platform</h1>
        <p>Support our services in SeksYu</p>
      </header>

      <main className="main-content">
        {!paymentData ? (
          <DonationForm onPaymentSuccess={handlePaymentSuccess} />
        ) : (
          <div>
            <PayPalCheckout paymentData={paymentData} />
            <button onClick={handleReset} className="back-btn">
              Back to Form
            </button>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Payment Platform. Powered by PayPal.</p>
      </footer>
    </div>
  );
};

export default PaymentScreen;