import axios from 'axios'

export const fetchListofEpisodes =  async () => {
  const configOptions = {
    method: 'get',
    url: 'audioData/episodes'
  }

  return axios(configOptions);
}

export const fetchAudioFileForEpisode =  async (path) => {
  const url = `audioFile${path}`;
  const configOptions = {
    method: 'get',
    responseType: 'blob',
    url
  }

  return axios(configOptions);
}