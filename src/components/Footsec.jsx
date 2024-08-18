import React from 'react';
import '../styles/Footsec.css'

const Footsec = () => {
  return (
    <div className='Footsec mt-5'>
      <footer className='bg-dark text-white pt-5 pb-4'>
        <div className='foot1'>
          <h1 className='fw-bold fs-1 text-light'>AUSMUN INDIA</h1>
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1800,h=1080,fit=crop/mP4NJy8xR9iXWrJO/2-dOqbDnBGEaTPx2LE.png" alt=""/>
          <button className='m-4'> Rules & Regulations for AUSMUN INDIA</button>
       
        </div>
        
        <div className='foot2  mt-5'>
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=292,h=364,fit=crop/mP4NJy8xR9iXWrJO/asset-1-4x-copy-dOqb2VRlREcOgRyQ.png" alt=""/>
        </div>
  
        <div className='foot3'>
          <svg
            className="two inline-block" 
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>

          <h2>AUSMUN INDIA</h2>
          <p>Office No.508 & 509, 5th Floor, Gaurav Tower 1, Plot No.1, Indira Palace, Malviya Nagar - 302017</p>
          <p>+91 9950092499<br/>info@ausmunindia.com</p>
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=191,h=127,fit=crop/mP4NJy8xR9iXWrJO/australia-unlimited-white-YbNaxRnxWjUa6apx.png" alt="Australia Unlimited"/>
        </div>
      </footer>
    </div>
  );
};

export default Footsec;
