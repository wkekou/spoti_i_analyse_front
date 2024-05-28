import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const TopArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/top-artists/');
        if (Array.isArray(response.data)) {
          setArtists(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching top artists:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtists();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (artists.length === 0) {
    return <Typography variant="h6">No top artists found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Top Artists
      </Typography>
      <List>
        {artists.map((artist, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={artist.name} src={artist.image_url} />
            </ListItemAvatar>
            <ListItemText
              primary={artist.name}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {artist.description ? artist.description : "No description available"}
                  </Typography>
                  <br />
                  {artist.is_followed ? "You are following this artist" : "You are not following this artist"}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TopArtists;
