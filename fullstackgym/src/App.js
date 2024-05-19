 
import './index.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Trainers from './Components/Trainers';
import Slider from './Components/Slider';
import Programs from './Components/Programs';
import Footer from './Components/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Login';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Main/>} />
   <Route path="/slider" element={<Slider/>} />
   <Route path="/program" element={<Programs/>} />
   <Route path="/trainer" element={<Trainers/>} />
   <Route path="/signup" element={<Signup/>} />
   <Route path="/login" element={<Login/>} />


   </Routes>

    <Navbar/>
     
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
