/* eslint-disable react/self-closing-comp */
import {View, Text, Platform} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import tw from 'twrnc';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme';
import {TrendingMovies, MoviesList} from '@components';
const ios = Platform.OS === 'ios';
const android = Platform.OS === 'android';
const HomeScreen = () => {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 3, 4]);
  const [upComingMovies, setUpComingMovies] = useState([1, 2, 3, 4]);
  const [topRatedMovies, setTopRatedMovies] = useState([1, 2, 3, 4]);
  return (
    <View style={tw`flex-1 bg-neutral-800 `}>
      <SafeAreaView style={tw`{ios} ? -mb-2 : -mb-3 bg-transparent `}>
        <View style={tw`flex-row justify-between items-center mx-4 `}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={tw`text-white text-3xl font-bold`}>
            <Text style={styles.text}>Vie_</Text>On
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <TrendingMovies data={trendingMovies} />
        <MoviesList title="UpComing" hideSeeAll={false} data={upComingMovies} />
        <MoviesList
          title="Top Rated"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <MoviesList title="Watching" hideSeeAll={false} data={upComingMovies} />
        <MoviesList
          title="Exclusively For You"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <MoviesList
          title="Movies every day"
          hideSeeAll={false}
          data={upComingMovies}
        />
        <MoviesList
          title="New Movies"
          hideSeeAll={false}
          data={upComingMovies}
        />
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
