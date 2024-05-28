import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography, Button } from '@mui/material';

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState('http://localhost:8000/api/genres/');
  const [loading, setLoading] = useState(true);

  const fetchGenres = async () => {
    if (!nextPageUrl) return;

    try {
      const response = await axios.get(nextPageUrl);
      const newGenres = response.data.results ? response.data.results : response.data;
      setGenres(prevGenres => [...prevGenres, ...newGenres]);
      setNextPageUrl(response.data.next);
    } catch (error) {
      console.error('Error fetching genres:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (genres.length === 0) {
    return <Typography variant="h6">No genres found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Genres
      </Typography>
      <List>
        {genres.map((genre, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText primary={genre.name} />
          </ListItem>
        ))}
      </List>
      {nextPageUrl && (
        <Button variant="contained" color="primary" onClick={fetchGenres}>
          Load More
        </Button>
      )}
    </div>
  );
}

export default Genres;
