/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {Suspense} from 'react';
var {width, height} = Dimensions.get('window');
import {View, Dimensions, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {ListCarousel} from '@constants';
//
const ListCarouselHBO = ({index}) => {
  const isCarousel = React.useRef(null);
  const MovieCard = ({item}) => {
    return (
      <Suspense>
        <TouchableOpacity>
          <Image source={item.image} style={styles.ImageBackground} />
          <Image
            style={styles.Image}
            source={require('../../assets/images/logoHBO.png')}
          />
        </TouchableOpacity>
      </Suspense>
    );
  };
  return (
    <View className="my-1">
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

export default ListCarouselHBO;
const styles = StyleSheet.create({
  ImageBackground: {
    width: width,
    height: height * 0.112,
  },
  Image: {
    left: 3,
    top: -9,
    position: 'absolute',
    width: width * 0.13,
    height: height * 0.04,
  },
});
