import React, {useState} from 'react';

function Login(props) {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange=(e)=>{
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleReset=(e)=>{

    }

    const validateForm = (data) => {
        const errors = {};
    
        if(!data.username.trim()){
            errors.username = 'Username is required';
        }else if (data.username.length < 4){
            errors.username = 'Username must be at least 4 characters long';
        }

        if(!data.email.trim()){
            errors.email = 'Email is required';
        }else if (!/\S+@\S+\.\S+/.test(data.email)){
            errors.email = 'Email is invalid';
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
    
        if(Object.keys(newErrors).length === 0){
            // Form submission logic here
            alert(`Thanks for submiiting the form!`);
            console.log('Form submitted successfully!');
            console.log("Form Data is: ", formData);
            handleReset();
        }else{
           console.log('Form submission failed due to validation errors.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label">Email: </label>
                <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange}/>
                {errors.email && (
                    <span className="error-message">
                        {errors.email}
                    </span>
                )}
            </div>
            <div>
                <label className="form-label"> Phone: </label>
                <input className="form-input" type="password" name="tel" value={formData.password} onChange={handleChange}/>
                {errors.password && (
                    <span className="error-message">
                        {errors.password}
                    </span>
                )}
            </div>
            </form>
        </div>
    );
}

export default Login;