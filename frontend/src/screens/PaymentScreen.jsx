import React, { useState } from 'react';
import PaymentForm from '../components/PaymentForm';
import PayPalCheckout from '../components/PayPalCheckout';
import './Service.css'
import {Row, Col, Button} from 'react-bootstrap'

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

      <Row className="g-4">
        <Col lg={paymentData ? 5 : 6}>
          <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
        </Col>

        {paymentData && (
          <Col lg={7}>
            <PayPalCheckout paymentData={paymentData} />
            <div className="mt-3">
              <Button onClick={handleReset} variant="outline-dark" className="rounded-0 px-4">
                Back to Form
              </Button>
            </div>
          </Col>
        )}
      </Row>

      <footer className="footer">
        <p>&copy; 2026 Payment Platform. Powered by PayPal.</p>
      </footer>
    </div>
  );
};

export default PaymentScreen;