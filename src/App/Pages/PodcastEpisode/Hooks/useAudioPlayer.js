import React, { useEffect, useState, useRef } from "react";
import moment from 'moment';

export const useAudioPlayer = ({ filePath, markers = [] }) => {
  const [duration, setDuration] = useState("--:--");
  const [currentTime, setCurrentTime] = useState(0);
  const [minTime, setMinTime] = useState(null);
  const [maxTime, setMaxTime] = useState(null);
  const [playing, setPlaying] = useState();

  const audioElement = new Audio(filePath);
  const audioElementRef = useRef(audioElement);

  const controls = {
    play: () => {
      audioElementRef.current.play();
      setPlaying(true)
    },
    pause: () => {
      audioElementRef.current.pause();
      setPlaying(false);
    },
    stop: () => {
      audioElementRef.current.pause();
      audioElementRef.current.currentTime = 0;
      setPlaying(false);
      setCurrentTime(0);
    }
  }

  const handlePlayPauseButtonClick = (e) => {
    if (playing) {
      controls.pause()
    } else {
      controls.play();
    }
  };

  const handleStop = (e) => {
    controls.stop()
  };


  useEffect(() => {
    const onLoadedMetadata = (e) => {
        const { duration } = audioElementRef.current;
        const durationParsed = moment("1900-01-01 00:00:00").add(duration, 'seconds').format("HH:mm:ss");
        setDuration(durationParsed);
        setMaxTime(duration);
    }

    const onTimeUpdate = (e) => {
      setCurrentTime(audioElementRef.current.currentTime)
    }
    
    audioElementRef.current.onloadedmetadata = onLoadedMetadata
    audioElementRef.current.ontimeupdate = onTimeUpdate;
  }, []);

  return {
    playing,
    handlePlayPauseButtonClick,
    handleStop,
    duration,
    minTime,
    maxTime,
    currentTime,
  }
}