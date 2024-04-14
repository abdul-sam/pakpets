import axios from "axios";

export const listBreeders = () => {
  return axios.get('/breeders');
}