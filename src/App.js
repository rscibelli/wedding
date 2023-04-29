import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import WebFont from 'webfontloader';
import SongRequest from './SongRequest/SongRequest';
import Sider from './Sider/Sider';
import Footer from './Footer/Footer';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Edu NSW ACT Foundation', 'Dancing Script', 'Montserrat', 'Sacramento', 'Amatic SC', 'Castoro Titling']
      }
    });
   }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Sider />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/song" element={<SongRequest />}/>
            <Route exact path="*" element={<Home />}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
