import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import './JobFrom.css'; // Import any additional custom styles if necessary

const ShippingLabelForm = () => {
  const [name,setName]=useState(" ")
  const [address,setAddress]=useState(" ")
  const [city,setCity]=useState(" ")
  const [state,setState]=useState(" ")

 const  handleSubmit =async(e)=>{
  try{
  
      const response = await axios.post("http://localhost:3000/api/jobdetail",
        {"name":name,

          "address":address,
          "city":city,
          "state":state
        }

      )
      console.log(response)
  }
  catch(error){
    console.log(error)
  }
}

handleSubmit()






  return (
    <form className="mt-4 bg-light rounded-lg p-4 shadow-sm shippingForm" style={{width:"60%" , margin:"0 auto"}}    onSubmit={handleSubmit} >
      <h2 className="text-dark font-weight-bold mb-4">Shipping Label Address Form</h2>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea
          className="form-control"
          id="address"
          rows="3"
          placeholder="Your address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        ></textarea>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Your city"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            placeholder="Your state"
            value={state}
            onChange={(e)=>setState(e.target.value)}
          />
        </div>

      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="zip">ZIP</label>
          <input
            type="text"
            className="form-control"
            id="zip"
            placeholder="Your ZIP code"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            className="form-control"
          >
            <option value="">Select a country</option>
            <optgroup label="Africa">
              <option value="AF">Afghanistan</option>
              <option value="DZ">Algeria</option>
              <option value="AO">Angola</option>
              <option value="ZW">Zimbabwe</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="AM">Armenia</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BH">Bahrain</option>
              <option value="YE">Yemen</option>
            </optgroup>
            <optgroup label="South America">
              <option value="AR">Argentina</option>
              <option value="BO">Bolivia</option>
              <option value="BR">Brazil</option>
              <option value="VE">Venezuela</option>
            </optgroup>
          </select>
        </div>
      </div>

      <button type="submit"  className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ShippingLabelForm;
