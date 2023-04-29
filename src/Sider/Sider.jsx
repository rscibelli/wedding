import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sider() {
    return (
        <nav className="navbar fixed-top bg-body-tertiary navbar-expand-lg">
            <div className="container-fluid px-5">
                <a className="navbar-brand" href="/">MadRob</a>
                <a className="nav-link" href="/">Accomidations</a>
                <a className="nav-link" href="/">Parties</a>
                <a className="nav-link" href="/song">Song</a>
            </div>
        </nav>
    )
}