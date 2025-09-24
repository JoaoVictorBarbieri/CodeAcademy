// src/components/Playlist/Playlist.jsx

import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

// O componente agora recebe 'playlistTracks' e 'onRemove' como props
const Playlist = ({ playlistTracks, onRemove }) => {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      {/*
        Passamos as músicas da playlist para o TrackList.
        Também passamos a função onRemove e definimos que o botão será de remoção (isRemoval={true})
      */}
      <TrackList
        tracks={playlistTracks}
        onRemove={onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;