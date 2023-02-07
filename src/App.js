import Navbar from './NavBar';
import LeaguesList from './LeaguesList';
import SearchBar from './SearchBar';
import './App.css';
import Scroll from './Scroll';
import { useState} from 'react';

function App() {

const [searchField,setSearchField] = useState('');
const [Date,setDate] = useState({
  options: 
  [
    {value: "Relevance", label: 'Relevance'},
    {value: "Oldest", label: 'Oldest'},
    {value: "Newest", label: 'Newest'}
  ]
});

const onSearch = (event) =>
{
 
  setSearchField(event.target.value);
  
}

const onCLick= (selectedOptions)=>
{
  
  setDate(selectedOptions)
}

  return (
    <div >
    
     
        
      <Navbar/>
       <SearchBar input = {onSearch} defaultDate= {Date} updateDate = {onCLick} />
      
      <Scroll > 
      <LeaguesList filterInput = {searchField} filterbyDate = {Date}/>
      </Scroll>
      {/* <Footer/>  next step */} 
      
     
      
  
     
    </div>
    
  );
}

export default App;
