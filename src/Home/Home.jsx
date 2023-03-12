import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This is required for the Carousel to work
import { Carousel } from 'react-responsive-carousel';
import meNmaddie from '../Pictures/meNmaddie.jpg'
import maddieAtSpot from '../Pictures/maddieAtSpot.jpg'

export default function Home() {

  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img width="100%" src={meNmaddie} alt="meNmaddie" />
        </div>
        <div>
          <img width="100%" src={maddieAtSpot} alt="maddieAtSpot" />
        </div>
      </Carousel>
    </div>
  );
}