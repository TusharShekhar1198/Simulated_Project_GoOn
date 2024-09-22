import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const clientId = '675696133178-1b4dr9dtcknib1am2ms8nv8sre9qfr2s.apps.googleusercontent.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!/(?=.*[a-zA-Z])(?=.*\d).{8,}/.test(password)) {
      setErrorMessage('Password must contain at least 1 letter, 1 number, and be at least 8 characters long.');
      return;
    }

    // Simulate successful sign-up with form data (replace this with your logic)
    setSuccessMessage('User signed up successfully with form!');
    setErrorMessage('');
  };

  const handleGoogleSignup = async (tokenResponse) => {
    try {
      const { credential } = tokenResponse; // Token returned by Google

      // Decode the credential token to get user information (Google ID Token)
      const userInfo = JSON.parse(atob(credential.split('.')[1])); // Decoding JWT (JSON Web Token)
      const { email, name } = userInfo;

      setSuccessMessage(`User logged in with Google successfully! Welcome ${name}`);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error logging in with Google: ' + error.message);
      setSuccessMessage('');
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}> {/* Using the actual client ID */}
      <div>
        <form onSubmit={handleSubmit}>
          {successMessage && <p className='success-message'>{successMessage}</p>}
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='number' placeholder='Mobile No.' value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='Submit'>Signup</button>
        </form>
        <hr />
        <GoogleLogin
          onSuccess={handleGoogleSignup} // Handle Google login success
          onError={() => setErrorMessage('Error signing up with Google')}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
