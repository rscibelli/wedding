import React from 'react';
import './Parties.css'
import 'bootswatch/dist/minty/bootstrap.min.css';

export default function Parties() {
    return(
        <div>
            <div className="hero-image-party">
                <div className="hero-text-party">
                    {/* <div className="lead">Party</div> */}
                </div>
            </div>

            <div className='py-4 px-3'>
                <h3 className='pb-3'>The Wedding Parties</h3>

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
                        <div className="vr" style={{height: "150px"}}></div>
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
            </div>

            <hr className='w-75 mx-auto' />

            <div className='py-4 px-3'>
                <h3 className='pb-3'>Schedule</h3>
                <p>There will be things here</p>
            </div>
        </div>
    )
}