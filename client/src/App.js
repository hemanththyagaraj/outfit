import React from 'react';
import Navbar from './components/layouts/navbar/navbar';
import OutfitBase from './base';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <OutfitBase />
    </Router>
  );
}

export default App;
