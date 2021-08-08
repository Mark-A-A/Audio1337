import React from "react";

import { useGetEpisodesList} from './Hooks/useGetEpisodesList'

export function Home() {
  const {
    fetching,
    episodesList,
    error
  } = useGetEpisodesList();

  return <h2>Home</h2>;
}

