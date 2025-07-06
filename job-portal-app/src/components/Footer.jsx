import React from 'react';
import '../styles/Footer.css';

function Footer(props) {
    return (
        <div>
            <section className='footer'>
                Follow us at 
                <img width= '50px' height = '50px'src="https://th.bing.com/th/id/OIP.NN_29U5mI6l_KAfhsxQksgHaHa?w=161&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" alt="LinkedIn" />
                <img width= '70px' height = '50px'src="https://th.bing.com/th/id/OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK?w=307&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" alt="GitHub" />
                <img width= '50px' height = '50px'src="https://th.bing.com/th/id/OIP.Rz7ajoNixaaM4-5F5GuUZgHaFj?w=196&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" alt="stackoverflow" />
                © Copyrights reserved
                {/* <input type="checkbox" className="checkbox" name='Dark Mode' id='darkmode'/> */}
            </section>
        </div>
    );
}

export default Footer;