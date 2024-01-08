/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  image185,
  fallbackMoviePoster,
  fetchNowPlayingMovies,
} from '../Api/MoviesDb';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
const {width, height} = Dimensions.get('window');
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  title: string;
  hideSeeAll: boolean;
}
const WatchingList: React.FC<Props> = ({title, hideSeeAll}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetchNowPlayingMovies();
    if (data && data.results) {
      setNowPlayingMovies(data.results);
    }
  };

  const Watching = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.push('Movies', item)}>
        <View>
          <FastImage
            defaultSource={require('../assets/images/Progress.png')}
            source={{
              uri: image185(item.poster_path) || fallbackMoviePoster,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.center}
            className=" space-y-1 mr-1"
            style={{
              position: 'relative',
              width: width * 0.26,
              height: height * 0.17,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                position: 'absolute',
                width: 50,
                resizeMode: 'cover',
                height: 50,
                borderRadius: 100,
                tintColor: 'white',
              }}
              source={require('../assets/images/playButton.png')}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                borderWidth: 3,
                borderColor: '#C2C2CB',
              }}></View>
            <View
              style={{
                borderColor: '#00AA13',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: Math.floor(Math.random() * width * 0.25),
                borderWidth: 3,
              }}></View>
          </FastImage>
          <Text
            style={{width: width * 0.25}}
            numberOfLines={1}
            className="text-neutral-300 ml-1">
            {item.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View className="mb-3 space-y-1 w-full">
      <View className="mx-2 flex-row justify-between items-center">
        <Text
          style={{
            fontFamily: 'Shrikhand-Regular',
            fontSize: 15,
          }}
          className="text-white">
          {title}
        </Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Watching', {title: 'Watching'})
            }>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="px-[8px]">
        {nowPlayingMovies && nowPlayingMovies.length > 0 && (
          <FlashList
            data={nowPlayingMovies}
            horizontal={true}
            estimatedItemSize={15}
            estimatedListSize={{
              height: 120,
              width: Dimensions.get('screen').width,
            }}
            onEndReachedThreshold={0.7}
            removeClippedSubviews={true}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Watching item={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default WatchingList;
