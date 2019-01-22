import axios from 'axios';

const API_URL = 'https://shrouded-garden-55206.herokuapp.com/';

function resolveInternal(path) {
  return API_URL + path;
}

export function postInternal(path, data, callback, config = {}) {
  return axios.post(resolveInternal(path), data, config).then(callback);
}
