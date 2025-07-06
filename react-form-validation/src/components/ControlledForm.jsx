import React,{useState} from 'react';
import '../styles/ControlledForm.css';

function ControlledForm(props) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phoneNum: ''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleReset=(event)=>{
        setFormData({
            email:'',
            password:'',
            phoneNum:''
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Form is submitted successfully!`);
        console.log(formData);
    }

    return (
        <div>
            <h4>This is a Controlled Form</h4>
            <section>
                <form action='' onSubmit={handleSubmit}>
                    <div>
                        <label className='input' htmlFor='email'></label>
                        <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Email' required/>
                    </div>
                    <div>
                        <label className='input' htmlFor='password'></label>
                        <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' required/>
                    </div>
                    <div>
                        <label className='input' htmlFor='phoneNum'></label>
                        <input type='text' name='phoneNum' value={formData.phoneNum} onChange={handleChange} placeholder='Contact Number' required/>
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

export default ControlledForm;