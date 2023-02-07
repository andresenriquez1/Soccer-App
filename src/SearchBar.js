import React from 'react';
import './SearchBar.css';
import Select from "react-select";

const SearchBar = ({input, defaultDate,updateDate }) =>
{
     
    const hanndleOnChange = () =>
    {

    }
    return (

  
           
            <div clas= 'container'> 
            <div class = 'row'> 
            <div class = 'col-3'> </div>
            <div class = 'col-6 d-flex justify-content-center d-flex  align-items-center'> 
           <div class="input-group search w-50" >
                <input type="text" class="form-control myDivClass" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" 
                onChange={input}
                
                />        
                    
            </div>
           
             <Select class 
                
                options= {defaultDate.options}
                onChange = {updateDate }
                showNewOptionAtTop={false}/>
            
                
                    
                </div>
                </div>
           
                                
            </div>
            
         
  
            

       
    );

}

export default SearchBar;