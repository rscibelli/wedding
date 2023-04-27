import React from 'react';
import "./Home.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from '../Carousel/Carousel.jsx';
import beach from '../Pictures/beach-dark.jpg'
// import usAtBridge from '../Pictures/usAtBridge.jpg'
// import bloom from '../Pictures/bloom.jpeg';
import sim from '../Pictures/sim.jpg';
import indie1 from '../Pictures/indie.jpg';
import indie2 from '../Pictures/indiebox.jpg';
// import river from '../Pictures/river.jpg'
// import josh from '../Pictures/josh.jpg'
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
        <img className='beach' src={beach} alt="beach" />
        <div className="mask">
          <div className="names">
            <div >
              <div className="maddie">
                <div>Madeline Muprhy</div>
              </div>
              <div className="rob">
                <div>Robert Scibelli</div>
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

      <div className='pb-2 w-100'>
        <div className='row py-5'>
          <div className='col my-auto'>
            <img
              src={indie1}
              className="w-75 rounded"
              alt="Boat on Calm Water"
            />
          </div>
          <div className='col my-auto'>
            <img
              src={sim}
              className="w-75 rounded"
              alt="Boat on Calm Water"
            />
          </div>
          <div className='col my-auto'>
            <img
              src={indie2}
              className="w-75 rounded"
              alt="Boat on Calm Water"
            />
          </div>
        </div>
      </div>

      <div className='pb-2 w-100'>
        <div className='row py-5'>
          <div className='col'>
            <div className="jumbotron text-end">
              <h1 className="display-6">3:30 pm</h1>
              <p className="lead">Ceremony</p>
            </div>
          </div>
          <div className='col my-auto'>
            <div className="">
              <h3>&#x2022;</h3>
            </div>
          </div>
          <div className='col'>
            <div className="jumbotron text-start">
              <h1 className="display-6">6:00 pm</h1>
              <p className="lead">Reception</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ratio ratio-21x9">
        {/* <iframe src="https://www.google.com/maps/d/u/2/embed?mid=16m_ZP6B3S2ezBgmEYDmAKciiTIunyZc&ehbc=2E312F" width="640" height="300"></iframe>       */}
        <iframe title='venue-on-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.89315990861!2d-73.28920042435702!3d42.6100874192696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ad8dc321d361%3A0x392a649d9754b318!2s2422%20Hancock%20Rd%2C%20Williamstown%2C%20MA%2001267!5e1!3m2!1sen!2sus!4v1682560243115!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* <div className='hotel'>
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
      </div> */}

      <div className="py-4">
        <div className="lead pb-3">Got a song you'd like to reqeust?</div>
        <SongRequest/>
      </div>
      <Footer />
    </div>
  );
}