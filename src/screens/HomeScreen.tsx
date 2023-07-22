/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Platform, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme';
import {TrendingMovies, MoviesList, Loading, Tv, Discover} from '@components';
import {useNavigation} from '@react-navigation/native';
import {
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies,
  fetchDiscoverMovies,
  fetchNowPlayingMovies,
  fetchTvChannelsMovies,
  fetchTvMovies,
} from '../Api/MoviesDb';
const ios = Platform.OS === 'ios';
const android = Platform.OS === 'android';
const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const navigation = useNavigation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [tvChannels, setTvChannels] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
    getDiscoverMovies();
    getNowPlayingMovies();
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
    console.log(data);
    if (data && data.results) setNowPlayingMovies(data.results);
    setIsLoadingMovies(false);
  };
  const getDiscoverMovies = async () => {
    const data = await fetchDiscoverMovies();
    console.log(data);
    if (data && data.results) setDiscoverMovies(data.results);
    setIsLoadingMovies(false);
  };
  const getTvMovies = async () => {
    const data = await fetchTvMovies();
    console.log(data);
    if (data && data.results) setTv(data.results);
    setIsLoadingMovies(false);
  };
  const getTvChannelsMovies = async () => {
    const data = await fetchTvChannelsMovies();
    console.log(data);
    if (data && data.results) setTvChannels(data.results);
    setIsLoadingMovies(false);
  };
  return (
    <View className="flex-1 bg-neutral-800 ">
      <SafeAreaView className="{ios} ? -mb-2 : -mb-3 bg-transparent">
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>Vie_</Text>On
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/* trending */}
        {trendingMovies.length > 0 && <TrendingMovies data={trendingMovies} />}
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
        <MoviesList title="Popular" hideSeeAll={false} data={upComingMovies} />
        <Discover title="Discover" hideSeeAll={false} data={discoverMovies} />
        <Tv title="Social Channels" hideSeeAll={false} data={tv} />
        <Tv title="TV Channel" hideSeeAll={false} data={tvChannels} />
        <MoviesList
          title="Movies Theater"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <MoviesList title="Disney" hideSeeAll={false} data={upComingMovies} />
        <MoviesList
          title="Movies For Kids"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <MoviesList title="Sports" hideSeeAll={false} data={upComingMovies} />
        <MoviesList title="Tv Shows" hideSeeAll={false} data={upComingMovies} />
        <MoviesList
          title="HBO Movies"
          hideSeeAll={false}
          data={upComingMovies}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
