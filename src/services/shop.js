import axios from "axios";

export const listShops = () => {
  return axios.get('/shops');
}