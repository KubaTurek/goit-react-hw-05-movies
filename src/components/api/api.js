import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      '/trending/all/day?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US'
    );
    return response.data.results;
  } catch (error) {}
};

export const fetchSingleMovie = async movieId => {
  try {
    const movie = await axios.get(
      `/movie/${movieId}?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US`
    );
    return movie.data;
  } catch (error) {}
};

export const fetchCast = async movieId => {
  try {
    const cast = await axios.get(
      `/movie/${movieId}/credits?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US`
    );
    return cast;
  } catch (error) {}
};

export const fetchReviews = async movieId => {
  try {
    const reviews = await axios.get(
      `/movie/${movieId}/reviews?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US&page=1`
    );
    return reviews.data.results;
  } catch (error) {}
};

export const fetchQuery = async query => {
  try {
    const result = await axios.get(
      `/search/movie?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return result.data;
  } catch (error) {}
};
