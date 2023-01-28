import Navbar from './NavBar';
import Leagues from './LeaguesList';
//import { useState, useEffect } from 'react';
import './App.css';
//import axios from "axios";

function App() {
  // const [Games,setGames]= useState([]);
  // const [Image,setImage]= useState([]);
  // const [video,setVideo]= useState([]);
  // const [leagues,setLeagues]= useState([]);

  return (
    <div className="App">
      <Navbar/>
      
     <Leagues/>
    
    </div>
  );
}

export default App;
