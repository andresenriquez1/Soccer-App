import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import SignUp from "./SingUp";
function App() {


  return (
    <div> 
      
      <Router> 
        <Routes> 
    
 
      
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/SignUp" element={<SignUp/>} />
      </Routes>
  
  </Router>
  </div>
      
    
  );
}

export default App;
