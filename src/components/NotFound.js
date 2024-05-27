import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for might have been removed or is temporarily unavailable.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
