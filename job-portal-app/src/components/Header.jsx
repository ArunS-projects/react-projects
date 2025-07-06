import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css'

function Header(props) {
    return (
        <div>
            <nav className='header'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </div>
    );
}

export default Header;