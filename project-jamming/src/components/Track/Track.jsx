import './Track.css';

const Track = ({ track, isRemoval }) => {
  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action">-</button>;
    }
    return <button className="Track-action">+</button>;
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;