/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fallbackMoviePoster} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {imageOphim, fetchMoviesOphim} from '../../Api/MoviesDb';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';

interface Props {
  page: number;
  title: string;
  hideSeeAll: boolean;
}
const TVListOphim: React.FC<Props> = ({title, hideSeeAll, page}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [data, setListMovies] = useState([]);
  const getListMovies = async page => {
    const data = await fetchMoviesOphim(page);
    if (data && data.items) {
      setListMovies(data.items);
    }
  };
  useEffect(() => {
    getListMovies(page);
  }, [page]);

  const Movies = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.push('MoviesOphim', item.slug)}>
          <View className="space-y-1 mr-1">
            <FastImage
              defaultSource={require('../../assets/images/Progress.png')}
              source={{
                uri:
                  imageOphim(item.thumb_url) ||
                  imageOphim(item.poster_url) ||
                  fallbackMoviePoster,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode={FastImage.resizeMode.center}
              style={styles.Image}
            />
            <Text numberOfLines={1} className="text-neutral-300 ml-1 w-24">
              {item.origin_name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [navigation],
  );
  return (
    <View className="mb-3 space-y-1 w-full">
      <View className="mx-2 flex-row justify-between items-center">
        <Text className="text-white font-Primary text-[15px]">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAll', {title: title, data: data})
            }>
            <Text className="text-lg font-Primary text-[15px] color-greenColor">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {data && data.length > 0 && (
          <FlashList
            data={data}
            horizontal={true}
            estimatedItemSize={15}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <Movies item={item} />;
            }}
          />
        )}
      </View>
    </View>
  );
};
export default TVListOphim;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
});
