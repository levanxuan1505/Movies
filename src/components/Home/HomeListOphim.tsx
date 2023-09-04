/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
const {width, height} = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import React, {useEffect, useState} from 'react';
import {fallbackMoviePoster} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {imageOphim, fetchMoviesOphim} from '../../Api/MoviesDb';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  page: number;
  hbo: string;
  title: string;
  hideSeeAll: boolean;
}
const MoviesListOphim: React.FC<Props> = ({title, hideSeeAll, page}) => {
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

  const Movies = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push('MoviesOphim', item.slug)}>
        <View className="space-y-1 w-full mr-1">
          <FastImage
            source={{
              uri:
                imageOphim(item?.thumb_url) ||
                imageOphim(item?.poster_url) ||
                fallbackMoviePoster,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            defaultSource={require('../../assets/images/Progress.png')}
            resizeMode={FastImage.resizeMode.center}
            style={styles.Image}
          />
          <Text
            numberOfLines={1}
            style={{width: width * 0.25}}
            className="text-neutral-300 ml-1">
            {item.origin_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

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
            estimatedListSize={{
              height: 120,
              width: Dimensions.get('screen').width,
            }}
            onEndReachedThreshold={0.7}
            removeClippedSubviews={true}
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
export default MoviesListOphim;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
});
