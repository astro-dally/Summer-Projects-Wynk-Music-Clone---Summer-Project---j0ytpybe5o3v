import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faSignOutAlt, faBars, faBarsProgress, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <img src="https://wynk.in/_next/static/media/icon-384x384.522e458f.png" alt="Wynk Music Logo" className="navbar-logo" />
          <span className="navbar-title">Wynk Music</span>
        </div>

        <div className="navbar-right">
          <div className="navbar-search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-search-icon" />
            <input type="text" placeholder="Search Songs" className="navbar-search" />
          </div>
          <button className="navbar-button"><span><FontAwesomeIcon icon={faBarsProgress} /></span> Manage Subscription</button>
          <button className="navbar-button">My Music</button>
          <div className="navbar-menu">
            <FontAwesomeIcon icon={faBars} />
            <div className="navbar-dropdown">
              <Link to="/profile" className="navbar-dropdown-item">
                <FontAwesomeIcon icon={faUser} /> View Profile
              </Link>
              <Link to="/favourite" className="navbar-dropdown-item">
                <FontAwesomeIcon icon={faHeart} /> Favourite
              </Link>
              <span className="navbar-dropdown-item"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">All</Link>
        <Link to="/trending" className="navbar-link">Trending Now</Link>
        <Link to="/music" className="navbar-link">Music</Link>
        <Link to="/album" className="navbar-link">Albums</Link>
      </div>
    </nav>
  );
};

export default Home;
