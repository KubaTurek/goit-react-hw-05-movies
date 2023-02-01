import axios from 'axios';

export const fetchTrending = async () => {
  const url =
    'https://api.themoviedb.org/3/trending/all/day?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US';

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {}
};

export const fetchSingleMovie = async movieId => {
  const Singlevalue = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US`;
  try {
    const movie = await axios.get(Singlevalue);
    return movie.data;
  } catch (error) {}
};

export const fetchCast = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US`;
  try {
    const cast = await axios.get(url);
    return cast;
  } catch (error) {}
};

export const fetchReviews = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US&page=1`;
  try {
    const reviews = await axios.get(url);
    return reviews.data.results;
  } catch (error) {}
};

export const fetchQuery = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US&query=${query}&page=1&include_adult=false`;
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {}
};
