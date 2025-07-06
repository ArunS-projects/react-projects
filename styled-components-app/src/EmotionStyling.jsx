import React from 'react';
import {css} from '@emotion/react';

function EmotionStyling(props) {
    return (
        <div>
            <p css = {css`
                background-color: teal;
                color: white;
                border: 5px solid yellow;
                padding: 5px;
            `}>
                Emotion Styling <br/>
                Begin by installing below libraries:
            </p>
            <ol type='a'>
                <li>@emotion/react</li>
                <li>@emotion/styled</li>
            </ol>
        </div>
    );
}

export default EmotionStyling;