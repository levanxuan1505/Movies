/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Dimensions, Image, ImageBackground} from 'react-native';
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {image500} from '../Api/MoviesDb';
var {width, height} = Dimensions.get('window');
const HBOTrending = ({data, name}) => {
  const navigation = useNavigation();
  const handleClick = item => {
    navigation.navigate('Movies', item);
  };
  const [index, setIndex] = React.useState(data.length / 2);
  const isCarousel = React.useRef(null);
  return (
    <View className="mb-8" style={{marginBottom: -15}}>
      <Text className="text-white text-xl mx-4 mb-5">{name}</Text>
      <Carousel
        data={data}
        loop={true}
        firstItem={1}
        autoplay={true}
        ref={isCarousel}
        sliderWidth={width}
        autoplayInterval={4000}
        itemWidth={width * 0.62}
        inactiveSlideScale={0.88}
        inactiveSlideOpacity={0.6}
        loopClonesPerSide={data.length - 1}
        onSnapToItem={index => setIndex(index)}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        renderItem={({item}) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
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

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <ImageBackground
        source={{uri: image500(item.poster_path)}}
        style={{
          position: 'relative',
          width: width * 0.6,
          height: height * 0.4,
        }}>
        <Image
          source={require('../assets/images/logoHBO.png')}
          style={{
            position: 'absolute',
            right: 0,
            top: -8,
            width: width * 0.2,
            height: height * 0.06,
          }}
          // className="rounded-3xl"
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
export default HBOTrending;
