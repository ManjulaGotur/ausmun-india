import React from 'react'
import '../styles/Contactus.css'
import Navbar from './Navbar'

const Contactus = () => {
  return (
    <div>
    <div className='register'>
    <h5 className='text-center p-2' style={{ backgroundColor: 'lightpink' }}>Registrations for AUSMUN India 2024 are now closed!</h5>
    </div>
      <div className="contactsec">
    <div>
    <Navbar/>
    </div>
    {/* <h1 className='text-center text-light mt-4 fs-1'>Contact us any time</h1> */}
    </div>


    <div className="container contactdetails mt-5">
      <div className="row">
        <div className="col-md-6 logo1 bg-dark">
          <img src="/Logo (1).png" alt="Contact Us" className="img-fluid"/>
        </div>

        <div className="col-md-6 details">
          <div className="form-group ">
            <label htmlFor="firstName" >First Name*</label>
            <input type="text" className="form-control" id="firstName" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email*</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number*</label>
            <input type="text" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" />
          </div>

          <div className="form-group">
            <label htmlFor="assistance">How may we assist you?*</label>
            <textarea className="form-control" id="assistance" rows="4" placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="btn submit-button">Submit</button>
        </div>
      </div>
    </div>

    </div>
   
  )
}

export default Contactus
