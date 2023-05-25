import React from 'react';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => (
  <nav className="navBar">
    <div className="logo">Air Checker</div>
    <div className="nav-icons">
      <FaMicrophone className="nav-icon" />
      <FaCog className="nav-icon" />
    </div>
  </nav>
);

export default NavBar;
