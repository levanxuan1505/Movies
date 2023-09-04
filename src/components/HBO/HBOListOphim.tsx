/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fallbackMoviePoster} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {fetchMoviesOphim, imageOphim} from '../../Api/MoviesDb';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React, {useCallback, useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';

interface Props {
  page: number;
  logo: string;
  title: string;
  hideSeeAll: boolean;
}

const HBOListOphim: React.FC<Props> = ({title, hideSeeAll, page, logo}) => {
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
                  imageOphim(item?.thumb_url) ||
                  imageOphim(item?.poster_url) ||
                  fallbackMoviePoster,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode={FastImage.resizeMode.center}
              style={styles.Image}
            />
            <Image
              source={
                logo === 'GO'
                  ? require('../../assets/images/logoHBO.png')
                  : logo === 'MAX'
                  ? require('../../assets/images/hboMaxlogo.png')
                  : logo === 'AXN'
                  ? require('../../assets/images/axn.png')
                  : logo === 'FoxMovies'
                  ? require('../../assets/images/foxmovie.png')
                  : logo === 'KBS'
                  ? require('../../assets/images/kbs.png')
                  : require('../../assets/images/hits.png')
              }
              style={
                logo === 'GO'
                  ? styles.GO
                  : logo === 'MAX'
                  ? styles.MAX
                  : logo === 'AXN'
                  ? styles.AXN
                  : logo === 'FoxMovies'
                  ? styles.FOX
                  : logo === 'KBS'
                  ? styles.KBS
                  : styles.HIT
              }
            />
            <Text numberOfLines={1} className="text-neutral-300 ml-1 w-24">
              {item.origin_name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [navigation, logo],
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
export default HBOListOphim;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
  GO: {
    position: 'absolute',
    left: 0,
    top: -14,
    width: width * 0.13,
    height: height * 0.04,
  },
  MAX: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: width * 0.12,
    height: height * 0.009,
  },
  AXN: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: width * 0.11,
    height: height * 0.008,
  },
  FOX: {
    position: 'absolute',
    top: 5,
    left: 0,
    width: width * 0.17,
    height: height * 0.01,
  },
  KBS: {
    position: 'absolute',
    top: 5,
    left: 3,
    width: width * 0.16,
    height: height * 0.01,
  },
  HIT: {
    position: 'absolute',
    top: 5,
    left: 3,
    width: width * 0,
    height: height * 0,
  },
});
