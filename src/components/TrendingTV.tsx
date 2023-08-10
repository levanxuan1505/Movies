/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useEffect, useState} from 'react';
import {image500} from '../Api/MoviesDb';
import {RootStackParams} from '@navigators';
let {width, height} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {fetchSimilarMovies, fallbackMoviePoster} from '../Api/MoviesDb';
const TrendingTV = ({name, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleClick = item => {
    navigation.navigate('Movies', item);
  };
  const [data, setTrendingTv] = useState([]);
  const getSimilarMovies = useCallback(async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setTrendingTv(data.results);
    }
  }, []);
  useEffect(() => {
    getSimilarMovies(idApi);
  }, [getSimilarMovies, idApi]);
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">{name}</Text>
      <Carousel
        data={data}
        loop={true}
        firstItem={1}
        autoplay={true}
        sliderWidth={width}
        autoplayInterval={4000}
        itemWidth={width * 0.9}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.9}
        loopClonesPerSide={data.length - 1}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        renderItem={({item}) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
      />
    </View>
  );
};
const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <Image
        source={{
          uri: image500(item.poster_path) || fallbackMoviePoster,
        }}
        style={{
          width: width * 0.7,
          height: height * 0.45,
        }}
        className="rounded-2xl"
      />
    </TouchableOpacity>
  );
};
export default memo(TrendingTV);
