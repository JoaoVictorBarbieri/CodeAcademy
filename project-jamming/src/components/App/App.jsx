// src/App.jsx

import React, { useState } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  // --- ESTADO CENTRALIZADO ---

  // Guarda os resultados da busca.
  // Usamos os dados que antes estavam em SearchResults.js
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Innerbloom', artist: 'RUFUS DU SOL', album: 'Bloom' },
    { id: 2, name: 'Burguesinha', artist: 'Seu Jorge', album: 'Músicas para Churrasco Vol.1' },
    { id: 3, name: 'Amsterdam', artist: 'Nothing But Thieves', album: 'Broken Machine' },
  ]);

  // Guarda as músicas da playlist do usuário.
  // Usamos os dados que antes estavam em Playlist.js
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // --- FUNÇÕES DE LÓGICA ---

  // Função para adicionar uma música à playlist
  const addTrack = (trackToAdd) => {
    // Verifica se a música já está na playlist pelo ID
    if (playlistTracks.find(savedTrack => savedTrack.id === trackToAdd.id)) {
      return; // Se já estiver, não faz nada
    }
    // Adiciona a nova música à lista existente
    setPlaylistTracks(prevTracks => [...prevTracks, trackToAdd]);
  };

  // Função para remover uma música da playlist
  const removeTrack = (trackToRemove) => {
    // Filtra a lista, mantendo apenas as músicas que NÃO têm o ID da música a ser removida
    setPlaylistTracks(prevTracks => prevTracks.filter(track => track.id !== trackToRemove.id));
  };


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          {/*
            Passamos a lista de resultados e a função de adicionar para SearchResults
          */}
          <SearchResults searchResults={searchResults} onAdd={addTrack} />

          {/*
            Passamos a lista da playlist e a função de remover para Playlist
          */}
          <Playlist playlistTracks={playlistTracks} onRemove={removeTrack} />
        </div>
      </div>
    </div>
  );
}

export default App;