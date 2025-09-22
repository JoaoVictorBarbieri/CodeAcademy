import './Playlist.css'
import TrackList from '../TrackList/TrackList';

const Playlist = () => {
  return (
    <div className="container">
      <h3>Your List</h3>
      <TrackList />
      <div className="container2">
        <input type="text" defaultValue="choose name" className="choose"/>
        <button className="clear">Clear</button>
        <button className="addList">Add List</button>
      </div>
    </div>
  );
};

export default Playlist