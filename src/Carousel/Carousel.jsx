import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This is required for the Carousel to work
import "./Carousel.css"
import { Carousel } from 'react-responsive-carousel';
import meNmaddie from '../Pictures/meNMaddieMod.jpg'
import maddieAtSpot from '../Pictures/maddieAtSpotMod.jpg'
import beach from '../Pictures/beachMod.jpg'
import faceMod from '../Pictures/maddieFaceMod.jpg'

export default function PictureCarousel() {
    return (
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
    )
}
