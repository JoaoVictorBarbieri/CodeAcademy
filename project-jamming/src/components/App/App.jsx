import React from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Track from "../Track/Track";
import TrackList from "../TrackList/TrackList";
import styles from './App.module.css'

function App(){
  return (
    <div className={styles.App}>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <TrackList />
      <Track />
    </div>

  )
}

export default App