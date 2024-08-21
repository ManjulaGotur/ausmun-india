import React, { useEffect } from 'react'
import '../styles/Aboutus.css';
import Navbar from './Navbar';

const Aboutsus = () => {
  useEffect(() => {
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Delay the animation
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, 2000); // 2-second delay
        }
      });
    }, options);

    const imgicons = document.querySelectorAll('.imgicons1 img, .imgicons2 img');
    imgicons.forEach(icon => observer.observe(icon));

    return () => {
      imgicons.forEach(icon => observer.unobserve(icon));
    };
  }, []); 
  return (
    <div>
    <div className='register'>
    <h5 className='text-center p-2' style={{ backgroundColor: 'lightpink' }}>Registrations for AUSMUN India 2024 are now closed!</h5>
    </div>
      <div className="aboutsection">
    <div>
    <Navbar/>
    </div>
    </div>

    <div className='imgicons1'>
  <div className="member">
    <img src="/NitikaSharma.jpeg" alt="Nitika Sharma"/>
    <h1>Nitika Sharma</h1>
    <h3>Deputy Secretary General</h3>
  </div>
  <div className="member">
    <img src="/Atharvpatidar.jpeg" alt="Atharv Patidar"/>
    <h1>Atharv Patidar</h1>
    <h3>OC Head</h3>
  </div>
  <div className="member">
    <img src="/ArpitAgrawal.jpeg" alt="Arpit Agrawal"/>
    <h1>Arpit Agrawal</h1>
    <h3>Director General</h3>
  </div>
</div>

<div className='imgicons2'>
  <div className="member">
    <img src="/YashuMathur .jpg" alt="Yashu Mathur"/>
    <h1>Yashu Mathur</h1>
    <h3>Head of Media Affairs</h3>
  </div>
  <div className="member">
    <img src="/PriyanshBhardwaj.jpeg" alt="Priyansh Bhardwaj"/>
    <h1>Priyansh Bhardwaj</h1>
    <h3>Founder Secretary General</h3>
  </div>
  <div className="member">
    <img src="/Kaustubhsharma.jpeg" alt="Kaustubh Sharma"/>
    <h1>Kaustubh Sharma</h1>
    <h3>Some Title</h3>
  </div>
</div>

   
    </div>
  )
}

export default Aboutsus
