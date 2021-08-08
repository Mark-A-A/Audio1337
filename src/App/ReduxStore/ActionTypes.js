const actions = {};

const createAction = (actionType) => {
  ['fetch', 'success', 'error'].forEach((key) => {
    if (!actions[actionType]) {
      actions[actionType] = {};
    }
    const actionKey = actions[actionType] && actions[actionType][key] || null;

    if (!actionKey) {
      actions[actionType][key] = `${actionType}-${key}`
    }
  });
}

const types = [
  "getAllEpisodes",
  "getEpisodeById"
]

const getActions = () => {
  if (!Object.keys(actions).length) {
    types.forEach(type => createAction(type))
  }
  return actions
};

export const ActionTypes = getActions();