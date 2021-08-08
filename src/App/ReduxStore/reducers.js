import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';
import { ActionTypes } from 'ReduxStore/ActionTypes'

const episodesInitialState = {
  fetching: null,
  error: null,
  list: [],
}

const episodesReducer = (state = episodesInitialState, action) => {
  const { type, payload } = action;

  const {
    list = null,
    error = null
  } = payload || {};

  switch (type) {
    case ActionTypes.getAllEpisodes.fetch:
      return {
        ...state,
        fetching: true,
        error: null
      }

    case ActionTypes.getAllEpisodes.success:
      return {
        ...state,
        fetching: false,
        list: list
      }

    case ActionTypes.getAllEpisodes.fetch:
      return {
        ...state,
        fetching: false,
        list: [],
        error: error,
      }
    default:
      return state;
  }
}

const audioReducers = {
  episodes: episodesReducer
}

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ...audioReducers
})

export default createRootReducer
