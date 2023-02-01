import React from 'react';
import './NavBar.css';
import { HiOutlineUserCircle} from "react-icons/hi2";

const Navbar = () =>
{
    return (
      
             <div class ='mainNav'> 
              <ul class="nav justify-content-end">
              <button class ='col-1 button1'> Create Account</button>
              <button class ='col- button1'>
                
                  <HiOutlineUserCircle size ={27}class = 'icon'/>
                      Login
              </button>
              
             
              <div class ='col-2'> </div>
             
              <h1 class ="d-flex justify-item-center col-4 title"> Soccer City</h1>
              <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <hr/>
            </div>
           
           
                  
             
     
    
   

    );

}

export default Navbar;