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
   <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=355,fit=crop/mP4NJy8xR9iXWrJO/3-mnl9qbGGeNTkR18R.png" alt=""/>
   <img src ="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=355,fit=crop/mP4NJy8xR9iXWrJO/1-YBg4ewG9l6IgQLyL.png" alt=""/>
   <img  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=355,fit=crop/mP4NJy8xR9iXWrJO/2-Y4LJx9kW47hWly0j.png" alt=""/>
    </div>

    <div className='imgicons2'>
    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=355,fit=crop/mP4NJy8xR9iXWrJO/5-mv072bwrN7F1eB5G.png" alt=""/>
    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=355,fit=crop/mP4NJy8xR9iXWrJO/4-YKbrEWDGj3s1krWl.png" alt=""/>
    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=355,fit=crop/mP4NJy8xR9iXWrJO/6-YD04BoGeKqcVGEwk.png" alt=""/>
</div>
    </div>
  )
}

export default Aboutsus
