// src/components/TrackList/TrackList.jsx

import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

// Adicionamos onAdd e onRemove às props recebidas
const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <div className="TrackList">
      {
        tracks.map(track => {
          return (
            <Track
              key={track.id}
              track={track}
              isRemoval={isRemoval}
              onAdd={onAdd}       // Passa a função onAdd para o Track
              onRemove={onRemove} // Passa a função onRemove para o Track
            />
          )
        })
      }
    </div>
  );
};

export default TrackList;