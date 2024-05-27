/*import logo from './logo.svg';*/
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
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
        <AppBar position="static" style={{ backgroundColor: '#1DB954' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              G_wake Analytics
            </Typography>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recent-tracks">Recent Tracks</Link></li>
                <li><Link to="/top-artists">Top Artists</Link></li>
                <li><Link to="/top-tracks">Top Tracks</Link></li>
                <li><Link to="/listening-history">Listening History</Link></li>
                <li><Link to="/genres">Genre</Link></li>
                <li><Link to="/top-genres">Top Genres</Link></li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>

        <Container className="container">
          <Routes>
            <Route path="/recent-tracks" element={<RecentTracks />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/top-tracks" element={<TopTracks />} />
            <Route path="/listening-history" element={<ListeningHistory />} />
            <Route path="/genres" element={<Genre />} />
            <Route path="/top-genres" element={<TopGenres />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>

        <footer>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} G_wake Analytics
          </Typography>
        </footer>
      </div>
    </Router>
  );
}

export default App;

