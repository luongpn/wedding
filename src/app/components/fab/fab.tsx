"use client";
import React from "react";
import "./index.scss";
import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { MdSkipNext, MdSkipPrevious, MdStart, MdStop } from "react-icons/md";
import { IoMdClose, IoMdPause, IoMdPlay } from "react-icons/io";
import ReactAudioPlayer from "react-audio-player";

const Fab = () => {
  const audioRef = React.useRef<any>(null);
  const [isPlayed, setIsPlayed] = React.useState(false);
  const [songs, setSongs] = React.useState([
    "song1.mp3",
    "song2.ogg",
    "song3.mp3",
  ]);
  const [selectedSongIndex, setSelectedSongIndex] = React.useState(0);

  React.useEffect(() => {
    if (audioRef != null && audioRef.current != null) {
      if (isPlayed) {
        console.log("🚀 ~ React.useEffect ~ isPlayed:", isPlayed);
        audioRef.current.audioEl.current.play();
      } else {
        audioRef.current.audioEl.current.pause();
      }
    }
  }, [isPlayed, audioRef]);

  const handlePlayNextSong = (e) => {
    e.preventDefault();
    setSelectedSongIndex(selectedSongIndex >= 2 ? 0 : selectedSongIndex + 1);
    audioRef.current.audioEl.current.pause();
    if (isPlayed) {
      setTimeout(() => {
        audioRef.current.audioEl.current.play();
      }, 1000);
    }
  };

  const handlePlayPrevSong = (e) => {
    e.preventDefault();
    setSelectedSongIndex(selectedSongIndex <= 0 ? 2 : selectedSongIndex - 1);
    audioRef.current.audioEl.current.pause();
    if (isPlayed) {
      setTimeout(() => {
        audioRef.current.audioEl.current.play();
      }, 1000);
    }
  };

  return (
    <div className="btn-multi fixed bottom-4 left-4 z-50">
      <ReactAudioPlayer
        ref={audioRef}
        style={{
          display: "none",
        }}
        src={songs[selectedSongIndex]}
        controls
      />

      <input type="checkbox" id="multi-btn" name="multi-btn" />
      <label htmlFor="multi-btn">
        <span
          className="btn btn-circle"
          onClick={(e) => {
            e.preventDefault();
            setIsPlayed(!isPlayed);
          }}
        >
          <i className="fa fa-facebook icon" aria-hidden="true">
            {isPlayed ? <IoMdPause /> : <IoMdPlay />}
          </i>
        </span>
        <span className="btn btn-circle" onClick={handlePlayNextSong}>
          <i className="fa fa-twitter icon" aria-hidden="true">
            <MdSkipNext />
          </i>
        </span>
        <span className="btn btn-circle" onClick={handlePlayPrevSong}>
          <i className="fa fa-google-plus icon" aria-hidden="true">
            <MdSkipPrevious />
          </i>
        </span>
        <span className="btn btn-circle">
          <i className="material-icons icon">
            <IoMdClose />
          </i>
        </span>
        <i className="material-icons icon">
          {isPlayed ? <CiVolumeHigh /> : <CiVolumeMute />}
        </i>
      </label>
    </div>
  );
};

export default Fab;
