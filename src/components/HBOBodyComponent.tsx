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
import React, {useEffect, memo, useState} from 'react';
import {fetchSimilarMovies, fetchTvChannelsMovies} from '../Api/MoviesDb';

//

//
const HBOBodyComponent = () => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [HBOMax, setHBOMax] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [HBODisney, setHBODisney] = useState([]);
  const [moviesForKids, setMoviesForKids] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [HBOShows, setHBOShows] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies(9980);
    getUpcomingMovies(575264);
    getHBOMax(296);
    getNowPlayingMovies(2787);
    getPopularMovies(13338);
    getHBoDisneyMovies(277);
    getMoviesForKids(436270);
    getHBOShows();
    getGODiscover(43399);
  }, []);
  //
  const getTopRatedMovies = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setTopRatedMovies(data.results);
    }
  };
  const getUpcomingMovies = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setUpComingMovies(data.results);
    }
  };
  //
  const getHBOMax = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setHBOMax(data.results);
    }
  };
  //
  const getNowPlayingMovies = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setNowPlayingMovies(data.results);
    }
  };
  //
  //
  //
  const getPopularMovies = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setPopularMovies(data.results);
    }
  };
  //
  const getHBoDisneyMovies = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setHBODisney(data.results);
    }
  };
  //
  const getMoviesForKids = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setMoviesForKids(data.results);
    }
  };
  //
  const getHBOShows = async () => {
    const data = await fetchTvChannelsMovies();
    // console.log(data);
    if (data && data.results) setHBOShows(data.results);
    setIsLoadingMovies(false);
  };

  const getGODiscover = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setDiscoverMovies(data.results);
    }
  };

  return (
    <>
      {isLoadingMovies ? (
        <>
          <Loading />
        </>
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
          {HBOMax.length > 0 && (
            <HBOList
              title="HBO Max"
              logo="MAX"
              hideSeeAll={false}
              data={HBOMax}
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
          {nowPlayingMovies.length > 0 && (
            <HBOList
              title="Now Playing"
              logo="GO"
              hideSeeAll={false}
              data={nowPlayingMovies}
            />
          )}
          {popularMovies.length > 0 && (
            <HBOList
              title="Popular"
              logo="GO"
              hideSeeAll={false}
              data={popularMovies}
            />
          )}
          {discoverMovies.length > 0 && (
            <HBODiscover
              title="GO Discover"
              hideSeeAll={false}
              data={discoverMovies}
            />
          )}
          {YoutubeID[1].length > 0 && (
            <HBOTrailers
              title="Fast and Furious Series"
              hideSeeAll={false}
              data={YoutubeID[1]}
              firstItem={0}
            />
          )}
          {YoutubeID[2].length > 0 && (
            <HBOTrailers
              title="Money Heist Series"
              hideSeeAll={false}
              data={YoutubeID[2]}
              firstItem={0}
            />
          )}
          {HBODisney.length > 0 && (
            <HBOList
              title="HBO Disney"
              logo="GO"
              hideSeeAll={false}
              data={HBODisney}
            />
          )}
          {moviesForKids.length > 0 && (
            <HBOList
              title="Movies For Kids"
              logo="GO"
              hideSeeAll={false}
              data={moviesForKids}
            />
          )}
          {VBA2023.length > 0 && (
            <SportList
              title="VBA Max 2023"
              logo="vba"
              symbol="espn"
              hideSeeAll={false}
              data={VBA2023}
            />
          )}
          {HBOShows.length > 0 && (
            <Tv
              name="backdrop_path"
              title="HBO Shows"
              hideSeeAll={false}
              data={HBOShows}
            />
          )}
        </>
      )}
    </>
  );
};

export default memo(HBOBodyComponent);
