import React from 'react';
import { Link } from 'react-router-dom';
import './Sider.css';
import 'bootswatch/dist/minty/bootstrap.min.css';

export default function Sider() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg opaque-black-bg">
            <div className="container-fluid justify-content-start px-3">
                <Link className="navbar-brand" to="/">MadRob</Link>
                <Link className="nav-link" to="/hotel">Hotel</Link>
                {/* <Link className="nav-link" to="/parties">Party</Link> */}
                <Link className="nav-link" to="/song">Song</Link>
            </div>
        </nav>
    )
}