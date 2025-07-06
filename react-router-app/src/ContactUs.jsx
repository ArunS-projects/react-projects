import React from 'react';
import { useNavigate } from 'react-router';

function ContactUs(props){
    const navigate = useNavigate();
    const handleSubmit= () =>{
        alert("Resuest submitted successfully");
        navigate('/about');
    }

    return(
        <div>
            <h3>Enter below data to get in touch with us:</h3>
            <section>
                <form action='' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor=''>Email</label>
                        <input className='input' type='email'></input>
                    </div>
                    <div>
                        <label htmlFor=''>Mobile</label>
                        <input className='input' type='tel'></input>
                    </div>
                    <div>
                        <label htmlFor=''>Reason</label>
                        <input className='input' type='reason'></input>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default ContactUs;