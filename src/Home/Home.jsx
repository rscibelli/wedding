import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This is required for the Carousel to work
import "./Home.css"
import { Carousel } from 'react-responsive-carousel';
import meNmaddie from '../Pictures/meNMaddieMod.jpg'
import maddieAtSpot from '../Pictures/maddieAtSpotMod.jpg'
import beach from '../Pictures/beachMod.jpg'
import faceMod from '../Pictures/maddieFaceMod.jpg'
import Footer from '../Footer/Footer.jsx';

export default function Home() {

  return (
    <div>
      {/* 5000x1471 */}
      <Carousel autoPlay>
        <div>
          <img width="100%" src={meNmaddie} alt="meNmaddie" />
        </div>
        <div>
          <img width="100%" src={beach} alt="beach" />
        </div>
        <div>
          <img width="100%" src={maddieAtSpot} alt="maddieAtSpot" />
        </div>
        <div>
          <img width="100%" src={faceMod} alt="faceMod" />
        </div>
      </Carousel>
      <div class="names">
        <div class="secondBox">
          <div class="secondBoxItem">Please Join us in Celebraing...</div>
        </div>
        <div class="thirdBox">
          <div class="thirdBoxItem">Madeline Murphy</div>
          <div class="thirdBoxItem">&</div>
          <div class="thirdBoxItem">Robert Scibelli</div>
        </div>
      </div>
      <div class="venue">
        <div class="atSymbol">at</div>
        <div class="bloom">Bloom Meadows</div>
        <div class="address">2422 Hancock Rd</div>
        <div class="address">Williamstown, MA 01267</div>
      </div>
      <Footer />
    </div>
  );
}