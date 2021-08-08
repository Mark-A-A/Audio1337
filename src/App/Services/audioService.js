import axios from 'axios'

export const fetchListofEpisodes =  async () => {
  const configOptions = {
    method: 'get',
    url: 'audio/episodes'
  }

  return axios(configOptions);
}