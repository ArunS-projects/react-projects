import React from 'react';
import styled from 'styled-components';

function StyledComponents(props) {
    const StyledP = styled.p`
        background: transparent;
        background-color: azure;
        text-align: left; 
        border-radius: 3px;
        border-color: black;
        color:rgb(142, 79, 191);
        margin: 1em 1em;
        padding: 0.5em 0.5em;
    `

    const StyledLineBreak = styled.b`
        margin: 1em 1em;
        padding: 0.5em 0.5em;
        color:rgb(191, 79, 137);
        font-size: large;
    `

    return (
        <div>
            <StyledP>
                Styled-components is a popular library that allows you to write CSS in JavaScript while building custom components in React. This approach helps in maintaining the styles scoped to the components and avoids conflicts with other styles in the application.
                <br/>
                <b>Setting up Styled Components</b><br/>
                To get started with styled-components, you need to install the library in your React project. You can do this using npm or yarn:
                <br/>
                <b><code>npm install styled-components</code></b><br/>
                That's all! 👌<br/>
                <hr width='100%' size='2'></hr>
            </StyledP>
            <StyledLineBreak>
                <b></b>
            </StyledLineBreak>
            <hr width="100%" size="2" margin = '1em 1em' padding = '0.5em 0.5em' color = 'rgb(191, 79, 137)' fontSize = 'large'/>
            
        </div>
    );
}

export default StyledComponents;