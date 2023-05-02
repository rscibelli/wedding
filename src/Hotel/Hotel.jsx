import React from 'react';
import './Hotel.css'
import 'bootswatch/dist/minty/bootstrap.min.css';

export default function Home() {
    return(
        <div>
            <div className="hero-image-hotel">
                <div className="hero-text-hotel">
                    {/* <div className="lead">Hotel</div> */}
                </div>
            </div>

            <div className='py-4 px-3'>
                <h5 className='pb-3'>Hotel</h5>
                <p>A room block has been reserved at The Fairfield Inn & Suits in Williamstown</p>

                <h3><span className="badge rounded-pill text-bg-secondary">Aug 3rd - 4th</span></h3>

                <div className='row pt-4'>
                    <div className='col my-auto text-end'>
                        <button type="button" className="btn btn-outline-primary">Reserve a Room</button>
                    </div>
                    <div className='col-1 my-auto'>
                        <div className="vr"></div>
                    </div>
                    <div className='col my-auto text-start'>
                        <h5>(413) 458-7333</h5>
                    </div>
                </div>
            </div>

            <hr className='w-75 mx-auto' />

            <div className='px-3 py-4'>
                <h5 className='pb-4'>Transportation</h5>
                <p>A school bus is scheduled to pick people up in front of the hotel at 3pm on the 3rd</p>
                <p>The bus will then take periodic trips back throughout the evening upon demand</p>
            </div>

            <div className="ratio ratio-16x9">
                <iframe title='hotel' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.55392055457!2d-73.19441925632063!3d42.70528969526227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ba1b77400001%3A0x3ce3e33730fd548b!2sFairfield%20Inn%20%26%20Suites%20by%20Marriott%20Williamstown!5e1!3m2!1sen!2sus!4v1682634560503!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='px-3 py-4'>
                <h5 className='pb-3'>Airbnb</h5>
                <p>There are several Airbnbs in the area that are available for rent</p>
                
                <div class="airbnb-embed-frame" data-id="728439299070327263" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/728439299070327263?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/728439299070327263?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">NEW! Renovated Gem in the Heart of Williamstown MA</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div>
                <div class="airbnb-embed-frame" data-id="21312523" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/21312523?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/21312523?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">The perfect Berkshire retreat, close to skiing.</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div>
                <div class="airbnb-embed-frame" data-id="22952087" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/22952087?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/22952087?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Rosecroft, Historic Home, Greylock Valley Estate</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div>
                <div class="airbnb-embed-frame" data-id="20970359" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/20970359?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/20970359?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Sheep Barn on the Greylock Valley Estate</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div>
                <div class="airbnb-embed-frame" data-id="5561961" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/5561961?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/5561961?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Charming Williamstown Cape</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div>
                <div class="airbnb-embed-frame" data-id="4873792" data-view="home" style={{width:"450px;", height:"300px;", margin:"auto"}}>
                    <a href="https://www.airbnb.com/rooms/4873792?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
                    <a href="https://www.airbnb.com/rooms/4873792?check_in=2024-08-02&amp;check_out=2024-08-04&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget" rel="nofollow">Walking distance to downtown</a>
                    <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk" />
                </div>
            </div>

        </div>
    )
}