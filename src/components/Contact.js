import React, { useState } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Paper } from '@mui/material';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <Paper
      elevation={3}
      style={{
        width: '100%',
        maxWidth: '300px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4', // Added background color
        borderRadius: '10px', // Added border radius
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added box shadow
        margin: '20px auto', // Added margin
      }}
    >
      <h2>Feedback Fom</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin='normal'
        />

        <TextField
          type='email'
          label='Email address'
          name='email'
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin='normal'
        />

        <TextField
          label='Subject'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          fullWidth
          required
          margin='normal'
        />

        <TextField
          label='Message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          required
          margin='normal'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.sendCopy}
              onChange={handleChange}
              name='sendCopy'
              color='primary'
            />
          }
          label='Send me copy'
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          style={{
            marginTop: '20px',
            backgroundColor: '#4caf50', // Added button background color
          }}
        >
          Send
        </Button>
      </form>
    </Paper>
  );
}
