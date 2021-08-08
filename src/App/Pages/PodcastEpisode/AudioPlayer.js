import React from "react";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useAudioPlayer } from './Hooks/useAudioPlayer';
import { Markers } from './Markers';

import './playerStyles.scss'

export function AudioPlayer(props) {
  const { filePath, markers } = props;

  const {
    loading,
    playing,
    handlePlayPauseButtonClick,
    handleStop,
    duration,
    minTime,
    maxTime,
    currentTime,
  } = useAudioPlayer({ filePath, markers });


  const setValuetext = (value) => {
    return `${value}`;
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
                  <Slider
                    defaultValue={0}
                    valueLabelDisplay="on"
                    getAriaValueText={setValuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    valueLabelDisplay="auto"
                    // marks={marks}
                    value={currentTime}
                    min={minTime}
                    max={maxTime}
                  />
                  <button onClick={handlePlayPauseButtonClick}>
                    {playing
                      ? <PauseCircleOutlineOutlinedIcon fontSize="large" />
                      : <PlayCircleOutlineIcon fontSize="large" />
                    }
                  </button>
                  <button onClick={handleStop}>
                    <StopOutlinedIcon fontSize="large" />
                  </button>
                  <figcaption><Markers markers={markers} /></figcaption>
                </figure>
              </Card>

            )
          )
      }
    </section>
  )
}
