import React from "react";
import { useParams } from 'react-router-dom';

import { Page } from 'Components/Page/Page';
import { usePodCastEpisode } from "./Hooks/usePodcastEpisode";
import { AudioPlayer } from './AudioPlayer';
import { Markers } from './Markers';

export function PodcastEpisode() {
  const { id } = useParams();

  const { name, markers, audioFileURL} = usePodCastEpisode(id)
  return (
    <Page pageName={"podcast-page"} title={`Episode: ${name}`} containerSize="md">
      <AudioPlayer filePath={audioFileURL}/>
      <Markers markers={markers}/>
    </Page>
  )
}
