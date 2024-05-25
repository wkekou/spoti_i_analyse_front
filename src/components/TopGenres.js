import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Genre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/top-genres/')
      .then(response => {
        console.log(response.data);  // Pour déboguer
        setGenres(response.data);
      })
      .catch(error => console.error('Error fetching genres:', error));
  }, []);

  return (
    <div>
      <h2>Top Genres</h2>
      <ul>
        {genres.map((genreData, index) => (
          <li key={index}>
            {genreData.genre.name}: {genreData.count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genre;
