import React from 'react';

function MouseEvents(props) {
    const handleOnClickFunctionality = (event) =>{
        console.log('Button is Clicked');
        const imageTag = document.getElementsByTagName('img')
        imageTag[0].style.display = 'none';
    }
    const handleShowClickFunctionality= (event) =>{
        console.log('Show Image button clicked');
        const imageTag = document.getElementsByTagName('img')
        imageTag[0].style.display = 'inline';
    }   
    const handleOnMouseHover = (event) =>{
        console.log("Mouse is hovered over the image");
        event.target.style.height = '600px';
        event.target.style.width = '700px';
        event.target.style.border = '2px';
    }
    const handleMouseLeaving = (event) =>{
        console.log("Mouse is out of the image");
        event.target.style.width = '500px';
        event.target.style.height = '400px';
    }
    const handleDoubleClick = (event) =>{
        console.log("Hide button double clicked");
        const imageTag = document.getElementsByTagName('img');
        imageTag[1].style.display = 'none';
    }
    const showButtonDoubleClick = (event) =>{
        console.log('Show button double clicked');
        const image = document.getElementsByTagName('img');
        for(var i=0; i<image.length; i++){
            image[i].style.display = 'inline';
        }
    }
    const handleMouseDown = (event) =>{
        console.log('Button Pressed');
        const h3 = document.getElementsByTagName('h3');
        h3[0].style.backgroundColor = 'white';
        h3[0].style.color = 'cadetblue';
        h3[0].style.border = '3px solid magenta';
    }
    const handleMouseUp = () =>{
        console.log('Button Released');
        const h3 = document.getElementsByTagName('h3');
        h3[0].style.backgroundColor = '#282c34';
        h3[0].style.color = 'white';
        h3[0].style.border = '0px solid black';
    }

    const handleContextMenu = (event) =>{
        alert('Right button clicked');
        const h3 = document.getElementsByTagName('h3');
        console.log(h3);
        h3[1].style.backgroundColor = '#28645A';
        h3[1].style.color = 'white';
    }



    return (
        <div>
            <h3 onContextMenu={handleContextMenu}>We're going to go rogue here for HP books!</h3>
            <h3>Yes you guessed that right! I'm a potterhead.</h3>
            <button className='button' onClick={handleOnClickFunctionality} onDoubleClick={handleDoubleClick}>Hide Image</button>
            <button className='button' onClick={handleShowClickFunctionality} onDoubleClick={showButtonDoubleClick}>Show Image</button>
            <button className='button' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>Test Events</button>
            <figure>
                <img src = "https://www.instantaiprompt.com/wp-content/uploads/2023/12/harry-potter-ai-hp.jpg" alt = "Who other than the boy who lived" width = '500px' height = '400px' onMouseEnter= {handleOnMouseHover} onMouseLeave={handleMouseLeaving}></img>
                <img className='image' display='none' src = "https://www.bing.com/th/id/OIP.MWFGCDkrTFLu5wYbJMNORQHaDt?w=312&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt = "Hogwarts School of Witchcraft and Wizardry" width = '500px' height = '400px'></img>
                <figcaption> </figcaption>
            </figure>
        </div>
    );
}

export default MouseEvents;