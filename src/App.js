import Navbar from './NavBar';
import Leagues from './LeaguesList';
import Scroll from './Scroll';

//import { useState, useEffect } from 'react';
import './App.css';
//import axios from "axios";

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Scroll>
      
      <Leagues/>

      </Scroll>
     
    
    </div>
  );
}

export default App;
