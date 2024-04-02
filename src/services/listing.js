import axios from "axios";


export const listings = (popular, featured, limit) => {
  return axios.get(`/listings?popular=${popular}&featured=${featured}&limit=${limit}`)
}