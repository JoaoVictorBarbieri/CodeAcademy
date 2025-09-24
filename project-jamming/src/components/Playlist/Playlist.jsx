import './Playlist.css';
import TrackList from '../TrackList/TrackList';

const Playlist = () => {
    const playlistTracks = [
        { id: 5, name: 'Stronger', artist: 'Britney Spears', album: 'Oops!... I Did It Again' },
        { id: 6, name: 'So Emotional', artist: 'Whitney Houston', album: 'Whitney' },
        { id: 7, name: 'It\'s Not Right But It\'s Okay', artist: 'Whitney Houston', album: 'My Love Is Your Love' }
    ];

  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      <TrackList tracks={playlistTracks} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;