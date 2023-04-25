import React from 'react';
import "./Home.css";
// import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from '../Carousel/Carousel.jsx';
import beach from '../Pictures/beach-dark.jpg'
import usAtBridge from '../Pictures/usAtBridge.jpg'
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
        <img className='beach' src={beach} alt="beach" />
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
        <div className="date">August 3rd 2024</div>
        <div className="atSymbol">at</div>
        <div className="bloom">Bloom Meadows</div>
        <div className="address">2422 Hancock Rd</div>
        <div className="address">Williamstown, MA 01267</div>
      </div>

      <div className='hotel'>
        <img className='usAtBridge' src={usAtBridge} alt="usAtBridge" />
        <div className='hotelItem'>Hotels</div>
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