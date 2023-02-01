import Navbar from './NavBar';
import Leagues from './LeaguesList';
//import Scroll from './Scroll';
import './App.css';
import Scroll from './Scroll';


function App() {


  return (
    <div >
    
     
        
      <Navbar/>
      {/* <SearchBar/> Create after footer */}
      <Scroll > 

        <Leagues/>
      </Scroll>
      {/* <Footer/>  next step */} 
      
     
      
  
     
    </div>
    
  );
}

export default App;
