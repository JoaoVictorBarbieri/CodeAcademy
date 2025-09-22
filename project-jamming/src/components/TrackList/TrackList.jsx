import './TrackList.css'
import Track from '../Track/Track';

const TrackList = () => {
  return (
    <div className="trackList">
      {/* Exemplo de como os tracks seriam listados */}
      <Track />
      <Track />
      <Track />
    </div>
  );
};

export default TrackList