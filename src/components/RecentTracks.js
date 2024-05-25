import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recent-tracks/')
      .then(response => setTracks(response.data))
      .catch(error => console.error('Error fetching recent tracks:', error));
  }, []);

  return (
    <div>
      <h2>Recent Tracks</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>{track.name} by {track.artist} played at {track.played_at}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTracks;
