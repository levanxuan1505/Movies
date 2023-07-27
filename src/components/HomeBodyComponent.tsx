/* eslint-disable curly */
import {
  Tv,
  Loading,
  HBOList,
  Discover,
  SportList,
  MoviesList,
  TrendingMovies,
} from '@components';

import {
  fetchSimilarMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchTvChannelsMovies,
} from '../Api/MoviesDb';
import {HBOTrailers} from '@components';
import React, {useEffect, useState} from 'react';
import {YoutubeID, RolandGarros, TVChannels, Bundesliga} from '@constants';
const HomeBodyComponent = () => {
  const [tv, setTv] = useState([]);
  const [hboMovies, setHboMovies] = useState([]);
  const [tvChannels, setTvChannels] = useState([]);
  const [listMovies, setListMovies] = useState([]);
  const [disneyMovies, setDisneyMovies] = useState([]);
  const [moviesForKids, setMoviesForKids] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [moviesTheaters, setHboMoviesTheaters] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
    getNowPlayingMovies();
    getSimilarMovies(603692);
    getSimilarMovies2(455476);
    getSimilarMovies3(616747);
    getSimilarMovies4(2787);
    getSimilarMovies5(9980);
    getSimilarMovies6(667538);
    getSimilarMovies7(298618);
    getSimilarMovies8(9738);
    getTvChannelsMovies();
  }, []);
  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    // console.log(data);
    if (data && data.results) setTrendingMovies(data.results);
    // setIsLoadingMovies(false);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    // console.log(data);
    if (data && data.results) setUpComingMovies(data.results);
    // setIsLoadingMovies(false);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    // console.log(data);
    if (data && data.results) setTopRatedMovies(data.results);
    // setIsLoadingMovies(false);
  };
  const getNowPlayingMovies = async () => {
    const data = await fetchNowPlayingMovies();
    // console.log(data);
    if (data && data.results) setNowPlayingMovies(data.results);
    // setIsLoadingMovies(false);
  };
  const getSimilarMovies8 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log(data);
    if (data && data.results) setDiscoverMovies(data.results);
    // setIsLoadingMovies(false);
  };
  const getSimilarMovies7 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log(data);
    if (data && data.results) setTv(data.results);
    // setIsLoadingMovies(false);
  };
  const getTvChannelsMovies = async () => {
    const data = await fetchTvChannelsMovies();
    // console.log(data);
    if (data && data.results) setTvChannels(data.results);
    // setIsLoadingMovies(false);
  };
  //
  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setListMovies(data.results);
    }
  };
  const getSimilarMovies2 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setNowPlayingMovies(data.results);
    }
  };
  const getSimilarMovies3 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setHboMovies(data.results);
    }
  };
  const getSimilarMovies4 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setHboMoviesTheaters(data.results);
    }
  };
  const getSimilarMovies5 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setDisneyMovies(data.results);
    }
  };
  const getSimilarMovies6 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setMoviesForKids(data.results);
      setIsLoadingMovies(false);
    }
  };
  return (
    <>
      {isLoadingMovies ? (
        <Loading />
      ) : (
        <>
          {/* trending */}
          {trendingMovies.length > 0 && (
            <TrendingMovies name={'Trending'} data={trendingMovies} />
          )}
          {upComingMovies.length > 0 && (
            <MoviesList
              title="UpComing"
              hideSeeAll={false}
              data={upComingMovies}
            />
          )}
          {topRatedMovies.length > 0 && (
            <MoviesList
              title="Top Rated"
              hideSeeAll={false}
              data={topRatedMovies}
            />
          )}
          <MoviesList
            title="Now Playing"
            hideSeeAll={false}
            data={nowPlayingMovies}
          />
          <HBOTrailers
            title="HBO Trailer"
            hideSeeAll={false}
            data={YoutubeID[0]}
            firstItem={YoutubeID[0].length / 2}
          />
          <MoviesList title="Popular" hideSeeAll={false} data={listMovies} />
          <HBOList
            title="HBO Movies"
            logo="GO"
            hideSeeAll={false}
            data={hboMovies}
          />
          <Discover title="Discover" hideSeeAll={false} data={discoverMovies} />
          <MoviesList title="Social Channels" hideSeeAll={false} data={tv} />
          <Tv
            name="backdrop_path"
            title="TV Channel"
            hideSeeAll={false}
            data={tvChannels}
          />
          <MoviesList
            title="Movies Theater"
            hideSeeAll={false}
            data={moviesTheaters}
          />
          <MoviesList title="Disney" hideSeeAll={false} data={disneyMovies} />
          <MoviesList
            title="Movies For Kids"
            hideSeeAll={false}
            data={moviesForKids}
          />
          <HBOTrailers
            title="Fomula 1"
            firstItem={0}
            hideSeeAll={false}
            data={YoutubeID[3]}
          />
          <SportList
            title="Bundesliga"
            logo="Bundesliga"
            hideSeeAll={false}
            data={Bundesliga}
            symbol="espn"
          />
          <SportList
            title="Roland Garros 2023"
            logo="Roland"
            symbol="skySport"
            hideSeeAll={false}
            data={RolandGarros}
          />
          <SportList
            title="TV Channels"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={TVChannels}
          />
          <TrendingMovies name="TV Shows" data={tvChannels} />
        </>
      )}
    </>
  );
};

export default HomeBodyComponent;
