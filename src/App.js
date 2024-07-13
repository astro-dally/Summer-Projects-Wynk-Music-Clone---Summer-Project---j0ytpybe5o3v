// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';
import Trending from './components/Trending';
import MyMusic from './components/MyMusic';
import Music from './components/Music';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import Favourites from './components/Favourites';
import ArtistDetails from './components/ArtistDetails';
import Search from './components/Search';
import Profile from './components/Profile';
import Subscription from './components/Subscription';
import Playlist from './components/Playlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/mymusic" element={<MyMusic />} />
        <Route path="/music" element={<Music />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/album/:id" element={<AlbumDetails />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/artist/:id" element={<ArtistDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default App;
