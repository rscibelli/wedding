import React, { useState } from 'react';
import './Hotel.css'
import Modal from 'react-bootstrap/Modal';
import 'bootswatch/dist/minty/bootstrap.min.css';

export default function Home() {

    const [show, setShow] = useState(false);

    const toggleModal = () => setShow(!show)

    return(
        <div>
            <div className="hero-image-hotel">
                <div className="hero-text-hotel">
                    {/* <div className="lead">Hotel</div> */}
                </div>
            </div>

            <div className='py-4 px-3'>
                <h3 className='pb-3'>Hotel</h3>
                <p>A room block has been reserved at Jiminy Peak Resort & The Fairfield Inn & Suits</p>

                <h3><span className="badge rounded-pill text-bg-primary">Aug 2nd - 4th</span></h3>

                <div className='row pt-4'>
                    <div className='col my-auto text-end'>
                        <h5>Jiminy Peak Resort</h5>
                        <p>37 Corey Rd, Hancock, MA 01237</p>
                        <p>(413) 738-5500</p>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleModal}>Reserve a Room</button>
                    </div>
                    <div className='col-1 my-auto'>
                        <div className="vr" style={{height: "100px"}}></div>
                    </div>
                    <div className='col my-auto text-start'>
                        <h5>The Fairfield Inn & Suits</h5>
                        <p>430 Main St, Williamstown, MA 01267</p>
                        <p>(413) 458-7333</p>
                        <button type="button" className="btn btn-outline-primary" onClick={toggleModal}>Reserve a Room</button>
                    </div>
                </div>
            </div>

            {/* <hr className='w-75 mx-auto' /> */}

            <div className='row'>
                <div className='col mx-1 ratio ratio-1x1'>
                    <iframe title='jiminy' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.848895161038!2d-73.29256242406595!3d42.55565602272218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e752b2e3f484a5%3A0x3d75ffe634517335!2sJiminy%20Peak%20Mountain%20Resort!5e1!3m2!1sen!2sus!4v1695495185885!5m2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='col mx-1 ratio ratio-1x1'>
                    <iframe title='fairfield' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.55392055457!2d-73.19441925632063!3d42.70528969526227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ba1b77400001%3A0x3ce3e33730fd548b!2sFairfield%20Inn%20%26%20Suites%20by%20Marriott%20Williamstown!5e1!3m2!1sen!2sus!4v1682634560503!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* <div className="ratio ratio-16x9">
                <iframe title='hotel' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.55392055457!2d-73.19441925632063!3d42.70528969526227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ba1b77400001%3A0x3ce3e33730fd548b!2sFairfield%20Inn%20%26%20Suites%20by%20Marriott%20Williamstown!5e1!3m2!1sen!2sus!4v1682634560503!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> */}

            <div className='px-3 py-4'>
                <h3 className='mb-3'>Transportation</h3>
                <p>A school bus is scheduled to pick people up in front of the hotel at 3pm on the 3rd</p>
                <p>The bus will then take periodic trips back throughout the evening upon demand</p>
            </div>

            <div className='px-3 py-4'>
                <h3 className='pb-3'>Airbnb</h3>
                <p>There are several Airbnbs in the area that are available for rent</p>
                <p>See what's available using the button below</p>

                {/* <div class="btn-group-vertical">
                    <a href="https://www.airbnb.com/rooms/728439299070327263?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" class="btn btn-primary" role="button">Home in Williamstown · ★5.0 · 5 bedrooms · 7 beds · 2 baths</a>
                    <a href="https://www.airbnb.com/rooms/22952087?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" class="btn btn-primary" role="button">Rosecroft, Historic Home, Greylock Valley Estate</a>
                    <a href="https://www.airbnb.com/rooms/20970359?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" class="btn btn-primary" role="button">Sheep Barn on the Greylock Valley Estate</a>
                    <a href="https://www.airbnb.com/rooms/5561961?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" class="btn btn-primary" role="button">Charming Williamstown Cape</a>
                    <a href="https://www.airbnb.com/rooms/4873792?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" class="btn btn-primary" role="button">Walking distance to downtown</a>
                </div> */}

                <a href="https://www.airbnb.com/s/Williamstown--Massachusetts--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-10-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&query=Williamstown%2C%20MA&place_id=ChIJlS9W-hGx4IkR35lTbykWRkQ&date_picker_type=calendar&checkin=2024-08-02&checkout=2024-08-04&adults=5&source=structured_search_input_header&search_type=autocomplete_click" class="btn btn-primary" role="button">
                    Airbnb search
                </a>
                
                {/* <div class="airbnb-embed-frame" data-id="728439299070327263" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/728439299070327263?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/728439299070327263?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Home in Williamstown · ★5.0 · 5 bedrooms · 7 beds · 2 baths</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div> */}
                {/* <div class="airbnb-embed-frame" data-id="22952087" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/22952087?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/22952087?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Rosecroft, Historic Home, Greylock Valley Estate</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div> */}
                {/* <div class="airbnb-embed-frame" data-id="20970359" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/20970359?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/20970359?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Sheep Barn on the Greylock Valley Estate</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div> */}
                {/* <div class="airbnb-embed-frame" data-id="5561961" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/5561961?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/5561961?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Charming Williamstown Cape</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div> */}
                {/* <div class="airbnb-embed-frame" data-id="4873792" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/4873792?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/4873792?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Walking distance to downtown</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div> */}
            </div>

            <Modal show={show} onHide={toggleModal}>
                <Modal.Body className='text-center'>
                <h5>Coming soon!</h5>
                </Modal.Body>
            </Modal>
        </div>
    )
}