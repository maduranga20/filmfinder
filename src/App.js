import './App.css';
// import ApiAccess from './Component/ApiAccess';
import FetchData from './Component/Movilist';
import SearchMovie from './Component/SearchBar';

function App() {
  return (
    <div className="App">
     <FetchData/>
    <SearchMovie/>
 
    </div>
  );
}

export default App;
