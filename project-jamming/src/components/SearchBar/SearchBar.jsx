import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
};

export default SearchBar;
