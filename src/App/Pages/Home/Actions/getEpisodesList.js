import {
  getAllEpisodesFetching,
  getAllEpisodesSuccess,
  getAllEpisodesError,
} from './Creators'

import { fetchListofEpisodes } from 'Services/audioService'

export const getEpisodesList = () => async (dispatch, getState) => {
  try {
    dispatch(getAllEpisodesFetching());
    const { data: episodes } = await fetchListofEpisodes();
    dispatch(getAllEpisodesSuccess(episodes));
  } catch (err) {
    console.error('getEpisodesList - FAILED');
    dispatch(getAllEpisodesError(err));
  }
}