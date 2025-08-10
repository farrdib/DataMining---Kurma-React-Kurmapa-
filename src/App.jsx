import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CheckData from './Components/Checkdata';
import Types from './Components/Types';
import History from './Components/History';
import About from './Components/About';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CheckData />
      <Types />
      <History />
      <About />
    </div>
  );
};

export default App;
