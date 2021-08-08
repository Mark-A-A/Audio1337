import { ActionTypes } from 'ReduxStore/ActionTypes'

export const getAllEpisodesFetching = () => {
  return {
    type: ActionTypes.getAllEpisodes.fetch
  }
};

export const getAllEpisodesSuccess = (episodesList) => {
  return {
    type: ActionTypes.getAllEpisodes.success,
    payload: {
      list: episodesList
    }
  }
};

export const getAllEpisodesError = (error) => {
  return {
    type: ActionTypes.getAllEpisodes.error,
    payload: {
      error
    }
  }
};
