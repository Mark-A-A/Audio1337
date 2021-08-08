import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { getListOfEpisodesFromStore } from 'ReduxStore/selectors'
import { getEpisodesList } from '../Actions/getEpisodesList'

export const useGetEpisodesList = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(getListOfEpisodesFromStore);

  const { fetching: loading, list, error} = episodes;
  
  useEffect(() => {
    dispatch(getEpisodesList())
  }, [])

  return {
    loading,
    episodesList: list,
    error
  }
}