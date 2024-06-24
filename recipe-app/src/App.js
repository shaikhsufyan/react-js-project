import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/Mainpage';
import { Route,Routes } from 'react-router-dom';
import Mealinfo from './Component/Mealinfo';
import Food from "./Components/Food"
import Recipe from './Components/Recipe';
 

function App() { 
  return (
     
    // <Mainpage/>
     
     <Routes>
      <Route path='/' element={<Food/>}/>
      <Route path='/:mealid' element={<Recipe/>}/>
     </Routes>
      
  );
}
 
export default App;
