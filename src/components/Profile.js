import React from 'react';
import { Container, Typography, Avatar, Box } from '@mui/material';
import SkillChart from './SkillChart';

const Profile = () => {
  // Dummy data for the profile
  const profile = {
    name: "John Doe",
    position: "Software Engineer",
    avatar: "https://i.pravatar.cc/300",
    skills: [
      { name: "Python", level: 8 },
      { name: "SQL", level: 7 },
      { name: "Java", level: 6 },
      { name: "Spark", level: 5 },
      { name: "React", level: 9 },
    ],
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Avatar alt={profile.name} src={profile.avatar} sx={{ width: 100, height: 100, margin: 'auto' }} />
        <Typography variant="h4" component="h1" gutterBottom>
          {profile.name}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {profile.position}
        </Typography>
        <SkillChart skills={profile.skills} />
      </Box>
    </Container>
  );
};

export default Profile;
