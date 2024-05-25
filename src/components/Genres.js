import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/genres/')
      .then(response => setGenres(response.data))
      .catch(error => console.error('Error fetching genres:', error));
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
