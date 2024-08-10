import React, { useState } from 'react'
import axios from 'axios';

const SignUp = () => {
    const[email,setEmail] = useState('');
    const[mobileNo,setMobileNo] = useState('');
    const[password,setPassword] = useState('');
    const[successmessage,setSuccessMessage] = useState('');
    const[errormessage,setErrorMessage] = useState('');

    const handleSubmit = async (e)=>{
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
        try{
            const response = await axios.post('http://localhost:3000/signup',{
                email,
                password,
                mobileNo
            })
            setSuccessMessage('User sign up successfully');
            setErrorMessage('');
        }
        catch(error){
            if(error.response && error.esponse.status===400 && error.response.data.message==='Email is alreay registered') {
                setErrorMessage('This email is alreay registered');
        }
        else{
            setErrorMessage('Error signing up user: '+error.message);
    }
    setSuccessMessage('');
    }
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
        {successmessage && <p className='success-message'>{successmessage}</p>}
        {errormessage && <p className='error-message'>{errormessage}</p>}
      <input type='text' placeholder='username'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='number' placeholder='MobileNo.' value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)}></input>
      <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button type='Submit'>Signup</button>
      </form>
    </div>
  )
}

export default SignUp
