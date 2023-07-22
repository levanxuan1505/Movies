import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Carousel from 'react-native-snap-carousel';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
var {width, height} = Dimensions.get('window');
const TrendingMovies = ({data}) => {
  const navigation = useNavigation();
  const handleClick = item => {
    navigation.navigate('Movies', item);
  };
  return (
    <View style={tw`mb-8`}>
      <Text style={tw`text-white text-xl mx-4 mb-5`}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
        firstItem={1}
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
      <Image
        source={require('../assets/images/moviePoster1.png')}
        // source={{uri: image500(item.poster_path)}}
        style={[
          tw`rounded-3xl`,
          {
            width: width * 0.6,
            height: height * 0.4,
          },
        ]}
      />
    </TouchableWithoutFeedback>
  );
};
export default TrendingMovies;
