import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

const SearchResults = () => {
    const results = [
        { id: 1, name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across The Water' },
        { id: 2, name: 'Tiny Dancer', artist: 'Tim McGraw', album: 'Love Story' },
        { id: 3, name: 'Tiny Dancer', artist: 'Rockabye Baby!', album: 'Lullaby Renditions of Elton John' },
        { id: 4, name: 'Tiny Dancer - Live Album Version', artist: 'Ben Folds', album: 'Ben Folds Live' }
    ];

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={results} isRemoval={false} />
    </div>
  );
};

export default SearchResults;