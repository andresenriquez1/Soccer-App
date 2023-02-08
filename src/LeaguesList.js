import React from 'react';
import { useState, useEffect } from 'react';
import Leagues from './Leagues';
const LeaguesList = ({filterInput,filterbyDate}) =>
{
    const [leagues,setLeagues]= useState([]);

    console.log({filterbyDate});

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
                  if(filterbyDate.value == 'Oldest')
                  {
                    let index =filterLeagues.length-1-i;
                    console.log(filterLeagues.length-1-i);
                    console.log(filterLeagues[index]);
                    return < Leagues key={filterLeagues[index]} logo ={filterLeagues[index]} />
                  }
                  else
                  {
                    console.log(filterLeagues[i])
                    return < Leagues  key={i} logo ={filterLeagues[i]} />
                    
                  }
                
                  
                  
                  
                
                        
                        
                })
                    
            }
            </div>
       
          </div>
          

  
        
    
);
}

export default LeaguesList;