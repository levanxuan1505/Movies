/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
const {width, height} = Dimensions.get('window');
import React, {useEffect, useState} from 'react';
import {fetchSimilarMovies} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {image185, fallbackMoviePoster} from '../../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const TvList = ({title, hideSeeAll, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  //   Call API
  const [tv, setTv] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSimilarMovies = async id => {
    setLoading(true);

    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setLoading(false);
      setTv(data.results);
    }
  };
  useEffect(() => {
    getSimilarMovies(idApi);
  }, [idApi]);
  const Tv = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.push('Movies', item)}>
        <View className="space-y-1 mr-1">
          <FastImage
            defaultSource={require('../../assets/images/Progress.png')}
            source={{
              uri: image185(item.poster_path) || fallbackMoviePoster,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            style={styles.Image}
            resizeMode={FastImage.resizeMode.center}
          />
          <Text numberOfLines={1} className="text-neutral-300 ml-1 w-24">
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    <View className="mb-3 space-y-1 w-full">
      <View className="mx-2 flex-row justify-between items-center">
        <Text className="text-white font-Primary text-[15px]">{title}</Text>

        {!hideSeeAll && (
          <TouchableOpacity>
            <Text className="text-lg font-Primary text-[15px] color-greenColor">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {tv && tv.length > 0 && (
          <FlashList
            data={tv}
            horizontal={true}
            estimatedItemSize={15}
            keyExtractor={item => item.id}
            estimatedListSize={{
              height: 120,
              width: Dimensions.get('screen').width,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Tv item={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default TvList;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
});
