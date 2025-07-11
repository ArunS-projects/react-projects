import React, {useState} from 'react';
import '../styles/FormValidation.css'

function ValidatedForm(props) {
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
    };
    
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
    
        if(!data.password){
            errors.password = 'Password is required';
        }else if (data.password.length < 8){
            errors.password = 'Password must be at least 8 characters long';
        }
    
        if(data.confirmPassword !== data.password){
            errors.confirmPassword = 'Passwords do not match';
        }
    
        return errors;
    };
    
    const handleReset=(e)=>{
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    return(
        <div>
            <div className="form-container">
                <h2 className="form-title">Form Validation</h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Username: </label>
                    <input className="form-input" type="text" name="username" value={formData.username} onChange={handleChange}/>
                    {errors.username && (
                        <span className="error-message">
                            {errors.username}
                        </span>
                    )}
                </div>
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
                    <label className="form-label"> Password: </label>
                    <input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange}/>
                    {errors.password && (
                        <span className="error-message">
                            {errors.password}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">Confirm Password: </label>
                    <input className="form-input" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                    {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword}
                        </span>
                    )}
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}

export default ValidatedForm;