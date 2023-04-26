import React from 'react';
import "./Home.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from '../Carousel/Carousel.jsx';
import beach from '../Pictures/beach-dark.jpg'
// import usAtBridge from '../Pictures/usAtBridge.jpg'
import bloom from '../Pictures/bloom.jpeg';
import sim from '../Pictures/sim.jpg';
import indie1 from '../Pictures/indie.jpg';
import indie2 from '../Pictures/indiebox.jpg';
import river from '../Pictures/river.jpg'
import josh from '../Pictures/josh.jpg'
import Footer from '../Footer/Footer.jsx';
import SongRequest from '../SongRequest/SongRequest';

export default function Home() {

  return (
    <div>
      {/* <header style={{ paddingLeft: 0 }}>
        <div
          className='text-center bg-image hero'
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='text-white'>
                <h1 className='mb-3 lead'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <div className='pictureAndNames'>
        <img className='beach rounded' src={beach} alt="beach" />
        <div className="mask">
          <div className="names">
            <div >
              <div className="maddie">
                <div>Madeline Muprhy</div>
                {/* <div>Murphy</div> */}
              </div>
              <div className="rob">
                <div>Robert Scibelli</div>
                {/* <div>Scibelli</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="venue">
        <h3 className='married-tag pt-4 pb-3'>Join Us In Celebrating</h3>
        <p><small>the wedding between Madeline Murphy and Robert Scibelli</small></p>

        <div className="married-tag pb-2 pt-4">August 3rd 2024</div>
        <p><small>at</small></p>
        <div className="married-tag pb-2">Bloom Meadows</div>
        <div className="address">2422 Hancock Rd</div>
        <div className="address">Williamstown, MA 01267</div>
      </div>

      <div className='pb-2'>
        <div className='row py-5'>
          <div className='col'>
            <img
              src={indie1}
              class="w-75 rounded"
              alt="Boat on Calm Water"
            />
          </div>
          <div className='col'>
            <img
              src={sim}
              class="w-75 rounded"
              alt="Boat on Calm Water"
            />
          </div>
          <div className='col'>
            <img
              src={indie2}
              class="w-75 rounded"
              alt="Boat on Calm Water"
            />
          </div>
        </div>
      </div>

      <div className='hotel'>
        <img className='bloom-pic rounded' src={bloom} alt="usAtBridge" />
        <div className='hotel-text'>
          <p className='lead'>Events</p>
          <p>Ceramony 3:30</p>
          <p>Cocktail hour 4</p>
          <p>Announcements + Speeches 5</p>
          <p>Reception to follow</p>
        </div>
      </div>

      <div className='transportation'>
        <div className='transpItem'>Transportation</div>
        <img className='river' src={river} alt="river" />
      </div>

      <div className='party'>
        <img className='josh' src={josh} alt="josh" />
        <div className='partyItem'>The Wedding party</div>
      </div>

      <div className='food'>
        <div className='foodItem'>Food</div>
      </div>

      <div className="song">
        <div className="lead">Got a song you'd like to reqeust?</div>
        <SongRequest/>
      </div>
      <Footer />
    </div>
  );
}