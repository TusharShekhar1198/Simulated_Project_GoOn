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

  const JobDetail = new mongoose.Schema({
    name :{type:String,required:true},
    address:{type:String ,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true}
  })


const SignupDetails = mongoose.model("signups",SignupDetail);
const HelpDetails = mongoose.model("helps",HelpDetail);
const VehicleDetails = mongoose.model("vehicle",VehicleDetail)
const JobDetails = mongoose.model("jobdetail",JobDetail)

module.exports={SignupDetails,HelpDetails,VehicleDetails,JobDetails}


