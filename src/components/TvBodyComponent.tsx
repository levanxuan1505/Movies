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
  SerieA2023,
  TVChannels,
  SportsTVShows,
} from '@constants';
import {YoutubeID} from '@constants';
import React, {useEffect, useState} from 'react';
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
          <SportList
            title="TV Channels"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={TVChannels}
          />

          <SportList
            title="VTV"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={VTV}
          />

          {topRatedMovies.length > 0 && (
            <HBOList
              title="HBO Top Rated"
              logo="GO"
              hideSeeAll={false}
              data={topRatedMovies}
            />
          )}
          <HBOList
            title="HBO Max"
            logo="MAX"
            hideSeeAll={false}
            data={discoverMovies}
          />
          <SportList
            logo="bigSize"
            title="K+"
            symbol="null"
            hideSeeAll={false}
            data={Kplus}
          />
          <SportList
            title="VBA 2023"
            logo="vba"
            symbol="null"
            hideSeeAll={false}
            data={VBA2023}
          />
          <SportList
            title="V-League"
            logo="bigSize"
            symbol="skySport"
            hideSeeAll={false}
            data={VLeague}
          />
          <Discover title="Discover" hideSeeAll={false} data={listMovies} />
          <HBOList
            title="Disney"
            logo="null"
            hideSeeAll={false}
            data={discoverMovies}
          />
          <HBOList
            title="Movies For Kids"
            logo="GO"
            hideSeeAll={false}
            data={nowPlayingMovies}
          />
          <SportList
            title="Sport TV shows"
            logo="bigSize"
            hideSeeAll={false}
            data={SportsTVShows}
            symbol="null"
          />
          <SportList
            title="Serie A 2023"
            logo="bigSize"
            symbol="espn"
            hideSeeAll={false}
            data={SerieA2023}
          />
          <HBOTrailers
            title="Fomula 1"
            firstItem={0}
            hideSeeAll={false}
            data={YoutubeID[3]}
          />
          <TrendingTV name="TV Shows" data={tv} />
        </>
      )}
    </>
  );
};

export default TvBodyComponent;
