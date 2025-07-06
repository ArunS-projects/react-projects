import React from 'react';
import { useLocation } from 'react-router';

function Careers(props) {

    const location = useLocation();
    console.log(`Hash: ${location.hash}`);
    console.log(`Pathname: ${location.pathname}`);
    console.log(`Key: ${location.key}`);
    console.log(`Search: ${location.search}`);
    console.log(`State: ${location.state}`);
    
    return (
        <div>
            <h2>Grow your career</h2>
            <ul>
                Open positions:
                <li>Developer with 9+ years of JAVA experience</li>
                <li>Tester with 1+ years of experience in Selenium Testing</li>
                <li>Developer with 3+ years of React JS experience</li>
                <li>Manager with 10+ years of experience</li>
                <li>Freshers 2024 passout batch</li>
            </ul>
        </div>
    );
}

export default Careers;