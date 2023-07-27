/* eslint-disable curly */
import {
  Tv,
  HBOList,
  Loading,
  SportList,
  HBOTrailers,
  HBODiscover,
  HBOTrending,
} from '@components';
import {YoutubeID, VBA2023} from '@constants';
import React, {useEffect, useState} from 'react';
import {fetchSimilarMovies, fetchTvChannelsMovies} from '../Api/MoviesDb';
//
const HBOBodyComponent = () => {
  const [tvChannels, setTvChannels] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [upComingMovies1, setUpComingMovies1] = useState([]);
  const [upComingMovies2, setUpComingMovies2] = useState([]);
  const [upComingMovies3, setUpComingMovies3] = useState([]);
  const [upComingMovies4, setUpComingMovies4] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getTvChannelsMovies();
    getSimilarMovies(9980);
    getSimilarMovies1(575264);
    getSimilarMovies2(667538);
    getSimilarMovies3(2787);
    getSimilarMovies4(296);
    getSimilarMovies5(13387);
    getSimilarMovies6(277);
    getSimilarMovies7(436270);
  }, []);
  //
  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setTopRatedMovies(data.results);
    }
  };
  const getSimilarMovies1 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setUpComingMovies(data.results);
    }
  };
  //
  const getSimilarMovies2 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setDiscoverMovies(data.results);
    }
  };
  //
  const getSimilarMovies3 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setNowPlayingMovies(data.results);
    }
  };
  //
  const getSimilarMovies4 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setUpComingMovies1(data.results);
    }
  };
  //
  const getSimilarMovies5 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setUpComingMovies2(data.results);
    }
  };
  //
  const getSimilarMovies6 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setUpComingMovies3(data.results);
    }
  };
  //
  const getSimilarMovies7 = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setUpComingMovies4(data.results);
    }
  };
  //
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
          {discoverMovies.length > 0 && (
            <HBOTrending name="Trending" data={discoverMovies} />
          )}

          {upComingMovies.length > 0 && (
            <HBOList
              title="HBO Movies"
              logo="GO"
              hideSeeAll={false}
              data={upComingMovies}
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
          <HBOList
            title="HBO Max"
            logo="MAX"
            hideSeeAll={false}
            data={upComingMovies1}
          />
          <HBOTrailers
            title="HBO Trailer"
            hideSeeAll={false}
            data={YoutubeID[0]}
            firstItem={YoutubeID[0].length / 2}
          />
          <HBOList
            title="Now Playing"
            logo="GO"
            hideSeeAll={false}
            data={nowPlayingMovies}
          />
          <HBOList
            title="Popular"
            logo="GO"
            hideSeeAll={false}
            data={upComingMovies2}
          />
          <HBODiscover
            title="GO Discover"
            hideSeeAll={false}
            data={discoverMovies}
          />
          <HBOTrailers
            title="Fast and Furious Series"
            hideSeeAll={false}
            data={YoutubeID[1]}
            firstItem={0}
          />
          <HBOTrailers
            title="Money Heist Series"
            hideSeeAll={false}
            data={YoutubeID[2]}
            firstItem={0}
          />
          <HBOList
            title="HBO Disney"
            logo="GO"
            hideSeeAll={false}
            data={upComingMovies3}
          />
          <HBOList
            title="Movies For Kids"
            logo="GO"
            hideSeeAll={false}
            data={upComingMovies4}
          />
          <SportList
            title="VBA Max 2023"
            logo="vba"
            symbol="espn"
            hideSeeAll={false}
            data={VBA2023}
          />
          <Tv
            name="backdrop_path"
            title="HBO Shows"
            hideSeeAll={false}
            data={tvChannels}
          />
        </>
      )}
    </>
  );
};

export default HBOBodyComponent;
