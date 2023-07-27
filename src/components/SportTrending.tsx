/* eslint-disable react-native/no-inline-styles */
import React from 'react';
var {width, height} = Dimensions.get('window');
import {View, Text, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';
//
const SportTrending = ({data, name}) => {
  const [index, setIndex] = React.useState(data.length / 2);
  const isCarousel = React.useRef(null);
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">{name}</Text>
      <Carousel
        data={data}
        loop={true}
        firstItem={1}
        autoplay={true}
        sliderWidth={width}
        ref={isCarousel}
        autoplayInterval={4000}
        itemWidth={width * 0.62}
        inactiveSlideScale={0.88}
        inactiveSlideOpacity={0.6}
        onSnapToItem={index => setIndex(index)}
        loopClonesPerSide={data.length - 1}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        renderItem={({item}) => <MovieCard item={item} />}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: -10,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.5}
        tappableDots={true}
      />
    </View>
  );
};

const MovieCard = ({item}) => {
  return (
    <TouchableOpacity>
      <Image
        // source={require('../assets/images/moviePoster1.png')}
        source={
          item === 1
            ? require('../assets//trending/1.jpg')
            : item === 2
            ? require('../assets/trending/2.jpg')
            : item === 3
            ? require('../assets/trending/3.jpg')
            : item === 4
            ? require('../assets/trending/4.jpg')
            : item === 5
            ? require('../assets/trending/5.jpg')
            : item === 6
            ? require('../assets/trending/6.jpg')
            : item === 7
            ? require('../assets/trending/7.jpg')
            : item === 8
            ? require('../assets/trending/8.jpg')
            : item === 9
            ? require('../assets/trending/9.jpg')
            : item === 10
            ? require('../assets/trending/10.jpg')
            : item === 11
            ? require('../assets/trending/11.jpg')
            : item === 12
            ? require('../assets/trending/12.jpg')
            : item === 13
            ? require('../assets/trending/13.jpg')
            : item === 14
            ? require('../assets/trending/14.jpg')
            : item === 15
            ? require('../assets/trending/15.jpg')
            : item === 16
            ? require('../assets/trending/16.jpg')
            : item === 17
            ? require('../assets/trending/17.jpg')
            : require('../assets/trending/18.jpg')
        }
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
      />
    </TouchableOpacity>
  );
};
export default SportTrending;
