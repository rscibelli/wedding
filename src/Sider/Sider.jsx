import React from 'react';
import { Link } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sider() {
    return (
        <nav className="navbar fixed-top bg-body-tertiary navbar-expand-lg">
            <div className="container-fluid px-3">
                <Link className="navbar-brand" to="/">MadRob</Link>
                <Link className="nav-link" to="/accomidations">Hotel</Link>
                <Link className="nav-link" to="/parties">Parties</Link>
                <Link className="nav-link" to="/song">Song</Link>
            </div>
        </nav>
    )
}