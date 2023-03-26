import React from 'react';
import "./Home.css"
import Carousel from '../Carousel/Carousel.jsx';
import beach from '../Pictures/beach.jpg'
import usAtBridge from '../Pictures/usAtBridge.jpg'
import river from '../Pictures/river.jpg'
import josh from '../Pictures/josh.jpg'
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
      <div className='pictureAndNames'>
        {/* <Carousel /> */}
        <img className='beach' src={beach} alt="beach" />
        <div className="names">
          <div className="secondBox">
            <div className="secondBoxItem">Please Join Us In Celebrating</div>
          </div>
          <div className="thirdBox">
            <div className="thirdBoxItem">
              <div>Madeline</div>
              <div>Murphy</div>
            </div>
            <div className="andSymbol">&</div>
            <div className="thirdBoxItem">
              <div>Robert</div>
              <div>Scibelli</div>
            </div>
          </div>
        </div>
      </div>

      <div className="venue">
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
        <div className="song-text">Got a song you'd like to reqeust?</div>
        <Button variant="contained" onClick={toggleModal}>Request a Song!</Button>
        <SongRequest modalState={modal} toggleModal={toggleModal}/>
      </div>
      <Footer />
    </div>
  );
}