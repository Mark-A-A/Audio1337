import React from "react";
import { useParams } from 'react-router-dom';

import { Page } from 'Components/Page/Page';
import { usePodCastEpisode } from "./Hooks/usePodcastEpisode";
import { AudioPlayer } from './AudioPlayer';

export function PodcastEpisode() {
  const { id } = useParams();

  const { name, markers, audioFileURL, loading} = usePodCastEpisode(id)
  
  const AudioComponent = () => audioFileURL && <AudioPlayer filePath={audioFileURL} markers={markers}/> || null;
  return (
    <Page pageName={"podcast-page"} title={`Episode: ${name}`} containerSize="md">
      {
        loading 
        ? <>Loading</>
        : (<AudioComponent />)
      }
    </Page>
  )
}
