import React from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import PauseIcon from '@material-ui/icons/Pause';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useAudioPlayer } from './Hooks/useAudioPlayer';
import { Markers } from './Markers';

import './playerStyles.scss'

export function AudioPlayer(props) {
  const { filePath, markers } = props;

  const {
    loading,
    playing,
    handlePlayPauseButtonClick,
    handleMouseChange,
    handleStop,
    duration,
    minTime,
    maxTime,
    currentTime,
    marks,
    markerToDisplay
  } = useAudioPlayer({ filePath, markers });


  const setValuetext = (value) => {
    return `${Math.round(value)}`;
  }

  return (
    <section className="audio-player-section">
      {
        loading
          ? <CircularProgress />
          : (
            !loading && (
              <Card className="audio-player-card" variant="outlined">
                <h4 className="podcast-header-length">Length: {duration}</h4>
                <figure id="audio-player-box">
                  <div id="slider-wrapper">
                    <Slider
                      defaultValue={0}
                      valueLabelDisplay="on"
                      getAriaValueText={setValuetext}
                      aria-labelledby="discrete-slider-custom"
                      step={1}
                      valueLabelDisplay="auto"
                      onChange={handleMouseChange}
                      marks={marks}
                      value={Number(currentTime.toFixed(1))}
                      min={minTime}
                      max={maxTime}
                    />
                  </div>

                  <ButtonGroup>
                  <IconButton onClick={handlePlayPauseButtonClick} aria-label="play/pause">
                    {
                      playing
                      ? <PauseIcon fontSize="large" />
                      : <PlayArrowIcon fontSize="large" />
                    }
                  </IconButton>
                  <IconButton onClick={handleStop} aria-label="stop">
                    <StopOutlinedIcon fontSize="large" />
                  </IconButton>
                  </ButtonGroup>
                  <figcaption className="markers-wrapper">
                    <Markers markerToDisplay={markerToDisplay} value={currentTime} />
                  </figcaption>
                </figure>
              </Card>
            )
          )
      }
    </section>
  )
}
