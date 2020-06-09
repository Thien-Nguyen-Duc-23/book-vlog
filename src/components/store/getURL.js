import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://34.221.176.20/api/v1/',
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
})
