import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Simulate a login process
    history.push('/profile');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Employee Login
        </Typography>
        <Box component="form" sx={{ mt: 4 }}>
          <TextField label="Username" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 3 }}>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
