import React from 'react';
import { useState, useEffect } from 'react';
import Leagues from './Leagues';
const LeaguesList = () =>
{
    const [leagues,setLeagues]= useState([]);

  
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
          // console.log(leagues.competition.includes("GERMANY: Bundesliga"));
           return leagues.title.includes("Manchester United") || leagues.title.includes("Barcelona")
          
           

         });
    
      return(
        
        <div class ="d-grid gap-3 ">
            {
           filterLeagues.map((user,i) =>
    {
        //console.log(filterLeagues);
        return <Leagues key={i} logo ={filterLeagues[i]} />
    })
}
        </div>
    
);
}

export default LeaguesList;