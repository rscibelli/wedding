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
                <h3 className='pb-3'>Hotel</h3>

                <div className="alert alert-secondary" role="alert">
                    Be sure to book the hotel by June 18th for the discounted rate!
                </div>

                <p>A room block has been reserved at The Fairfield Inn & Suites. There is a 2 night minimum with the room block. However, guests can still book a one night stay at the regular hotel rate outside the room block. There are also several Airbnbs in the area, see link below.</p>

                <h5 className='pt-3'>The Fairfield Inn & Suits</h5>
                <p>430 Main St, Williamstown, MA 01267</p>
                <h3><span className="badge rounded-pill text-bg-primary">Aug 2nd - 4th</span></h3>
                <div className='row pt-2'>
                    <div className='col my-auto'>
                        <a href='https://www.marriott.com/event-reservations/reservation-link.mi?id=1698877501719&key=GRP&app=resvlink' target="_blank" rel="noreferrer">
                            <button type="button" className="btn btn-outline-primary">Reserve a Room</button>
                        </a>
                    </div>
                    <div className='col-1 my-auto'>
                        <div className="vr"></div>
                    </div>
                    <div className='col my-auto'>
                        <p className='mb-0 pt-2'><strong>(413) 458-7333</strong></p>
                        <p><small>Under Murphy/Scibelli</small></p>
                    </div>
                </div>
            </div>

            <div className='ratio ratio-16x9'>
                <iframe title='fairfield' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.55392055457!2d-73.19441925632063!3d42.70528969526227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0ba1b77400001%3A0x3ce3e33730fd548b!2sFairfield%20Inn%20%26%20Suites%20by%20Marriott%20Williamstown!5e1!3m2!1sen!2sus!4v1682634560503!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='px-3 py-4'>
                <h3 className='mb-3'>Transportation</h3>
                <p className='mb-0'>Two school busses are scheduled to pick guests up in front of the hotel at 3:15pm & 3:30pm on the 3rd.</p>
                <p>The bus will then take periodic trips back throughout the evening, upon demand.</p>
            </div>

            <div className='px-3 py-4'>
                <h3 className='pb-2'>Airbnb</h3>
                <p className='mb-0'>There are several Airbnbs in the area that are available for rent.</p>
                <p>See what's available using the button below.</p>

                <a href="https://www.airbnb.com/s/Williamstown--Massachusetts--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-10-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&query=Williamstown%2C%20MA&place_id=ChIJlS9W-hGx4IkR35lTbykWRkQ&date_picker_type=calendar&checkin=2024-08-02&checkout=2024-08-04&adults=5&source=structured_search_input_header&search_type=autocomplete_click" className="btn btn-primary" role="button">
                    Airbnb search
                </a>
            </div>
        </div>
    )
}