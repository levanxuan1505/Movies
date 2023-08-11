/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
var {width, height} = Dimensions.get('window');
import {View, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {ListCarousel} from '@constants';
//
const ListCarouselHBO = ({index}) => {
  const isCarousel = React.useRef(null);
  const MovieCard = useCallback(({item}) => {
    return (
      <TouchableOpacity>
        <Image
          source={item.image}
          style={{
            width: width,
            height: height * 0.115,
          }}
        />
        <Image
          style={{
            left: 0,
            top: -9,
            position: 'absolute',
            width: width * 0.13,
            height: height * 0.04,
          }}
          source={require('../assets/images/logoHBO.png')}
        />
      </TouchableOpacity>
    );
  }, []);
  return (
    <View className="mb-8">
      <Carousel
        data={ListCarousel[index]}
        loop={true}
        firstItem={1}
        autoplay={true}
        sliderWidth={width}
        ref={isCarousel}
        autoplayInterval={2500}
        itemWidth={width}
        inactiveSlideOpacity={0.6}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        renderItem={({item}) => <MovieCard item={item} />}
      />
    </View>
  );
};

export default memo(ListCarouselHBO);
