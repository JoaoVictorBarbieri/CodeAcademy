import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='container'>
      <h2>Hey musiclover</h2>
      <p>browse Spotify by title, artist or both...</p>
      <input type="text" placeholder="Pesquisar..." className='searchBar'/>
      <div>
          <button className='title'>Title</button>
          <button className='artist'>Artist</button>
          <button className='all'>All</button>
      </div>
    </div>
  );
};

export default SearchBar