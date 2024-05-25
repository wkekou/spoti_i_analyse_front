import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/top-artists/')
      .then(response => setArtists(response.data))
      .catch(error => console.error('Error fetching top artists:', error));
  }, []);

  return (
    <div>
      <h2>Top Artists</h2>
      <ul>
        {artists.map((artist, index) => (
          <li key={index}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopArtists;
