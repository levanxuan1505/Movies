/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {image500} from '../Api/MoviesDb';
import {RootStackParams} from '@navigators';
let {width, height} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getInputRangeFromIndexes} from 'react-native-snap-carousel';
const TrendingTV = ({data, name, layout}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleClick = item => {
    navigation.navigate('Movies', item);
  };
  function scrollInterpolator4(index, carouselProps) {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return {inputRange, outputRange};
  }
  function animatedStyles4(index, animatedValue, carouselProps) {
    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0.75, 1, 0.75],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          perspective: 1000,
        },
        {
          scale: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0.65, 1, 0.65],
            extrapolate: 'clamp',
          }),
        },
        {
          rotateX: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: ['30deg', '0deg', '30deg'],
            extrapolate: 'clamp',
          }),
        },
        {
          rotateY: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: ['-30deg', '0deg', '30deg'],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">{name}</Text>
      <Carousel
        data={data}
        // layout={'tinder'}
        layout={layout}
        scrollInterpolator={scrollInterpolator4}
        slideStyle={animatedStyles4}
        loop={true}
        firstItem={1}
        autoplay={true}
        sliderWidth={width}
        autoplayInterval={3000}
        itemWidth={width * 0.8}
        inactiveSlideScale={0.7}
        inactiveSlideOpacity={0.6}
        loopClonesPerSide={data.length - 1}
        // slideStyle={{display: 'flex', alignItems: 'center'}}
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
          width: width * 0.8,
          height: height * 0.22,
        }}
        className="rounded-3xl"
      />
    </TouchableOpacity>
  );
};
export default TrendingTV;
