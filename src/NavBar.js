import React from 'react';
import './NavBar.css';
import { HiOutlineUserCircle} from "react-icons/hi2";

const Navbar = () =>
{
    return (
      
             <div class ='mainNav'> 
              <ul class="nav justify-content-end">
          
              <div class ='col-2'> </div>
             
              <h1 class ="d-flex justify-item-center col-4 title text-center mt-4"> Soccer City</h1>
              <li class="nav-item">
                <a class="nav-link active" href="#">

                <button class ='button1'>
                
                <HiOutlineUserCircle size ={27}class = 'icon'/>
                    Login
            </button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> <button class ='button1'> Create Account</button></a>
              </li>
             
            </ul>
            <hr/>
            </div>
           
           
                  
             
     
    
   

    );

}

export default Navbar;