import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export const Api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});
