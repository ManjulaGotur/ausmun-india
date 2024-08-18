import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className='d-flex justify-content-between align-items-center'>
        <div>
        <img
  src="/Logo (1).png"
  alt="Logo"
  style={{ width: '150px', maxHeight: '150px' }}
/>      
        </div>

        <div className="navbar-collapse">
          <ul className="navbar-nav d-flex align-items-center ">
            <li className="nav-item text-light">
              <Link to="/" className="nav-link active">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/committees" className="nav-link dropdown-toggle text-light" role="button">
                Committees
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/committee1" className="dropdown-item">AUS-INDIA Joint Cabinet Meeting</Link></li>
                <li><Link to="/committee2" className="dropdown-item">United Nations General Assembly First Committee Disarmament & International Security Counci</Link></li>
                <li><Link to="/committee3" className="dropdown-item">United Nations Framework Convention on Climate Change</Link></li>
                <li><Link to="/committee4" className="dropdown-item">United Nations Human Rights Council</Link></li>
                <li><Link to="/committee5" className="dropdown-item">United Nations Security Council  </Link></li>
                <li><Link to="/committee6" className="dropdown-item">International Cricket Council</Link></li>
                <li><Link to="/committee7" className="dropdown-item">United Nations Office on Drugs and Crime</Link></li>
                <li><Link to="/committee8" className="dropdown-item">International Press</Link></li>
                
                
               
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/backgroundguides" className="nav-link text-light">Background Guides</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/partners" className="nav-link dropdown-toggle text-light" role="button">
                Partners
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/partner-universities" className="dropdown-item">Partner Universities</Link></li>
                <li><Link to="/participating-institutions" className="dropdown-item">Participating Institutions</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/registrationdetails" className="nav-link text-light">Registration Details</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/aboutus" className="nav-link dropdown-toggle text-light" role="button">
                About Us
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/about-introduction" className="dropdown-item">Introduction To AUSMUN INDIA</Link></li>
                <li><Link to="/about-theme" className="dropdown-item">Theme of AUSMUN INDIA 24</Link></li>
                <li><Link to="/about-secretariant" className="dropdown-item">AUSMUN INDIA Secretariant</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/contactus" className="nav-link text-light">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
