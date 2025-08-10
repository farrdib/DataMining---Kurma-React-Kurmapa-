import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Pastikan path ini benar
import logo from '../assets/images/logo5.png';

const Navbar = () => {
  return (
    <nav>
      {<div className="logo">
        <img src={logo} alt="Logo" />
      </div> }
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Beranda</Link></li>
        <li><Link to="checkdata" smooth={true} duration={500}>Cek Data</Link></li>
        <li><Link to="types" smooth={true} duration={500}>Jenis</Link></li>
        <li><Link to="history" smooth={true} duration={500}>Sejarah</Link></li>
        <li><Link to="about" smooth={true} duration={500}>Tentang</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
