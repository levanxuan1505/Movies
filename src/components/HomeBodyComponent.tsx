/* eslint-disable curly */
import {
  Tv,
  Loading,
  HBOList,
  Discover,
  SportList,
  MoviesList,
  TrendingMovies,
  WatchingList,
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
import React, {useEffect, memo, useState} from 'react';
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
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [watchingMovies, setWatchingMovies] = useState([]);
  const [moviesTheaters, setHboMoviesTheaters] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
    getNowPlayingMovies();
    getSimilarMovies(603692);
    getSimilarMovies2(455476);
    getSimilarMovies3(579);
    getSimilarMovies4(2707);
    getSimilarMovies5(8980);
    getSimilarMovies6(665538);
    getSimilarMovies7(321662);
    getSimilarMovies8(557);
    getSimilarMovies9(5127);
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
  const getSimilarMovies9 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log(data);
    if (data && data.results) setWatchingMovies(data.results);
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
          {nowPlayingMovies.length > 0 && (
            <MoviesList
              title="Now Playing"
              hideSeeAll={false}
              data={nowPlayingMovies}
            />
          )}
          {watchingMovies.length > 0 && (
            <WatchingList
              title="Watching"
              hideSeeAll={false}
              data={watchingMovies}
            />
          )}
          {YoutubeID[0].length > 0 && (
            <HBOTrailers
              title="HBO Trailer"
              hideSeeAll={false}
              data={YoutubeID[0]}
              firstItem={YoutubeID[0].length / 2}
            />
          )}
          {listMovies.length > 0 && (
            <MoviesList title="Popular" hideSeeAll={false} data={listMovies} />
          )}
          {hboMovies.length > 0 && (
            <HBOList
              title="HBO Movies"
              logo="GO"
              hideSeeAll={false}
              data={hboMovies}
            />
          )}
          {discoverMovies.length > 0 && (
            <Discover
              title="Discover"
              hideSeeAll={false}
              data={discoverMovies}
            />
          )}
          {tv.length > 0 && (
            <MoviesList title="Social Channels" hideSeeAll={false} data={tv} />
          )}
          {tvChannels.length > 0 && (
            <Tv
              name="backdrop_path"
              title="TV Channel"
              hideSeeAll={false}
              data={tvChannels}
            />
          )}
          {moviesTheaters.length > 0 && (
            <MoviesList
              title="Movies Theater"
              hideSeeAll={false}
              data={moviesTheaters}
            />
          )}
          {disneyMovies.length > 0 && (
            <MoviesList title="Disney" hideSeeAll={false} data={disneyMovies} />
          )}
          {moviesForKids.length > 0 && (
            <MoviesList
              title="Movies For Kids"
              hideSeeAll={false}
              data={moviesForKids}
            />
          )}
          {YoutubeID[3].length > 0 && (
            <HBOTrailers
              title="Fomula 1"
              firstItem={0}
              hideSeeAll={false}
              data={YoutubeID[3]}
            />
          )}
          {Bundesliga.length > 0 && (
            <SportList
              title="Bundesliga"
              logo="Bundesliga"
              hideSeeAll={false}
              data={Bundesliga}
              symbol="espn"
            />
          )}
          {RolandGarros.length > 0 && (
            <SportList
              title="Roland Garros 2023"
              logo="Roland"
              symbol="skySport"
              hideSeeAll={false}
              data={RolandGarros}
            />
          )}
          {TVChannels.length > 0 && (
            <SportList
              title="TV Channels"
              logo="bigSize"
              symbol="null"
              hideSeeAll={false}
              data={TVChannels}
            />
          )}
          {tvChannels.length > 0 && (
            <TrendingMovies name="TV Shows" data={tvChannels} />
          )}
        </>
      )}
    </>
  );
};

export default memo(HomeBodyComponent);
