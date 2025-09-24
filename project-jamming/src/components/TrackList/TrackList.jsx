import './TrackList.css';
import Track from '../Track/Track';

const TrackList = ({ tracks, isRemoval }) => {
  return (
    <div className="TrackList">
      {
        tracks.map(track => {
          return <Track key={track.id} track={track} isRemoval={isRemoval} />
        })
      }
    </div>
  );
};

export default TrackList;