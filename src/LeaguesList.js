import React from 'react';
import { useState, useEffect } from 'react';
import Leagues from './Leagues';
const LeaguesList = ({filterInput}) =>
{
    const [leagues,setLeagues]= useState([]);

    console.log({leagues});

    useEffect(
        ()=>
        {
          // getGiHubUserWithAxios();

          fetch('https://www.scorebat.com/video-api/v3/feed/?token=[MjIxODRfMTY3NDg1NDk4NF8wMzNmNWRiMTQwMGQ0ZGY3ODJiNmYyZjAzYzcxN2ZiZWQ0MjkzZTk5]')
          .then(response => response.json())
          .then(json=>setLeagues(json.response));
          }, []);

          const filterLeagues = leagues.filter((leagues)=>
          {
            if( filterInput.length <= 0)
            {
              return leagues.title.includes("Manchester United") || leagues.title.includes("Barcelona") || leagues.title.includes("Madrid")

            }
            else
            {
              return leagues.title.toLowerCase().includes(filterInput.toLowerCase());
            }
              

            
         });
        
    
      return(
        
        <div class ="container"> 
        <div class = "row"> 
          
          
                {
                  
                    
                    filterLeagues.map((user,i) =>
                {
                  
                    
                    return < Leagues  key={i} logo ={filterLeagues[i]} />
                  
                  
                
                        
                        
                })
                    
            }
            </div>
       
          </div>
          

  
        
    
);
}

export default LeaguesList;