// Payment.js
import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const SEAT_PRICE = 500; // Price per seat

const Payment = () => {
  const location = useLocation();
  const { selectedSeats } = location.state || { selectedSeats: [] };

  const calculateTotalAmount = () => {
    // Calculate the total amount based on the number of selected seats
    return selectedSeats.length * SEAT_PRICE;
  };

  const handlePayment = () => {
    // Implement your payment logic here
    // For demonstration purposes, let's just display a success message
    alert('Payment successful!');
  };

  return (
    <Container>
      <Paper elevation={3} className="payment-container">
        <Typography variant="h4" className="payment-header">
          Payment Details
        </Typography>
        <div className="seat-details">
          <Typography variant="h6">Selected Seats:15</Typography>
          <ul>
            {selectedSeats.map((seat) => (
              <li key={seat}>Seat {seat}</li>
            ))}
          </ul>
        </div>
        <div className="amount-details">
          <Typography variant="h6">Total Amount:</Typography>
          <Typography variant="h5">Rs.{500}</Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePayment}
          className="pay-now-button"
        >
          Pay Now
        </Button>
      </Paper>
    </Container>
  );
};

export default Payment;
