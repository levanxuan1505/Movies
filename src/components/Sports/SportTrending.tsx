/* eslint-disable react-native/no-inline-styles */
import React, {Suspense} from 'react';
import {SportTrendingList} from '@constants';
var {width, height} = Dimensions.get('window');
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
//
const SportTrending = ({name}) => {
  const [index, setIndex] = React.useState(SportTrendingList.length / 2);
  const isCarousel = React.useRef(null);
  return (
    <View className="mb-1  mt-[80px]">
      <Text className="text-white text-xl mx-4 mb-5 font-Primary">{name}</Text>
      <Carousel
        data={SportTrendingList}
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
        loopClonesPerSide={SportTrendingList.length - 1}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        renderItem={({item}) => <MovieCard item={item} />}
      />
      <Pagination
        dotsLength={SportTrendingList.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: -10,
          backgroundColor: '#00AA13',
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.45}
        tappableDots={true}
      />
    </View>
  );
};

const MovieCard = ({item}) => {
  return (
    <Suspense>
      <TouchableOpacity>
        <FastImage
          defaultSource={require('../../assets/images/Progress.png')}
          source={item.image}
          style={styles.Image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    </Suspense>
  );
};
export default SportTrending;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.618,
    height: height * 0.425,
  },
});
