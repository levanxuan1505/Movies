/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {styles} from '../theme';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import YouTube from 'react-native-youtube';
import {useNavigation} from '@react-navigation/native';
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
              navigation.navigate('SeeAllHBO', {
                title: title,
                data: data,
                firstItem: firstItem,
              })
            }>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Carousel
        data={data}
        loop={true}
        firstItem={1}
        sliderWidth={width}
        itemWidth={width * 0.69}
        inactiveSlideScale={0.55}
        inactiveSlideOpacity={0.6}
        slideStyle={{
          display: 'flex',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingTop: 25,
        }}
        renderItem={({item}) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
      />
    </View>
  );
};

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
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
