import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import { format } from 'date-fns';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/top-tracks/')
      .then(response => setTracks(response.data))
      .catch(error => console.error('Error fetching top tracks:', error));
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Top Tracks
      </Typography>
      <List>
        {tracks.map((track, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={track.artist} src={track.artist_image} />
            </ListItemAvatar>
            <ListItemText
              primary={track.name}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {track.artist}
                  </Typography>
                  {` — ${format(new Date(track.played_at), 'PPP p')}`}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TopTracks;
