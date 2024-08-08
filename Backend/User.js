const mongoose = require('mongoose');

const SignupDetail = new mongoose.Schema({
    email:String,
    password:String,
    mobileNo:String
})

const SignupDetails = mongoose.model("signup",SignupDetail);

module.exports={SignupDetails}


