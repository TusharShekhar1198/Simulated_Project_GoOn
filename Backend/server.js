require('dotenv').config();
const express = require('express');
const connectToDB = require('./db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {SignupDetails,HelpDetails,VehicleDetails} = require('./User');
const axios = require('axios');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const apiKey = process.env.API_KEY;
const directionApiUri = process.env.DIRECTIONS_API_URL;
const GOOGLE_CLIENT_ID = process.env.Google_Client_ID;
const GOOGLE_CLIENT_SECRET = process.env.Google_Client_secret;
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

// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: 'http://localhost:3000/auth/google/callback'
// }, async (accessToken, refreshToken, profile, done) => {
//   try {
//     // Check if the user already exists in your database
//     let user = await SignupDetails.findOne({ email: profile.emails[0].value });

//     if (!user) {
//       // Create a new user if not found
//       user = new SignupDetails({
//         email: profile.emails[0].value,
//         googleId: profile.id,
//         name: profile.displayName,
//       });
//       await user.save();
//     }

//     return done(null, user);
//   } catch (error) {
//     return done(error, null);
//   }
// }));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await SignupDetails.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });

// // Google OAuth Routes
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect('/');
// });

// app.get('/logout', (req, res) => {
//   req.logout(() => {
//     res.redirect('/');
//   });
// });

// app.get('/user', (req, res) => {
//   if (req.isAuthenticated()) {
//     res.json(req.user);
//   } else {
//     res.status(401).json({ message: 'Not authenticated' });
//   }
// });


app.get('/api/directions', async (req, res) => {
  const { origin, destination } = req.query;

  try {
    // Validate parameters
    if (!origin || !destination) {
      return res.status(400).json({ message: 'Origin and destination are required' });
    }

    const response = await axios.get(directionApiUri, {
      params: {
        origin,
        destination
      },
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching directions:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to fetch directions', error: error.message });
  }
});


app.get('/api/distance-matrix', async (req, res) => {
  const { origins, destinations } = req.query;

  try {

    if (!origins || !destinations) {
      return res.status(400).json({ message: 'Origins and destinations are required' });
    }

    const response = await axios.get(`${directionApiUri}/routing/v1/distanceMatrix`, {
      params: {
        origins,
        destinations,
        mode: 'driving', 
      },
      headers: {
        'Authorization': `Bearer ${apiKey}`, 
        'X-Request-Id': 'some-unique-id',
        'X-Correlation-Id': 'some-transaction-id',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching distance matrix:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to fetch distance matrix', error: error.message });
  }
});

app.get('/api/help', async (req, res) => {
  try {
    const helpDetails = await HelpDetails.find(); 
    res.status(200).json(helpDetails);
  } catch (error) {
    console.error('Error fetching help details:', error.message);
    res.status(500).json({ message: 'Error fetching help details', error: error.message });
  }
});

app.post('/api/help', async (req, res) => {
  try {
    const { question } = req.body;

 
    if (!question) {
      return res.status(400).json({ message: 'Question is required' });
    }

    
    const newHelpDetail = new HelpDetails({
      question,
      answer: '' 
    });

    const savedHelpDetail = await newHelpDetail.save(); 
    res.status(201).json(savedHelpDetail); 
  } catch (error) {
    console.error('Error posting help question:', error.message);
    res.status(500).json({ message: 'Error posting help question', error: error.message });
  }
});
app.get('/api/vehicles', async (req, res) => {
  try {
    const vehicles = await VehicleDetails.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vehicles' });
  }
});


connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});