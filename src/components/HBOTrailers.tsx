/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Dimensions, Image, ImageBackground} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import YouTube from 'react-native-youtube';
import {YoutubeID} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {image500} from '../Api/MoviesDb';
import {styles} from '../theme';
var {width, height} = Dimensions.get('window');
const HBOTrailers = ({title, hideSeeAll, data, firstItem}) => {
  const navigation = useNavigation();
  const handleClick = item => {
    navigation.navigate('Movies', item);
  };
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAll', {title: title, data: data})
            }>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
        firstItem={firstItem}
        // loop={true}
        inactiveSlideScale={0.55}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.69}
        slideStyle={{
          display: 'flex',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingTop: 25,
        }}
      />
    </View>
  );
};

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      {/* <ImageBackground
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
      </ImageBackground> */}
      <YouTube
        videoId={item.youtubeID} // The YouTube video ID
        play={false} // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        // onReady={e => this.setState({isReady: true})}
        // onChangeState={e => this.setState({status: e.state})}
        // onChangeQuality={e => this.setState({quality: e.quality})}
        // onError={e => this.setState({error: e.error})}
        style={{
          //   alignSelf: 'stretch',
          width: width * 0.85,
          height: height * 0.23,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          paddingLeft: 10,
          fontWeight: '300',
          paddingTop: 10,
          color: 'white',
        }}>
        {item.title}
      </Text>
    </TouchableWithoutFeedback>
  );
};
export default HBOTrailers;
