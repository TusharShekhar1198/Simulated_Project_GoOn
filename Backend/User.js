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
  const VehicleDetail = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  })

const SignupDetails = mongoose.model("signups",SignupDetail);
const HelpDetails = mongoose.model("helps",HelpDetail);
const VehicleDetails = mongoose.model("vehicle",VehicleDetail)

module.exports={SignupDetails,HelpDetails,VehicleDetails}


