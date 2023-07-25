/* eslint-disable react-native/no-inline-styles */
import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {image500} from '../Api/MoviesDb';
var {width, height} = Dimensions.get('window');
const TrendingMovies = ({data, name}) => {
  const navigation = useNavigation();
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
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        // source={require('../assets/images/moviePoster1.png')}
        source={{uri: image500(item.poster_path)}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
export default TrendingMovies;
