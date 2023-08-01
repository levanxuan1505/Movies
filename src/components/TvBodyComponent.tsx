/* eslint-disable curly */
import {
  Loading,
  HBOList,
  Discover,
  SportList,
  HBOTrailers,
  TrendingTV,
} from '@components';
import {
  fetchSimilarMovies,
  fetchTopRatedMovies,
  fetchTvChannelsMovies,
} from '../Api/MoviesDb';
import {
  VTV,
  Kplus,
  VBA2023,
  VLeague,
  TVChannels,
  SerieA2023,
  SportsTVShows,
} from '@constants';
import {YoutubeID} from '@constants';
import React, {memo, useEffect, useState} from 'react';
//
const TvBodyComponent = () => {
  const [tv, setTv] = useState([]);
  const [listMovies, setListMovies] = useState([]);
  const [tvChannels, setTvChannels] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);

  //   Call API
  useEffect(() => {
    getTopRatedMovies();
    getTvChannelsMovies();
    getSimilarMovies(199);
    getSimilarMovies2(199);
    getSimilarMovies3(447277);
    getSimilarMovies4(280);
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    // console.log(data);
    if (data && data.results) setTopRatedMovies(data.results);
    // setIsLoadingMovies(false);
  };

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
      setDiscoverMovies(data.results);
    }
  };
  const getSimilarMovies3 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setNowPlayingMovies(data.results);
    }
  };
  const getSimilarMovies4 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log(data);
    if (data && data.results) setTv(data.results);
    // setIsLoadingMovies(false);
  };
  const getTvChannelsMovies = async () => {
    const data = await fetchTvChannelsMovies();
    // console.log(data);
    if (data && data.results) setTvChannels(data.results);
    setIsLoadingMovies(false);
  };
  return (
    <>
      {isLoadingMovies ? (
        <Loading />
      ) : (
        <>
          {/* trending */}
          {tvChannels.length > 0 && (
            <TrendingTV layout={'tinder'} name={'Trending'} data={tvChannels} />
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

          {VTV.length > 0 && (
            <SportList
              title="VTV"
              logo="bigSize"
              symbol="null"
              hideSeeAll={false}
              data={VTV}
            />
          )}

          {topRatedMovies.length > 0 && (
            <HBOList
              title="HBO Top Rated"
              logo="GO"
              hideSeeAll={false}
              data={topRatedMovies}
            />
          )}
          {discoverMovies.length > 0 && (
            <HBOList
              title="HBO Max"
              logo="MAX"
              hideSeeAll={false}
              data={discoverMovies}
            />
          )}
          {Kplus.length > 0 && (
            <SportList
              logo="bigSize"
              title="K+"
              symbol="null"
              hideSeeAll={false}
              data={Kplus}
            />
          )}
          {VBA2023.length > 0 && (
            <SportList
              title="VBA 2023"
              logo="vba"
              symbol="null"
              hideSeeAll={false}
              data={VBA2023}
            />
          )}
          {VLeague.length > 0 && (
            <SportList
              title="V-League"
              logo="bigSize"
              symbol="skySport"
              hideSeeAll={false}
              data={VLeague}
            />
          )}
          {listMovies.length > 0 && (
            <Discover title="Discover" hideSeeAll={false} data={listMovies} />
          )}
          {discoverMovies.length > 0 && (
            <HBOList
              title="Disney"
              logo="null"
              hideSeeAll={false}
              data={discoverMovies}
            />
          )}
          {nowPlayingMovies.length > 0 && (
            <HBOList
              title="Movies For Kids"
              logo="GO"
              hideSeeAll={false}
              data={nowPlayingMovies}
            />
          )}
          {SportsTVShows.length > 0 && (
            <SportList
              title="Sport TV shows"
              logo="bigSize"
              hideSeeAll={false}
              data={SportsTVShows}
              symbol="null"
            />
          )}
          {SerieA2023.length > 0 && (
            <SportList
              title="Serie A 2023"
              logo="bigSize"
              symbol="espn"
              hideSeeAll={false}
              data={SerieA2023}
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
          {tv.length > 0 && (
            <TrendingTV layout="tinder" name="TV Shows" data={tv} />
          )}
        </>
      )}
    </>
  );
};

export default memo(TvBodyComponent);
