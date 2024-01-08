/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {Suspense} from 'react';
import {ListCarousel} from '@constants';
var {width, height} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
import {ProgressiveImage} from '../ProgressiveComponent';
import {View, Dimensions, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//
const ListCarouselHome = ({index}) => {
  const isCarousel = React.useRef(null);
  const MovieCard = ({item}) => {
    return (
      <Suspense>
        <TouchableOpacity>
          <ProgressiveImage
            thumbnailSource={require('../../assets/images/Progress.png')}
            source={item.image}
            style={styles.ImageBackground}
            resizeMode="cover"
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

export default ListCarouselHome;
const styles = StyleSheet.create({
  ImageBackground: {
    width: width,
    height: height * 0.112,
  },
});
