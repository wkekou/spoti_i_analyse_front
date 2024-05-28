import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const TopArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/top-artists/')
      .then(response => setArtists(response.data))
      .catch(error => console.error('Error fetching top artists:', error));
  }, []);

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
