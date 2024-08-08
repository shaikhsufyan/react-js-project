import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import w1 from "./images/wo1.jpg"
import w2 from "./images/wo2.jpg"
import w3 from "./images/wo3.jpg"

function App() {
  return (
    <>
     <div className='user'>
     <Profile img={w1}/>
    <Profile img={w2}/>
    <Profile img={w3}/>
     </div>
    </>

  );
}

export default App;
