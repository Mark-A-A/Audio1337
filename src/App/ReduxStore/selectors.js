
export const getListOfEpisodesFromStore = (state) => {
  return state?.episodes || {}
}

export const getPodcastEpisode = (state) => (id) => {
  const { list: episodes} = getListOfEpisodesFromStore(state);

  const currentEpisode = episodes?.find(episode => episode?.id === id);
  return currentEpisode || {}
}
