import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelector } from "../redux/Slice/SongSlice";
import { songsSelector } from "../redux/Slice/SongsSlice";

export default function Playing() {
  const dispatch = useDispatch();
  const {song} = useSelector(songSelector);
  const {songs} = useSelector(songsSelector);
  const handleClickNext=()=>{
    if (song.id < songs.length-1) {
      dispatch(getSongById(song.id+1));
    }else{
      dispatch(getSongById(0));
    }
  

  };
  const handleClickPre=()=>{
    if(song.id > 0){
      dispatch(getSongById(song.id-1));
    }
  };
 
  
  return (
    <AudioPlayer
      className="player-music"
      src={song.url}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPre}
    />
  );
}
