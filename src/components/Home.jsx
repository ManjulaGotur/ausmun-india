import React from 'react';
import Navbar from './Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
    <div className='register'>
    <h5 className='text-center p-2' style={{ backgroundColor: 'lightpink' }}>Registrations for AUSMUN India 2024 are now closed!</h5>
    </div>
      <div className="homesec">
      <div className="images">
        <Navbar />
        <div>
        <img width="450" height="300px"
  src="/Logo (1).png"
  alt="Centered Logo"
/>

        </div>
        </div>
        </div>


        <div className='carsoule mt-5'>
 <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mP4NJy8xR9iXWrJO/siddhart-rajhans-1-mnl93Z6qB8Ie2ka0.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mP4NJy8xR9iXWrJO/mesa-de-trabajo-1-A0xVNo1q88TlgpVX.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mP4NJy8xR9iXWrJO/promoters-banner-mP4p4V6b34cDqj1e.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mP4NJy8xR9iXWrJO/000001-A3QJpoOWB0hD3nJ3.png" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


 </div>


 <div class="d-flex  justify-content-evenly m-5">
    <div class="card w-25 ">
     <div class="card-header">
        <img  width="350"   src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1800,h=1080,fit=crop/mP4NJy8xR9iXWrJO/2-dOqbDnBGEaTPx2LE.png" alt=""/>
     </div>
     <div class="card-body">
        <h3 className='fs-3 mb-2 fw-bold'>AUS MUN Band Competition</h3>
        <p>
        People may be different in countries, but music is the one language that connects them all
        </p>
        </div>
    </div>



    <div class="card w-25 ">
        <div class="card-header">
           <img  width="350"   src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1800,h=1080,fit=crop/mP4NJy8xR9iXWrJO/1-mk3DJgPoyySjENv5.png" alt=""/>
        </div>
        <div class="card-body">
           <h3 className='fs-3 mb-2 fw-bold'>AUS MUN Chronicles</h3>
           <p>“World Art Day Commemoration, Registrations, and the AU-INspiring art Competition!”</p>
           </div>
       </div>


       <div class="card w-25 ">
        <div class="card-header">
           <img  width="350"   src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1800,h=1080,fit=crop/mP4NJy8xR9iXWrJO/ausmun-website-posters-2-YanBJ9P3z9unE6Zx.png" alt=""/>
        </div>
        <div class="card-body">
           <h3 className='fs-3 mb-2 fw-bold'>Coming Soon…</h3>
           <p>Exciting update at AUSMUN India are on the way… Register soon and stay updated!</p>
           </div>
       </div>

</div>



    </div>
        
        
        
  );
};

export default Home;
