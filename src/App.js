import React, { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import WebFont from 'webfontloader';
import SongRequest from './SongRequest/SongRequest';
import Sider from './Sider/Sider';
import Footer from './Footer/Footer';
import Hotel from './Hotel/Hotel';
import Parties from './Parties/Parties';

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
      <HashRouter>
        <div>
          <Sider />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/song" element={<SongRequest />}/>
            <Route exact path="/accomidations" element={<Hotel />}/>
            <Route exact path="/parties" element={<Parties />}/>
            <Route exact path="*" element={<Home />}/>
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
