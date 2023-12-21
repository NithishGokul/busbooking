// Home.js
import React from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Footer from './Footer';

const Home = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px', // Adjust padding as needed
      }}
    >
      <Paper elevation={3} style={{ padding: '24px', width: '400px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Bus Search
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField select label="From" variant="outlined" fullWidth>
              <MenuItem value="city1">Coimbatore</MenuItem>
              <MenuItem value="city2">Madurai</MenuItem>
              <MenuItem value="city3">Chennai</MenuItem>
              {/* Add more MenuItem components for additional options */}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField select label="To" variant="outlined" fullWidth>
              <MenuItem value="city1">Madurai</MenuItem>
              <MenuItem value="city2">Chennai</MenuItem>
              <MenuItem value="city3">Coimbatore</MenuItem>
              {/* Add more MenuItem components for additional options */}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField type="date" label="Departure Date" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Link to='/BusDetails' style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
                Search Buses;
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
      <Box mt={3} />
      <hr style={{ color: 'black' }} />
      <hr />
      <hr />
      <br/><br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>
      <Footer />
    </Container>
  );
};

export default Home;
