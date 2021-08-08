import React, { useEffect, useState, useRef } from "react";
import moment from 'moment';

export const useAudioPlayer = (markers) => {
  const [metaData, setMetaData] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState("--:--");
  const [playing, setPlaying] = useState();
  
  const audioRef = useRef(null);


  const controls = {
    play: () => {
      const { current: audioElement } = audioRef || {};
      
      audioElement.play();
      
      setPlaying(true)
    },
    pause: () => {
      const { current: audioElement } = audioRef || {};
    
      audioElement.pause();

      setPlaying(false)
    }
  }

  const handlePlayStopButtonClick = (e) => {
    if (playing) {
      controls.pause()
    } else {
      controls.play();
    }
  }

  const onDataLoaded = (e) => {
    setMetaData(e.target)

    const { duration } = e.target

    const durationParsed = moment("1900-01-01 00:00:00").add(duration, 'seconds').format("HH:mm:ss");
    setDuration(durationParsed);
  }

  const onTimeUpdate = (e) => {
    console.log("onTimeUpdate")
    console.dir(e)

  }

  return {
    audioRef,
    playing,
    handlePlayStopButtonClick,
    onTimeUpdate,
    onDataLoaded,
    duration
  }
}