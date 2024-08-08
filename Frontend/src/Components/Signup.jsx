import React, { useState } from 'react'
import axios from 'axios';

const SignUp = () => {
    const[email,setEmail] = useState('');
    const[MobileNo,setMobileNo] = useState('');
    const[password,setPassword] = useState('');
    const[successmessage,setSuccessMessage] = useState('');
    const[errormessage,setErrorMessage] = useState('');

    const handleSumbit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/signup',{
                email,
                password,
                MobileNo
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
        <form onSubmit={handleSumbit}>
        {successmessage && <p className='success-message'>{successmessage}</p>}
        {errormessage && <p className='error-message'>{errormessage}</p>}
      <input type='text' placeholder='username'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='number' placeholder='MobileNo.' value={MobileNo} onChange={(e)=>setMobileNo(e.target.value)}></input>
      <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button type='Submit'>Signup</button>
      </form>
    </div>
  )
}

export default SignUp
