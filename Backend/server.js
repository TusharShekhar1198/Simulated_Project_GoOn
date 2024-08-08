const express = require('express');
const connectToDB = require('./db');
const bcrypt = require('bcrypt')
const {UserDetails} = require('./User')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/signup',async (req,res)=>{
  try{
    const SignupUser = await UserDetails.findOne({email:req.body.email,mobileNo:req.body.mobileNo})
    if(SignupUser){
      return res.status(400).json({message:'Email is already registered'})
    }
    const hashedpassword = await bcrypt.hash(req.body.password,10);
    const newUser = new UserDetails({
      email:req.body.email,
      password:hashedpassword,
      mobileNo:req.body.mobileNo
    })
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  }
  catch(error){
    console.log(error);
  }
})
connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});