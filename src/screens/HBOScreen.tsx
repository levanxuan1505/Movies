/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Platform, RefreshControl, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MagnifyingGlassIcon, FilmIcon} from 'react-native-heroicons/outline';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme';
import {YoutubeID} from '@constants';
import {
  Tv,
  HBOTrending,
  HBOList,
  Loading,
  HBOTrailers,
  HBODiscover,
} from '@components';
var {width, height} = Dimensions.get('window');
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
const HBOScreen = () => {
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
    // console.log(data)
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
    <View className="flex-1 bg-neutral-800 ">
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
          <FilmIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>---HBO_</Text>
            <Text style={styles.darkColor}>GO---</Text>
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search', {name: 'Movies'})}>
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
        {isLoadingMovies ? (
          <Loading />
        ) : (
          discoverMovies.length > 0 && <HBOTrending data={discoverMovies} />
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
          data={upComingMovies}
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
          data={upComingMovies}
        />
        <HBODiscover
          title="GO Discover"
          logo="GO"
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
          data={upComingMovies}
        />
        <HBOList
          title="Movies For Kids"
          logo="GO"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <HBOList
          title="MAX Sports"
          logo="Max"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <Tv
          name="backdrop_path"
          title="HBO Shows"
          hideSeeAll={false}
          data={tvChannels}
        />
      </ScrollView>
    </View>
  );
};

export default HBOScreen;
