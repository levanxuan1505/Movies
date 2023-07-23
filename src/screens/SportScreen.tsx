/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Platform, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MagnifyingGlassIcon, FilmIcon} from 'react-native-heroicons/outline';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme';
import {
  HBOTrending,
  HBOList,
  MoviesList,
  Loading,
  HBOTrailers,
  Tv,
  HBODiscover,
} from '@components';
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
const SportScreen = () => {
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
          <FilmIcon size={30} strokeWidth={2} color="white" />

          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>---HBO_</Text>GO---
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
        {discoverMovies.length > 0 && <HBOTrending data={discoverMovies} />}
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
          data={upComingMovies}
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
          data={upComingMovies}
        />
        <HBODiscover
          title="Discover"
          logo="GO"
          hideSeeAll={false}
          data={discoverMovies}
        />
        <HBOTrailers
          // title="Movies Theater"
          // hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="Disney"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="Movies For Kids"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="Sports"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="Tv Shows"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
      </ScrollView>
    </View>
  );
};

export default SportScreen;
