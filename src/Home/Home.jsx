import React from 'react';
import "./Home.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
import sim from '../Pictures/sim.jpg';
import indie1 from '../Pictures/indie.jpg';
import indie2 from '../Pictures/indiebox.jpg';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div>
      <div className="hero-image-home">
        <div className="hero-text-home">
          <div>Madeline Muprhy</div>
          <div>Robert Scibelli</div>
        </div>
      </div>

      <div className="pt-5 px-3">
        <h3 className='married-tag py-2'>Let's Celebrate!</h3>
        <p><small>the wedding between Madeline Murphy and Robert Scibelli</small></p>

        <div className='row py-5'>
          <div className='col text-end'>
            <h4 className='pb-2'>Bloom Meadows</h4>
            <p>2422 Hancock Rd</p>
            <p>Williamstown, MA 01267</p>
          </div>
          <div className='col-1 my-auto'>
            <div>
              <h3>&#x2022;</h3>
            </div>
          </div>
          <div className='col text-start'>
            <h4 className='pb-2'>August 3rd 2024</h4>
            <p>at</p>
            <p>3:30 pm</p>
          </div>
        </div>
      </div>

      <div className="ratio ratio-16x9">
        <iframe title='venue' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.892443559123!2d-73.28921762435705!3d42.61010401926851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ad8defac5625%3A0xc2c30cfc50759499!2sBloom%20Meadows!5e1!3m2!1sen!2sus!4v1682634849680!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className='pt-4'>
        <h6>Navigate this Website</h6>
        <div className='row px-5 pt-2'>
            <div className='col my-auto'>
              <Link type="button" class="btn btn-info" to="/hotel">Hotel Info</Link>
            </div>
            <div className='col-1 my-auto'>
                <div className="vr"></div>
            </div>
            <div className='col my-auto'>
            <Link type="button" class="btn btn-info" to="/parties">Parties</Link>
            </div>
            <div className='col-1 my-auto'>
                <div className="vr"></div>
            </div>
            <div className='col my-auto'>
            <Link type="button" class="btn btn-info" to="/song">Song Reqeust</Link>
            </div>
        </div>
      </div>

      <div className='py-5 px-3'>
        <h3>Food</h3>
        <p className='px-5 mx-5 pt-3'><small>The food is scheduled to be served at 6pm. We tried to choose food options that were flexible to all dietary retrictions.  If any of these options do not work for you let us know!  We will also have options for kids dinners as well</small></p>

        <div className='row pt-5'>
          <div className='col'>
            <h3 className='pb-2'>Hors D'Oeuvres</h3>
            <p>Buffalo Chicken Empanadas</p>
            <p>Mac and Cheese Fritters</p>
            <p>Miniature Beef Wellingtons</p>
          </div>
          <div className='col-1 mx-auto'>
            <div className="vr" style={{height: "150px"}}></div>
          </div>
          <div className='col'>
            <h3 className='pb-2'>Plated Dinner</h3>
            <p>Crème Brule Salmon Filets</p>
            <p>Chicken Francaise</p>
            <p>Roasted Vegetable Lasagna</p>
          </div>
        </div>

        <p className='pt-5'><small>All this delicious food is brought to you by <a href="http://sethmias.com/">Seth Mias</a></small></p>
      </div>

      <div className='row py-4 px-3'>
        <div className='col'>
          <img
            src={indie1}
            className="w-100 rounded"
            alt="Boat on Calm Water"
          />
        </div>
        <div className='col my-auto'>
          <img
            src={sim}
            className="w-100 rounded"
            alt="Boat on Calm Water"
          />
        </div>
        <div className='col my-auto'>
          <img
            src={indie2}
            className="w-100 rounded"
            alt="Boat on Calm Water"
          />
        </div>
      </div>

      <div className='row py-5 px-3'>
        <div className='col'>
          <h3 className='pb-2'>Schedule</h3>
          <p>Ceremony - 3:30-4</p>
          <p>Cocktail Hour - 4-5</p>
          <p>Dinner - 5-6</p>
          <p>Reception - 6-10</p>
        </div>
        <div className='col-1 my-auto'>
          <div className="vr" style={{height: "200px"}}></div>
        </div>
        <div className='col'>
          <h3 className='pb-2'>Other Information</h3>
          <button type="button" className="btn btn-primary">Registry</button>
        </div>
      </div>

    </div>
  );
}