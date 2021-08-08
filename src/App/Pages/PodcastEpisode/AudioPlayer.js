import React from "react";
import { useParams } from 'react-router-dom';

export function AudioPlayer(props) {
  const { filePath } = props;

  console.dir(props)
  return (
    <section className="audio-player-section">
      {
        filePath && (
          <figure>
            <figcaption>Listen to the Podcast</figcaption>
            <audio
              controls
              src={filePath}
              onTimeUpdate={(time) => console.log(time)}
            >
            </audio>
          </figure>
        )
      }
    </section>
  )
}
