import logo from './logo.svg';
import './App.css';
import Food from './Components/Food';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Recipe from './Components/Recipe';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Food/>}/>
      <Route path='/:meal' element={<Recipe/>}/>

    </Routes>
      
    </BrowserRouter>
     
  );
}

export default App;
