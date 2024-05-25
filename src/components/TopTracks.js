import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/top-tracks/')
      .then(response => setTracks(response.data))
      .catch(error => console.error('Error fetching top tracks:', error));
  }, []);

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>{track.name} by {track.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopTracks;
