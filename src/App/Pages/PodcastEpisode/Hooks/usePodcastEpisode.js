import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAudioFileForEpisode } from 'Services/audioService'
import { getPodcastEpisode } from 'ReduxStore/selectors';

export const usePodCastEpisode = (id) => {
  const { name, markers, audio: path } = useSelector(getPodcastEpisode)(id);

  const [audioFileURL, setAudioFileURL] = useState(null)
  const [audioFileFetched, setAudioFileFetched] = useState(false)

  useEffect(async () => {
    if (!audioFileFetched) {
      const response = await fetchAudioFileForEpisode(path)

      const url = window.URL.createObjectURL(response.data);

      if (path && url) {
        setAudioFileFetched(true);
        setAudioFileURL(url)
      }
    }
  }, [path, audioFileURL, audioFileFetched])

  return {
    name,
    markers,
    audioFileURL
  }
}
