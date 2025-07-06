import React from 'react';
import { Link } from 'react-router';

function Navbar(props) {
    return (
        <div>
            <nav>
                <Link to = "/">Home</Link>|
                <Link to = "/aboutus">AboutUs</Link>|
                <Link to = "/careers">Careers</Link>|
                <Link to = '/contactus'>ContactUs</Link>
            </nav>
        </div>
    );
}

export default Navbar;