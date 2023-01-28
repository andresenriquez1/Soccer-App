import React from 'react';
import './Leagues.css'
const Leagues = ({logo}) =>
{
    
    return (
                    
                        <div class="card card-body">
                                <h3 class="card-title "> {logo.title}</h3>
                                <img class ="card-img-bottom img-fluid" src= {logo.thumbnail} width ="200" height ="200" alt="BigCo Inc. logo"/> 
                                
                    </div>
                    

                        
                

          
            

     
      
    );

}

export default Leagues;