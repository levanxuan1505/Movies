/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Platform, Dimensions, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MagnifyingGlassIcon, BoltIcon} from 'react-native-heroicons/outline';
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
  Discover,
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
import {YoutubeID} from '@constants';
var {width} = Dimensions.get('window');
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
  return (
    <View style={{position: 'relative'}} className="flex-1 bg-neutral-800">
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
          position: 'absolute',
          paddingBottom: -25,
          paddingTop: -8,
          zIndex: 1,
        }}
        className="{ios} ? -mb-2 : -mb-3 ">
        <View
          style={{width: width, paddingHorizontal: 20}}
          className="flex-row justify-between items-center ">
          <BoltIcon size={30} strokeWidth={2} color="white" />

          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>---SPO</Text>
            <Text style={styles.bluText}>RTS---</Text>
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search', {name: 'Sports'})}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10, paddingTop: 100}}>
        {/* trending */}
        {discoverMovies.length > 0 && (
          <HBOTrending name="Trending" data={discoverMovies} />
        )}
        {upComingMovies.length > 0 && (
          <HBOList
            title="Premier League"
            logo="GO"
            hideSeeAll={false}
            data={upComingMovies}
          />
        )}
        {topRatedMovies.length > 0 && (
          <HBOList
            title="Highlights"
            logo="GO"
            hideSeeAll={false}
            data={topRatedMovies}
          />
        )}
        <HBOList
          title="Roland Garros 2023"
          logo="MAX"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="VBA 2023"
          logo="GO"
          hideSeeAll={false}
          data={nowPlayingMovies}
        />
        <HBOList
          title="Now Playing"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <Discover title="Serie A" hideSeeAll={false} data={discoverMovies} />
        <HBOTrailers
          title="Fomula 1"
          firstItem={0}
          hideSeeAll={false}
          data={YoutubeID[3]}
        />
        <HBOList
          title="Sea Games 32"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="Bundesliga"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="TV Sport Channels"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="V-League"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOTrailers
          firstItem={1}
          title="Road to Qatar"
          hideSeeAll={false}
          data={YoutubeID[4]}
        />
      </ScrollView>
    </View>
  );
};

export default SportScreen;
