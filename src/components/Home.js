import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Paper, Grid } from '@mui/material';


const Home = () => {
  const [setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/update-spotify-data/')
      .then(response => setData(response.data))
      .catch(error => console.error('Error updating spotify data:', error));
  });

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#282828', color: '#FFFFFF' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to G_wake Analytics
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Discover and analyze your listening habits with our powerful analytics tools.
      </Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={1} style={{ padding: '10px', backgroundColor: '#1DB954', color: '#FFFFFF' }}>
            <Typography variant="h6" component="h2">
              Recent Tracks
            </Typography>
            <Typography variant="body2" component="p">
              View the tracks you've recently listened to.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={1} style={{ padding: '10px', backgroundColor: '#1DB954', color: '#FFFFFF' }}>
            <Typography variant="h6" component="h2">
              Top Artists
            </Typography>
            <Typography variant="body2" component="p">
              Discover your most listened artists.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={1} style={{ padding: '10px', backgroundColor: '#1DB954', color: '#FFFFFF' }}>
            <Typography variant="h6" component="h2">
              Top Tracks
            </Typography>
            <Typography variant="body2" component="p">
              See your most played tracks.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Home;
