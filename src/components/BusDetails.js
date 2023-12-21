// BusDetails.js
import React from 'react';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import busImage1 from '../images/AcSleeperBus.jpg';
import busImage2 from '../images/acimage2.jpg';

import './BusDetails.css'; // Import the CSS file

const busData = [
  { id: 1, name: 'Bus 1', type: 'AC', sleeper: true, image: busImage1 },
  { id: 2, name: 'Bus 2', type: 'Non-AC', sleeper: false, image: busImage2 },
  { id: 3, name: 'Bus 3', type: 'AC', sleeper: false, image: busImage2 },
  { id: 4, name: 'Bus 4', type: 'Non-AC', sleeper: true, image: busImage1 },
];

const BusDetails = () => {
  return (
    <Container className="cardContainer">
      {busData.map((bus) => (
        <Card key={bus.id} className="card">
          <img src={bus.image} alt={bus.name} className="cardMedia" />
          <CardContent className="cardContent">
            <Typography variant="h6" className="cardTitle">
              {bus.name}
            </Typography>
            <Typography variant="body1">Type: {bus.type}</Typography>
            <Typography variant="body1">Sleeper: {bus.sleeper ? 'Yes' : 'No'}</Typography>
            <Link to={`/booking/${bus.id}`} style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" className="cardButton">
                Book Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default BusDetails;
