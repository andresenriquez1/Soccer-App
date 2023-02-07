import Navbar from './NavBar';
import LeaguesList from './LeaguesList';
import SearchBar from './SearchBar';
import './App.css';
import Scroll from './Scroll';
import { useState} from 'react';

function App() {

const [searchField,setSearchField] = useState('');
const onSearch = (event) =>
{
 
  setSearchField(event.target.value);
  

}

  return (
    <div >
    
     
        
      <Navbar/>
       <SearchBar input = {onSearch} />
      <Scroll > 

        <LeaguesList filterInput = {searchField}/>
      </Scroll>
      {/* <Footer/>  next step */} 
      
     
      
  
     
    </div>
    
  );
}

export default App;
