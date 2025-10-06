import React from "react";
import { Outlet } from "react-router-dom";
import { usePlayer } from "./context/PlayerContext.jsx";

import LeftBar from "./features/leftBar/leftBar.jsx";
import Player from "./features/player/Player.jsx";

import { assets } from "./assets/assets.js";
import "./App.css";

function App() {
  const { currentSong, nextSong, prevSong } = usePlayer();

  return (
    <div className="Software">
      <div className="interface">
        {/* SideBar */}
        <LeftBar />

        {/* Main Content (where pages render) */}
        <div className="HomePage">
          <Outlet />
        </div>

        {/* Song Previer Bar */}
        <div className="PreviewBar">
          {currentSong ? (
            <div className="previewDetails">
              <span className="playlistName">Playlist Name</span>
              <img
                src={assets["img" + currentSong.cover]}
                alt="Album cover"
                className="songPreviewCover"
              />
              <div className="names">
                <span className="songPreviewName">{currentSong.name}</span>
                <span className="singerPreviewName">{currentSong.artist}</span>
                <img
                  src={assets.like_icon}
                  alt="Like icon"
                  className="icon previewIcon"
                />
              </div>
            </div>
          ) : (
            <div className="previewDetails">
              <span className="warning">No song playing</span>
            </div>
          )}
        </div>

      </div>

      {/* Bottom Player */}
      <Player />
    </div>
  );
}

export default App;