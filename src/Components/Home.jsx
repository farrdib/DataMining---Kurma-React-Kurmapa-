import React from 'react';
import './Home.css';
import logo from '../assets/images/fotobghome.png';

const Home = () => {
  return (
    <div className="home">
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="welcome-title">
            <span>Hi,</span>
            <img 
              src="https://assets.zyrosite.com/A85D79Zw2bcZMGKK/animation_640_lfz3plng-A3QBGjQE4EUy2rNG.gif" 
              alt="Selamat Datang" 
              className="welcome-gif"
            />
          </h1>
          <h2 className="title">Klasifikasi Jenis Kurma</h2>
          <h1 className="subtitle">Sistem ini bantu kamu menemukan kurma favoritmu, yuk coba!</h1>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Kurma" />
        </div>
      </section>
      <div className="wave wave-top"></div>
      <div className="wave wave-bottom"></div>
    </div>
  );
};

export default Home;
