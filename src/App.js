/*import logo from './logo.svg';*/
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecentTracks from './components/RecentTracks';
import TopArtists from './components/TopArtists';
import TopTracks from './components/TopTracks';
import ListeningHistory from './components/ListeningHistory';
import Genre from './components/Genres';
import TopGenres from './components/TopGenres';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/recent-tracks">Recent Tracks</Link></li>
            <li><Link to="/top-artists">Top Artists</Link></li>
            <li><Link to="/top-tracks">Top Tracks</Link></li>
            <li><Link to="/listening-history">Listening History</Link></li>
            <li><Link to="/genres">Genre</Link></li>
            <li><Link to="/top-genres">Top Genres</Link></li>
          </ul>
        </nav>

        <Routes>
        <Route path="/recent-tracks" element={<RecentTracks />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-tracks" element={<TopTracks />} />
          <Route path="/listening-history" element={<ListeningHistory />} />
          <Route path="/genres" element={<Genre />} />
          <Route path="/top-genres" element={<TopGenres />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

