const express = require('express');
const connectToDB = require('./db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {SignupDetails} = require('./User');
const cors = require('cors');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(cors());
app.use(express.json());

app.post('/signup',async (req,res)=>{
  try{
    const SignupUser = await SignupDetails.findOne({email:req.body.email,mobileNo:req.body.mobileNo})
    if(SignupUser){
      return res.status(400).json({message:'Email is already registered'})
    }``
    const hashedpassword = await bcrypt.hash(req.body.password,10);
    const newUser = new SignupDetails({
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
app.post('/login', async (req, res) => {
  try {
    const user = await SignupDetails.findOne({ email: req.body.email.toLowerCase() });
    if (!user) {
      return res.status(400).send('User does not exist. Please sign up first.');
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).send('Incorrect password.');
    }

    const token = jwt.sign({ email: user.email }, 'SECRET', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Error occurred during login');
  }
});

connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});