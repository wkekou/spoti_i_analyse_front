import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import { format } from 'date-fns';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/top-tracks/');
        if (Array.isArray(response.data)) {
          setTracks(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopTracks();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (tracks.length === 0) {
    return <Typography variant="h6">No top tracks found.</Typography>;
  }

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
