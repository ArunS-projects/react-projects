import React from 'react';
import '../src/styles/SASScomponent.scss';

function SassComponent(props) {
    return (
        <div>
            <p>Let's learn SCSS styling in ReactJS.</p>
            <ol type='a'>Steps to use SCSS in React applications:
                <li>Install SASS</li>
                <li>Install SCSS</li>
                <li>Create a component and start applying CSS</li>
            </ol>
            <p><code><b>*SCSS styling is applied similar to external styling.</b></code></p>
            <figure>
                <img src='https://www.inkoop.io/static/daeaa170338f2b64d279c4523d143221/82c11/Scss%20vs%20Sass%20-%202.png' alt='SCSS'></img>
            </figure>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nesciunt quia, laudantium libero assumenda, aut soluta laborum tempore asperiores explicabo alias, ex ut velit! Dolor et unde eligendi maxime ullam.</p>
        </div>
    );
}

export default SassComponent;