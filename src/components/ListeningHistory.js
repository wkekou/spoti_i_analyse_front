import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListeningHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/listening-history/')
      .then(response => setHistory(response.data))
      .catch(error => console.error('Error fetching listening history:', error));
  }, []);

  return (
    <div>
      <h2>Listening History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.track.name} listened {item.count} times</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeningHistory;
