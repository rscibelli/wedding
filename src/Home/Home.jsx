import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';
import one from '../Pictures/1.jpg';
import nine from '../Pictures/9.jpg';
import twentyfour from '../Pictures/24.jpg';
import thirtytwo from '../Pictures/32.jpg';
import fourtyone from '../Pictures/41.jpg';
import fiftythree from '../Pictures/53.jpg';
import fiftynine from '../Pictures/59.jpg';
import seventytwo from '../Pictures/72.jpg';
import oneeleven from '../Pictures/111.jpg';
import onetwenty from '../Pictures/120.jpg';
import onetwentytwo from '../Pictures/122.jpg';
import onetwentyeight from '../Pictures/128.jpg';
import onefourtyfive from '../Pictures/145.jpg';

export default function Home() {

  // const [show, setShow] = useState(false);
  // const toggleModal = () => setShow(!show)

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
            <p>4 O'Clock in the Afternoon</p>
          </div>
        </div>
      </div>

      <div className="ratio ratio-16x9">
        <iframe title='venue' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.892443559123!2d-73.28921762435705!3d42.61010401926851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ad8defac5625%3A0xc2c30cfc50759499!2sBloom%20Meadows!5e1!3m2!1sen!2sus!4v1682634849680!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className='py-5 x-5'>
        <h3>Food</h3>
        <p className='px-5 mx-5 pt-3'><small>All the delicious food is brought to you by <a href="http://sethmias.com/">Seth Mias</a></small></p>

        <div className='row pt-5'>
          <div className='col'>
            <h3 className='pb-2'>Hors D'Oeuvres</h3>
            <p>Coming Soon!</p>
            {/* <p>Buffalo Chicken Empanadas</p>
            <p>Mac and Cheese Fritters</p>
            <p>Miniature Beef Wellingtons</p> */}
          </div>
          <div className='col-1 mx-auto'>
            <div className="vr" style={{height: "100px"}}></div>
          </div>
          <div className='col'>
            <h3 className='pb-2'>Plated Dinner</h3>
            <p>Coming Soon!</p>
            {/* <p>Crème Brule Salmon Filets</p>
            <p>Chicken Francaise</p>
            <p>Roasted Vegetable Lasagna</p> */}
          </div>
        </div>
      </div>

      {/* pictures */}
      <div className="row px-1">
        <div className="col pe-1">
          <img
            src={one}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Boat on Calm Water"
          />

          <img
            src={fourtyone}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Wintry Mountain Landscape"
          />

          <img
            src={seventytwo}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Mountains in the Clouds"
          />

          <img
            src={onetwentytwo}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Mountains in the Clouds"
          />
        </div>

        <div className="col px-1">
          <img
            src={onetwentyeight}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Mountains in the Clouds"
          />

          <img
            src={fiftythree}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Boat on Calm Water"
          />

          <img
            src={fiftynine}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Mountains in the Clouds"
          />

          <img
            src={twentyfour}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Mountains in the Clouds"
          />

          <img
            src={oneeleven}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Mountains in the Clouds"
          />
        </div>

        <div className="col ps-1">
          <img
            src={thirtytwo}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Waves at Sea"
          />

          <img
            src={nine}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Yosemite National Park"
          />

          <img
            src={onetwenty}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Mountains in the Clouds"
          />

          <img
            src={onefourtyfive}
            className="w-100 shadow-1-strong rounded mb-2"
            alt="Mountains in the Clouds"
          />
        </div>
      </div>

      <div className='pt-4 px-3 pb-2'>
        <h3 className='pb-3'>The Wedding Party</h3>

        <div className='row pt-1'>
          <div className='col'>
            <h5 className='pb-2'>Bridesmaids</h5>
            <div><strong>Kelley Murphy</strong></div>
            <div><strong>Kay Kay Murphy</strong></div>
            <div>Carly Forcade</div>
            <div>Lauren Murphy</div>
            <div>Kara Duprey</div>
            <div>Sam Gilmore</div>
          </div>
          <div className='col-1 my-auto'>
            <div className="vr" style={{height: "100px"}}></div>
          </div>
          <div className='col'>
            <h5 className='pb-2'>Groomsmen</h5>
            <div><strong>Jon Scibelli</strong></div>
            <div><strong>Mike Scibelli</strong></div>
            <div>Evan O'Keefe</div>
            <div>Paul Kavanagh</div>
            <div>Max Winalski</div>
            <div>Donald Odell</div>
          </div>
        </div>

        <h5 className='mb-0 py-3'>Officiant</h5>
        <p>Benjamin Murphy</p>
      </div>

      <div className='pt-3 px-3'>
        <h3 className='pb-1'>Other</h3>
        {/* <button type='button' className="btn btn-primary" onClick={toggleModal}>Registry</button> */}
        <a className="btn btn-primary" role="button" target='_blank' rel="noreferrer" href='https://registry.theknot.com/madeline-murphy-robert-scibelli-august-2024-ma/56845309'>
          Registry
        </a>
      </div>

      <div className='py-4'>
        <h6>Navigate this website</h6>

        <div className="btn-group" role="group">
            <Link type="button" className="btn btn-info" to="/hotel">Hotel</Link>
            {/* <Link type="button" className="btn btn-info" to="/parties">Party</Link> */}
            <Link type="button" className="btn btn-info" to="/song">Song</Link>
        </div>
      </div>

      {/* <Modal show={show} onHide={toggleModal}>
        <Modal.Body className='text-center'>
          <h5>Registry coming soon!</h5>
        </Modal.Body>
      </Modal> */}

    </div>
  );
}