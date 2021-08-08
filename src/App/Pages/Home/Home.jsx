import React from "react";

import { Page } from 'Components/Page/Page'

import { useGetEpisodesList } from './Hooks/useGetEpisodesList'
import { PodcastList } from './PodcastList'

export function Home() {
  const {
    loading,
    episodesList,
    error
  } = useGetEpisodesList();

  return (
    <>
      <Page pageName={"podcast-page"} title={`Podcasts Available`} containerSize="md">
        <PodcastList loading={loading} podcasts={episodesList} />
      </Page>
    </>
  )
}

