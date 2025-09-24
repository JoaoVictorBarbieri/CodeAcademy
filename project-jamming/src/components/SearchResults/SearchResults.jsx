// src/components/SearchResults/SearchResults.jsx

import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

// O componente agora recebe 'searchResults' e 'onAdd' como props
const SearchResults = ({ searchResults, onAdd }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/*
        Passamos os resultados recebidos para o TrackList.
        Também passamos a função onAdd e definimos que o botão será de adição (isRemoval={false})
      */}
      <TrackList
        tracks={searchResults}
        onAdd={onAdd}
        isRemoval={false}
      />
    </div>
  );
};

export default SearchResults;