import React from "react";
import { useAudioPlayer  } from './Hooks/useAudioPlayer';

export function AudioPlayer(props) {
  const { filePath } = props;

  const {
    audioRef,
    playing,
    handlePlayStopButtonClick,
    onTimeUpdate,
    onDataLoaded,
    duration
  } = useAudioPlayer(filePath);


  return (
    <section className="audio-player-section">
      {
        filePath && (
          <figure>
            <figcaption>Listen to the Podcast</figcaption>
            <h4>{duration}</h4>
            <audio
              ref={audioRef}
              src={filePath}
              onTimeUpdate={onTimeUpdate}
              onLoadedMetadata={onDataLoaded}
            >
            </audio>
            <button onClick={handlePlayStopButtonClick}>{playing ? "Pause" : "Play"}</button>
          </figure>
        )
      }
    </section>
  )
}
