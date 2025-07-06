import React from 'react';

function FormEvents(props) {

    const handleFocus=(e)=>{
        // console.log('Focussed when clicked upon');
        // const inputs = document.getElementsByTagName('input');
        // for(let i=0;i<inputs.length;i++){
        //     inputs[i].style.backgroundColor = 'pink';
        // }
        e.target.style.backgroundColor = 'pink';
    }

    const handleBlur=(e)=>{
        console.log(`${e.target.name} data changed: ${e.target.value}`)
        // console.log('Focus removed when clicked elsewhere');
        // const inputs = document.getElementsByTagName('input');
        // for(let i=0;i<inputs.length;i++){
        //     inputs[i].style.backgroundColor = 'white';
        // }
        e.target.style.backgroundColor = 'white';
    }

    const handleSelectedData = (e) =>{
        // console.log(`Text selected: ${e.target.value}`);
        e.target.style.backgroundColor = 'biege';
        e.target.style.color = 'brickred';
    }

    const submitForm = (event) =>{
        event.preventDefault();
        alert(`You've successfully submitted the form!`);
        console.log(`form submitted!`);
    }

    const handleInputChanges = (e) =>{
        // console.log(`data entered: ${e.target.value}`);
        e.target.style.color = 'brickred';
    }

    const handleDataChange = (event)=>{
        // console.log(`${event.target.name} data changed: ${event.target.value}`);
    }
    
    return (
        <div>
            <h3>The third kind of events are Form Events.<br/> These events occur when user takes any action on form elements(input, select, textarea, etc.).</h3>
            <ol type='1'>
                <li>onChange</li>
                <li>onInput</li>
                <li>onSubmit</li>
                <li>onFocus</li>
                <li>onBlur</li>
                <li>onSelect</li>
                <li>onReset</li>
            </ol>
            <div>
                <form className='form' action="" onSubmit={submitForm}>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input name='email' onFocus={handleFocus} onBlur={handleBlur} onChange={handleDataChange} type='email'/>
                    </div>
                    <div>
                        <label htmlFor="">Password: </label>
                        <input name='password' onFocus={handleFocus} onBlur={handleBlur} onChange={handleDataChange} onInput={handleInputChanges} type='password'/>
                    </div>
                    <div>
                        <label htmlFor="">Country: </label>
                        <select>
                            <option value=''></option>
                            <option name='country' onChange={handleDataChange} onBlur={handleBlur} value='India'>India</option>
                            <option name='country' onChange={handleDataChange} onBlur={handleBlur} value='Israel'>Israel</option>
                            <option name='country' onChange={handleDataChange} onBlur={handleBlur} value='Japan'>Japan</option>
                            <option name='country' onChange={handleDataChange} onBlur={handleBlur} value='Russia'>Russia</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Comments: </label><br/>
                        <textarea name='comments' onChange={handleDataChange} onSelect={handleSelectedData} onBlur={handleBlur} id=""></textarea>
                    </div>
                    <div>
                        <input className='button' type='reset'/>
                        <input className='button' type='submit'/>
                        <button className='button'type='reset'>ReactJS Reset</button>
                        <button className='button' type='submit'>ReactJS Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormEvents;