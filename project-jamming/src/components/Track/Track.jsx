// src/components/Track/Track.jsx

import React from 'react';
import './Track.css';

// Adicionamos onAdd e onRemove às props
const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  // Função que será chamada quando o botão '+' for clicado
  const addTrack = () => {
    onAdd(track); // Chama a função onAdd, passando a música atual
  };

  // Função que será chamada quando o botão '-' for clicado
  const removeTrack = () => {
    onRemove(track); // Chama a função onRemove, passando a música atual
  };

  const renderAction = () => {
    if (isRemoval) {
      // Se for um botão de remoção, chama removeTrack no clique
      return <button className="Track-action" onClick={removeTrack}>-</button>;
    } else {
      // Se for um botão de adição, chama addTrack no clique
      return <button className="Track-action" onClick={addTrack}>+</button>;
    }
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