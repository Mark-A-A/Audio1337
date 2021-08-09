import React, { useEffect, useState, useRef } from "react";
import moment from 'moment';

import { useMarkers } from "./useMarkers";

export const useAudioPlayer = ({ filePath, markers = [] }) => {
  const [duration, setDuration] = useState("--:--");
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [maxTime, setMaxTime] = useState(null);
  const minTime = 0;

  const marks = [
    {
      value: minTime,
      label: `00:00`
    },
    {
      value: maxTime,
      label: `${duration}`
    },
  ]
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

    return () => {
      controls.stop();
    }
  }, []);

  const { markerToDisplay } = useMarkers(markers, maxTime, currentTime);

  const handlePlayPauseButtonClick = (e) => {
    if (playing) {
      controls.pause()
    } else {
      controls.play();
    }
  };

  const handleMouseChange = (e, value) => {
    const { type } = e;

    const {type: markerType} = markerToDisplay

    if (type === 'mouseDown') {
      controls.pause();
    }

    if (type === 'mousemove') {
      controls.pause();
      audioElementRef.current.currentTime = value
      controls.play();
    }
  }

  const handleStop = (e) => {
    controls.stop()
  };


  return {
    playing,
    handlePlayPauseButtonClick,
    handleStop,
    handleMouseChange,
    duration,
    minTime,
    maxTime,
    currentTime,
    marks,
    markerToDisplay
  }
}