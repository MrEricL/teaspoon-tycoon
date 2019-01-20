import axios from 'axios';

const API_URL = 'https://shrouded-garden-55206.herokuapp.com/';

function resolveInternal(path) {
  return API_URL + path;
}

export function postInternal(path, data, callback) {
  return axios.post(resolveInternal(path), data).then(callback);
}
