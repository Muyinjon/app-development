// CARS, PLANES, TRAINS
import './App.css';
import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import {Button} from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/home';
import './pages/cars';
import './pages/cars';
import './pages/trains';

// Define a functional component named Navbar
const Navbar = () => {
    // The function returns a JSX element
    return (
        // The JSX element is a <nav> element
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            {/* Wrap the <Link> elements in a parent element */}
            <div className='navdiv'>
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/cars">Cars</Link>
                <Link className="navbar-brand" to="/planes">Planes</Link>
                <Link className="navbar-brand" to="/trains">Trains</Link>
            </div>
            {/* The closing tag of the <nav> element */}
            <Outlet />

        </nav>
    );
}
// The functional component is exported as the default export
// It can be imported and used in other parts of the application
export default Navbar