import React from 'react';

const Leagues = ({logo}) =>
{
    
console.log({logo});
    return (
       
            
                <div class= "card">
                <div class="card-body">
                    <h3 class="card-title"> {logo.title}</h3>
                    <img class ="card-img-bottom img-fluid" src= {logo.thumbnail} width ="200" height ="200" alt="BigCo Inc. logo"/> 
                </div>
                <p >{logo.date}</p>
            </div>

          
            

     
      
    );

}

export default Leagues;