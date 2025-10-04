import { assets } from "../../assets/assets.js";
import { usePlayer } from "../../context/PlayerContext.jsx";
import React, { useRef, useEffect, useState } from "react";
import "./Player.css";

function Player() {
  const { currentSong, nextSong, prevSong } = usePlayer();

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);



  // Play/Pause control
  useEffect(() => {
    if (currentSong) {
      console.log("Current song URL:", currentSong.url); // 👈 Add this
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onTimeUpdate = () => {
    setProgress(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const progressPercent = (progress / duration) * 100 || 0;

  return (
    <div className="player">
      {currentSong ? (
        <>
          {/* <audio
            ref={audioRef}
            src={assets["song" + currentSong.cover]}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            onEnded={nextSong} // ✅ autoplay next song when finished
          /> */}

          <audio
            ref={audioRef}
            src={currentSong.url}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
          // onEnded={nextSong}
          />

          <div className="currentSongInfo">
            <img
              src={assets["img" + currentSong.cover]}
              alt=""
              className="currentSongCover"
            />
            <div className="currentSongData">
              <span className="currentSongName">{currentSong.name}</span>
              <span className="currentSongSinger">{currentSong.artist}</span>
            </div>
          </div>

          <div className="currentSongControlls">
            <div className="songControlls">
              <img src={assets.shuffle_icon} alt="" className="songControllIcon" />
              <img
                src={assets.prev_icon}
                alt=""
                className="songControllIcon"
                onClick={prevSong} // ✅ prev button
              />
              <img
                src={isPlaying ? assets.pause_icon : assets.play_icon}
                alt=""
                className="songControllIcon playIcon"
                onClick={() => setIsPlaying(!isPlaying)}
              />
              <img
                src={assets.next_icon}
                alt=""
                className="songControllIcon"
                onClick={nextSong} // ✅ next button
              />
              <img src={assets.loop_icon} alt="" className="songControllIcon" />
            </div>
            <div className="currentSongSeeker">
              <span className="currentSongDuration">{formatTime(progress)}</span>
              <div className="seekerBackground">
                <input
                  type="range"
                  className="seeker"
                  min="0"
                  max={duration}
                  value={progress}
                  onChange={handleSeek}
                  style={{
                    background: `linear-gradient(to right, #1db954 0%, #1db954 ${progressPercent}%, #444 ${progressPercent}%, #444 100%)`,
                  }}
                />
              </div>
              <span className="currentSongDuration">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          <div className="songPreviewControlls">
            <img src={assets.plays_icon} alt="" className="songPreviewIcons" />
            <img src={assets.mic_icon} alt="" className="songPreviewIcons" />
            <img src={assets.queue_icon} alt="" className="songPreviewIcons" />
            <img src={assets.speaker_icon} alt="" className="songPreviewIcons" />
            <img src={assets.volume_icon} alt="" className="songPreviewIcons" />
            <div className="volumeBarBackground">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="volumeBar"
                style={{
                  background: `linear-gradient(to right, #1db954 0%, #1db954 ${volume * 100
                    }%, #444 ${volume * 100}%, #444 100%)`,
                }}
              />
            </div>
            <img src={assets.mini_player_icon} alt="" className="songPreviewIcons" />
            <img src={assets.zoom_icon} alt="" className="songPreviewIcons" />
          </div>
        </>
      ) : (
        <p className="warning">Select a song to play</p>
      )}
    </div>
  );
}

export default Player;
