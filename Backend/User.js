const mongoose = require('mongoose');

const SignupDetail = new mongoose.Schema({
    email:String,
    password:String,
    mobileNo:String
})

const HelpDetail = new mongoose.Schema({
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      default: ''
    }
  });

const SignupDetails = mongoose.model("signups",SignupDetail);
const HelpDetails = mongoose.model("helps",HelpDetail);

module.exports={SignupDetails,HelpDetails}


