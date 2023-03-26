import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This is required for the Carousel to work
import "./Home.css"
import { Carousel } from 'react-responsive-carousel';
import meNmaddie from '../Pictures/meNMaddieMod.jpg'
import maddieAtSpot from '../Pictures/maddieAtSpotMod.jpg'
import beach from '../Pictures/beachMod.jpg'
import faceMod from '../Pictures/maddieFaceMod.jpg'
import Footer from '../Footer/Footer.jsx';
import Button from '@mui/material/Button';
import SongRequest from '../SongRequest/SongRequest';

export default function Home() {
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img src={meNmaddie} alt="meNmaddie" />
        </div>
        <div>
          <img src={beach} alt="beach" />
        </div>
        <div>
          <img src={maddieAtSpot} alt="maddieAtSpot" />
        </div>
        <div>
          <img src={faceMod} alt="faceMod" />
        </div>
      </Carousel>
      <div class="names">
        <div class="secondBox">
          <div class="secondBoxItem">Please Join us in Celebraing...</div>
        </div>
        <div class="thirdBox">
          <div class="thirdBoxItem">
            <div>Madeline</div>
            <div>Murphy</div>
          </div>
          <div class="andSymbol">&</div>
          <div class="thirdBoxItem">
            <div>Robert</div>
            <div>Scibelli</div>
          </div>
        </div>
      </div>
      <div class="venue">
        <div class="atSymbol">at</div>
        <div class="bloom">Bloom Meadows</div>
        <div class="address">2422 Hancock Rd</div>
        <div class="address">Williamstown, MA 01267</div>
      </div>
      <div class="song">
        <div class="song-text">Got a song you'd like to reqeust?</div>
        <Button variant="contained" onClick={toggleModal}>Request a Song!</Button>
        <SongRequest modalState={modal} toggleModal={toggleModal}/>
      </div>
      <Footer />
    </div>
  );
}