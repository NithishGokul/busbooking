// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Loginpg.css'; // Import the CSS file

const theme = createTheme();

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login clicked');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleOpenResetDialog = () => {
    setOpenResetDialog(true);
  };

  const handleCloseResetDialog = () => {
    setOpenResetDialog(false);
  };

  const handleResetPassword = () => {
    // Implement password reset logic here
    console.log('Reset Password clicked');
    console.log('Reset Email:', resetEmail);
    handleCloseResetDialog();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="login-container">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className="login-form">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className="login-button"
              onClick={handleLogin}
            >
              <Link to="/Home" style={{ color: 'white', textDecoration: 'none' }}>
                Login
              </Link>
            </Button>
            <Grid container justifyContent="space-between">
              <Button onClick={handleOpenResetDialog} style={{ color: 'inherit' }}>
                Forgot Password
              </Button>
              <Button component={Link} to="/register" style={{ color: 'inherit' }}>
                Register
              </Button>
            </Grid>
          </form>
        </div>
      </Container>

      {/* Forgot Password Dialog */}
      <Dialog open={openResetDialog} onClose={handleCloseResetDialog}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="resetEmail"
            label="Email Address"
            name="resetEmail"
            autoFocus
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseResetDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleResetPassword} color="primary">
            Reset Password
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default Login;
