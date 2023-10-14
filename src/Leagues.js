import React from 'react';
import './Leagues.css'
const Leagues = ({logo}) =>
{
    

const fixDate = (Inputdate) =>
{
    const date = new Date(Inputdate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();

 return `${month}/${day}/${year}`;

}
    
    return (                   
                                

                                <div class= ' col-6 col-md-4 mb-3'> 
                                    <div class ="card-group h-100"> 
                                        <div class ="card">
                                        <h6 class="card-title text-center"> {logo.title}</h6>
                                        <img class ="card-img-bottom " src= {logo.thumbnail} width ="1000" height ="300" alt="BigCo Inc. logo"/>  
                                        <h6 className ="text-center mt-2"> {fixDate(logo.date)}</h6> 
                                        </div>
                                    </div>
                                </div>
                    

                        
                

          
            

     
      
    );

}

export default Leagues;