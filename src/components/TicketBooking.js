// TicketBooking.js
import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, Button } from '@mui/material';
import './TicketBooking.css';

const SEAT_PRICE = 500; // Price per seat

const TicketBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    // Toggle the seat selection
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  const calculateTotalAmount = () => {
    // Calculate the total amount based on the number of selected seats
    return selectedSeats.length * SEAT_PRICE;
  };

  const handleAddToCart = () => {
    // Implement your logic to add selected seats to the cart or proceed with the booking
    console.log('Selected Seats:', selectedSeats);
    console.log('Total Amount:', calculateTotalAmount());

    // Use window.location.href to navigate to the Payment component
    window.location.href = `/Payment?selectedSeats=${selectedSeats.join(',')}`;
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '24px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Select Seats
        </Typography>
        <Grid container spacing={2}>
          {/* Display seat arrangement */}
          {Array.from({ length: 6 }, (_, row) => (
            <Grid container item justifyContent="center" key={row}>
              {Array.from({ length: 6 }, (_, col) => {
                const seatNumber = row * 6 + col + 1;
                const isSelected = selectedSeats.includes(seatNumber);
                return (
                  <Grid item key={col}>
                    <Button
                      className={`seat ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSeatClick(seatNumber)}
                    >
                      {seatNumber}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          ))}
        </Grid>
        {/* Display selected seats */}
        <Typography variant="h6" style={{ marginTop: '16px' }}>
          Selected Seats: {selectedSeats.join(', ')}
        </Typography>
        {/* Display total amount */}
        <Typography variant="h6" style={{ marginTop: '16px' }}>
          Total Amount: Rs.{calculateTotalAmount()}
        </Typography>
        {/* Proceed to payment button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          style={{ marginTop: '16px' }}
        >
          Proceed to Payment
        </Button>
      </Paper>
    </Container>
  );
};

export default TicketBooking;
