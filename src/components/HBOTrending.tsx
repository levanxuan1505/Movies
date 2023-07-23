/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Dimensions, Image, ImageBackground} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {image500} from '../Api/MoviesDb';
var {width, height} = Dimensions.get('window');
const HBOTrending = ({data}) => {
  const navigation = useNavigation();
  const handleClick = item => {
    navigation.navigate('Movies', item);
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">HBO GO</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
        firstItem={data.length / 2}
        // loop={true}
        // inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
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
