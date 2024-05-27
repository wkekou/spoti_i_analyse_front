import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {
  const [setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/update-spotify-data/')
      .then(response => setData(response.data))
      .catch(error => console.error('Error updating spotify data:', error));
  });

  return (
    <div>
      <h1>Welcome to Spotify Analytics</h1>
      <p>Select a category from the menu to see more details.</p>
    </div>
  );
}

export default Home;
