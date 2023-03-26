import React, { useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Edu NSW ACT Foundation', 'Dancing Script', 'Montserrat']
      }
    });
   }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
