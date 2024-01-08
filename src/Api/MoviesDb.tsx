import axios from 'axios';
import {apiKey} from '@constants';
// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const apiBaseUrlOPhim = 'https://ophim1.com';
// variables for call Api
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const tvProvidersEndpoint = `${apiBaseUrl}/watch/providers/tv?api_key=${apiKey}`;
const tvChannelEndpoint = `${apiBaseUrl}/discover/tv?api_key=${apiKey}`;
const nowPlayingMoviesEndpoint = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const discoverMoviesEndpoint = `${apiBaseUrl}/discover/movie?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;
// endpoints with dynamic params
const pageMoviesOphim = page =>
  `${apiBaseUrlOPhim}/danh-sach/phim-moi-cap-nhat?page=${page}`;
const detailMoviesOPhim = slug => `${apiBaseUrlOPhim}/phim/${slug}`;

const movieDetailsEndpoint = id =>
  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;

const movieCreditsEndpoint = id =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;

const similarMoviesEndpoint = id =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

// movie screen apis
export const fetchMovieDetails = id => {
  return apiCall(movieDetailsEndpoint(id), null);
};
export const fetchMovieCredits = movieId => {
  return apiCall(movieCreditsEndpoint(movieId), null);
};
export const fetchSimilarMovies = movieId => {
  return apiCall(similarMoviesEndpoint(movieId), null);
};
export const fetchMoviesOphim = page => {
  return apiCall(pageMoviesOphim(page), null);
};
export const fetchDetailsMoviesOphim = slug => {
  return apiCall(detailMoviesOPhim(slug), null);
};
// person
const personDetailsEndpoint = id =>
  `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;

const personMoviesEndpoint = id =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;
// person screen apis
export const fetchPersonDetails = personId => {
  return apiCall(personDetailsEndpoint(personId), null);
};
export const fetchPersonMovies = personId => {
  return apiCall(personMoviesEndpoint(personId), null);
};

// functions to get images of different widths, (show images using these to improve the loading times)
export const image500 = posterPath =>
  posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
export const image342 = posterPath =>
  posterPath ? 'https://image.tmdb.org/t/p/w342' + posterPath : null;
export const image185 = posterPath =>
  posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null;
export const imageOriginal = posterPath =>
  posterPath ? 'https://image.tmdb.org/t/p/original' + posterPath : null;
export const imageOphim = posterPath =>
  posterPath ? 'https://img.ophim8.cc/uploads/movies/' + posterPath : null;

// fallback images
export const fallbackPersonImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

export const fallbackMoviePoster =
  'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
// call API
const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    // console.log('error: ', error);
    return {};
  }
};

// home screen apis
export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint, null);
};
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint, null);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint, null);
};
export const fetchDiscoverMovies = () => {
  return apiCall(discoverMoviesEndpoint, null);
};
export const fetchNowPlayingMovies = () => {
  return apiCall(nowPlayingMoviesEndpoint, null);
};
export const fetchTvMovies = () => {
  return apiCall(tvProvidersEndpoint, null);
};
export const fetchTvChannelsMovies = () => {
  return apiCall(tvChannelEndpoint, null);
};
// search screen apis
export const searchMovies = params => {
  return apiCall(searchMoviesEndpoint, params);
};
