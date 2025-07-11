import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email.includes('@')){
      setError('Invalid email');
    }else{
      setError('');
      // handle successful login
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
      <button type="submit">Login</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
};

export default LoginForm;