import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Genre = () => {
  const [topGenres, setTopGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopGenres = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/top-genres/');
        if (Array.isArray(response.data)) {
          setTopGenres(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching top genres:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopGenres();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (topGenres.length === 0) {
    return <Typography variant="h6">No top genres found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Top Genres
      </Typography>
      <List>
        {topGenres.map((topGenre, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={topGenre.genre.name}
              secondary={`Count: ${topGenre.count}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Genre;
