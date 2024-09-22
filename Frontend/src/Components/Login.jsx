import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const clientId = '675696133178-1b4dr9dtcknib1am2ms8nv8sre9qfr2s.apps.googleusercontent.com'; // Add your Google Client ID

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      setSuccessMessage('Login successful!');
      setErrorMessage('');

      // Redirect to home page after 1.5 seconds
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage('Error logging in: ' + error.message);
      }
      setSuccessMessage('');
    }
  };

  const handleGoogleLogin = (tokenResponse) => {
    try {
      const { credential } = tokenResponse; // Token returned by Google

      // Decode the credential token to get user information (Google ID Token)
      const userInfo = JSON.parse(atob(credential.split('.')[1])); // Decoding JWT (JSON Web Token)
      const { email, name } = userInfo;

      setSuccessMessage(`Login successful with Google! Welcome, ${name}`);
      setErrorMessage('');

      // Redirect to home page after 1.5 seconds
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      setErrorMessage('Error logging in with Google: ' + error.message);
      setSuccessMessage('');
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}> {/* Use your Google clientId here */}
      <div>
        <form onSubmit={handleSubmit}>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <hr />
        {/* Google login button */}
        <GoogleLogin
          onSuccess={handleGoogleLogin} // Handle Google login success
          onError={() => setErrorMessage('Error logging in with Google')}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
