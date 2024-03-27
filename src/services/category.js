import axios from "axios";

export const listCategories = () => {
  return axios.get('/categories');
}