import React from 'react';
import "./Home.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
import sim from '../Pictures/sim.jpg';
import indie1 from '../Pictures/indie.jpg';
import indie2 from '../Pictures/indiebox.jpg';

export default function Home() {

  return (
    <div>
      <div class="hero-image-home">
        <div class="hero-text-home">
          <div className="maddie">
            <div>Madeline Muprhy</div>
          </div>
          <div className="rob">
            <div>Robert Scibelli</div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <h3 className='married-tag py-2'>Let's Celebrate!</h3>
        <p><small>the wedding between Madeline Murphy and Robert Scibelli</small></p>

        <div className='row py-5'>
          <div className='col text-end'>
            <h3>Bloom Meadows</h3>
            <p className='lead'>2422 Hancock Rd</p>
            <p className='lead'>Williamstown, MA 01267</p>
          </div>
          <div className='col-1 my-auto'>
            <div>
              <h3>&#x2022;</h3>
            </div>
          </div>
          <div className='col text-start'>
            <h3>August 3rd 2024</h3>
            <p className='lead'>at</p>
            <p className='lead'>3:30 pm</p>
          </div>
        </div>
      </div>

      <div>
        <div className='row py-4 px-3'>
          <div className='col '>
            <img
              src={indie1}
              className="w-100 rounded"
              alt="Boat on Calm Water"
            />
          </div>
          <div className='col '>
            <img
              src={sim}
              className="w-100 rounded"
              alt="Boat on Calm Water"
            />
          </div>
          <div className='col'>
            <img
              src={indie2}
              className="w-100 rounded"
              alt="Boat on Calm Water"
            />
          </div>
        </div>
      </div>

      <div className='py-4'>
        <h3 className='pb-3'>Hotel</h3>
        <p>A room block has been reserved at The Fairfield Inn & Suits in Williamstown</p>

        <h3><span class="badge rounded-pill text-bg-secondary">Aug 3rd - 4th</span></h3>

        <div className='row pt-4'>
          <div className='col my-auto text-end'>
            <button type="button" class="btn btn-outline-primary">Reserve a Room</button>
          </div>
          <div className='col-1 my-auto'>
            <div class="vr"></div>
          </div>
          <div className='col my-auto text-start'>
            <h5>(413) 458-7333</h5>
          </div>
        </div>

        <p className='pt-5'>A school bus is scheduled to pick people up in front of the hotel at 3pm on the 3rd</p>
        <p>The school bus will then take periodic trips back throughout the evening upon demand</p>
      </div>

      {/* <div className="ratio ratio-21x9">
        <iframe src="https://www.google.com/maps/d/u/2/embed?mid=16m_ZP6B3S2ezBgmEYDmAKciiTIunyZc&ehbc=2E312F" width="640" height="300"></iframe>      
        <iframe title='venue-on-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.89315990861!2d-73.28920042435702!3d42.6100874192696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ad8dc321d361%3A0x392a649d9754b318!2s2422%20Hancock%20Rd%2C%20Williamstown%2C%20MA%2001267!5e1!3m2!1sen!2sus!4v1682560243115!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div> */}

      <div className='row py-5 px-3'>
        <div className='col'>
          <div class="card w-100 p-3 ms-auto">
            <div class="card-body">
              <h3 class="card-title">Venue</h3>
            </div>
            <div class="ratio ratio-1x1">
            <iframe title='venue' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.892443559123!2d-73.28921762435705!3d42.61010401926851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ad8defac5625%3A0xc2c30cfc50759499!2sBloom%20Meadows!5e1!3m2!1sen!2sus!4v1682634849680!5m2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className='col'>
          <div class="card w-100 p-3 me-auto">
            <div class="card-body">
              <h3 class="card-title">Hotel</h3>
            </div>
            <div class="ratio ratio-1x1">
              <iframe title='hotel' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.55392055457!2d-73.19441925632063!3d42.70528969526227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ba1b77400001%3A0x3ce3e33730fd548b!2sFairfield%20Inn%20%26%20Suites%20by%20Marriott%20Williamstown!5e1!3m2!1sen!2sus!4v1682634560503!5m2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}