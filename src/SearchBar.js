import React from 'react';
import './SearchBar.css';
import { CgSearch} from "react-icons/cg";
const SearchBar = ({input}) =>
{
   
    return (

  
           
            <div clas= 'container'> 
            <div class = 'row'> 
            <div class = 'col-3'> </div>
            <div class = 'col-6 d-flex justify-content-center'> 
           <div class="input-group search w-50" >
                <input type="text" class="form-control myDivClass" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" 
                onChange={input}
                
                />        
                
                    <button class="input-group-text mySpanClass" id="basic-addon1" type = 'submit' value= 'Submit'><CgSearch size ={20}/></button>
                    </div>
                
            </div>
            </div>
            </div>
         
  
            

       
    );

}

export default SearchBar;