import './App.css'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'



const App = () => {
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='h1'>jammming</h1>
        <button className='login'>login</button>
      </header>
      <main className='grid'>
        <div>
          <SearchBar />
        </div>
        <div>
          <SearchResults />
        </div>
        <div>
          <Playlist />
        </div>
      </main>
    </div>
  );
};

export default App