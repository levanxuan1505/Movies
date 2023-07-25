/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, RefreshControl, Dimensions, LogBox} from 'react-native';
LogBox.ignoreLogs(['Sending...']);
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme';
import {
  TrendingMovies,
  MoviesList,
  Loading,
  SportList,
  HBOList,
  Tv,
  Discover,
} from '@components';
import {useNavigation} from '@react-navigation/native';
import {
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies,
  fetchDiscoverMovies,
  fetchSimilarMovies,
  fetchNowPlayingMovies,
  fetchTvChannelsMovies,
  fetchTvMovies,
} from '../Api/MoviesDb';
import {YoutubeID} from '@constants';
var {width} = Dimensions.get('window');
import {HBOTrailers} from '@components';
const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const navigation = useNavigation();
  const [listMovies, setListMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [hboMovies, setHboMovies] = useState([]);
  const [moviesTheathers, setHboMoviesTheathers] = useState([]);
  const [disneyMovies, setDisneyMovies] = useState([]);
  const [moviesForKids, setMoviesForKids] = useState([]);
  const [tv, setTv] = useState([]);
  const [tvChannels, setTvChannels] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const indexOfSports = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
    getDiscoverMovies();
    getNowPlayingMovies();
    getSimilarMovies(603692);
    getSimilarMovies2(455476);
    getSimilarMovies3(575264),
      getSimilarMovies4(2787),
      getSimilarMovies5(9980),
      getSimilarMovies6(10567),
      getTvChannelsMovies();
    getTvMovies();
  }, []);
  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    // console.log(data);
    if (data && data.results) setTrendingMovies(data.results);
    setIsLoadingMovies(false);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    // console.log(data);
    if (data && data.results) setUpComingMovies(data.results);
    setIsLoadingMovies(false);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    // console.log(data);
    if (data && data.results) setTopRatedMovies(data.results);
    setIsLoadingMovies(false);
  };
  const getNowPlayingMovies = async () => {
    const data = await fetchNowPlayingMovies();
    // console.log(data);
    if (data && data.results) setNowPlayingMovies(data.results);
    setIsLoadingMovies(false);
  };
  const getDiscoverMovies = async () => {
    const data = await fetchDiscoverMovies();
    // console.log(data);
    if (data && data.results) setDiscoverMovies(data.results);
    setIsLoadingMovies(false);
  };
  const getTvMovies = async () => {
    const data = await fetchTvMovies();
    // console.log(data);
    if (data && data.results) setTv(data.results);
    setIsLoadingMovies(false);
  };
  const getTvChannelsMovies = async () => {
    const data = await fetchTvChannelsMovies();
    // console.log(data);
    if (data && data.results) setTvChannels(data.results);
    setIsLoadingMovies(false);
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
      setHboMoviesTheathers(data.results);
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
    }
  };
  return (
    <View style={{position: 'relative'}} className="flex-1 bg-neutral-800 ">
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
          position: 'absolute',
          zIndex: 1,
          paddingBottom: -25,
          paddingTop: -8,
        }}
        className="{ios} ? -mb-2 : -mb-3">
        <View
          style={{width: width, paddingHorizontal: 20}}
          className="flex-row justify-between items-center ">
          <TouchableOpacity onPress={() => navigation.navigate('DrawerScreen')}>
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>---VIE_</Text>
            <Text style={styles.yellowColor}>ON---</Text>
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search', {name: 'Movies'})}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* ScrollView */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10, paddingTop: 100}}>
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
        <Tv
          name="logo_path"
          title="Social Channels"
          hideSeeAll={false}
          data={tv}
        />
        <Tv
          name="backdrop_path"
          title="TV Channel"
          hideSeeAll={false}
          data={tvChannels}
        />
        <MoviesList
          title="Movies Theater"
          hideSeeAll={false}
          data={moviesTheathers}
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
          title="Sport Max"
          logo="internationalFriendly"
          hideSeeAll={false}
          data={indexOfSports}
          symbol="null"
        />
        <SportList
          title="Roland Garros 2023"
          logo="Roland"
          symbol="skySport"
          hideSeeAll={false}
          data={indexOfSports}
        />
        <TrendingMovies name="TV Shows" data={tvChannels} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
