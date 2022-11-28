import axios from 'axios';

export function getLikeData() {
  return axios.get('/data/ground.json').then((res) => res.data);
}
