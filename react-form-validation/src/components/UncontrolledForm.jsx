import React,{useRef} from 'react';

function UncontrolledForm(props) {
    const userEmailRef = useRef();
    const userPasswordRef = useRef();
    const userPhoneNumRef = useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const userEmail = userEmailRef.current.value;
        const userPassword = userPasswordRef.current.value;
        const userPhoneNum = userPhoneNumRef.current.value;
        alert(`Form submitted successfully!`);
        console.log(`form Data\nEmail: ${userEmail}\nPassword: ${userPassword}\nPhone: ${userPhoneNum}`);
    }

    const handleReset=(event)=>{

    }


    return (
        <div>
            <h4>This is an Uncontrolled Form</h4>
            <section>
                <form action='' onSubmit={handleSubmit}>
                    <div>
                        <label className='input' htmlFor='email'></label>
                        <input type='text' name='email' ref={userEmailRef} placeholder='Email' required/>
                    </div>
                    <div>
                        <label className='input' htmlFor='password'></label>
                        <input type='password' name='password' ref={userPasswordRef} placeholder='Password' required/>
                    </div>
                    <div>
                        <label className='input' htmlFor='phoneNum'></label>
                        <input type='text' name='phoneNum' ref={userPhoneNumRef} placeholder='Contact Number' required/>
                    </div>
                    <div>
                        {/* <input type="reset" />
                        <input type="submit" /> */}
                        <button className='button' type='button' onClick={handleReset}>Reset</button>
                        <button className='button' type='submit'>Submit</button>
                    </div>
                </form>
            </section>            
        </div>
    );
}

export default UncontrolledForm;