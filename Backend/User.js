const mongoose = require('mongoose');

const SignupDetail = new mongoose.Schema({
    email:String,
    password:String,
    mobileNo:String
})

const SignupDetails = mongoose.model("signups",SignupDetail);

module.exports={SignupDetails}


