/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {image500} from '../Api/MoviesDb';
import {RootStackParams} from '@navigators';
let {width, height} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const TrendingMovies = ({data, name}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleClick = item => {
    navigation.navigate('Movies', item);
  };
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
        itemWidth={width * 0.62}
        inactiveSlideScale={0.88}
        inactiveSlideOpacity={0.6}
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
        // source={require('../assets/images/moviePoster1.png')}
        source={{uri: image500(item.poster_path)}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableOpacity>
  );
};
export default memo(TrendingMovies);
