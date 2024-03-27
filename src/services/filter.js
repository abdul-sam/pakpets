import axios from "axios";

export const listPopularSearches = () => {
  return axios.get('/popular-searches');
}
