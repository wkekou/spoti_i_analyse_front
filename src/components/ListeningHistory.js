import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Button } from '@mui/material';
import { format } from 'date-fns';

const ListeningHistory = () => {
  const [history, setHistory] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState('http://localhost:8000/api/listening-history/');

  const fetchListeningHistory = async () => {
    if (!nextPageUrl) return;

    try {
      const response = await axios.get(nextPageUrl);
      setHistory(prevHistory => [...prevHistory, ...response.data.results]);
      setNextPageUrl(response.data.next);
    } catch (error) {
      console.error('Error fetching listening history:', error); 
    }
  };

  useEffect(() => {
    fetchListeningHistory();
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Listening History
      </Typography>
      <List>
        {history.map((track, index) => (
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
                  <br />
                  {`Recorded at: ${format(new Date(track.recorded_at), 'PPP p')}`}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      {nextPageUrl && (
        <Button variant="contained" color="primary" onClick={fetchListeningHistory}>
          Load More
        </Button>
      )}
    </div>
  );
}

export default ListeningHistory;
