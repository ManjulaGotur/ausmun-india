
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Navbar from './components/Navbar'
import Home from './components/Home'
import Footsec from './components/Footsec';
import Aboutsus from './components/Aboutsus';
import Contactus from './components/Contactus';


function App() {
  return (
   
  <BrowserRouter>
  {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path = '/about-secretariant' element={<Aboutsus/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      
    </Routes>
    <Footsec/>
  </BrowserRouter>
  
  );
}

export default App;
