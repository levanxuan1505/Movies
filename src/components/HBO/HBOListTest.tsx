/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {
  image185,
  fetchSimilarMovies,
  fallbackMoviePoster,
} from '../../Api/MoviesDb';
import {FlashList} from '@shopify/flash-list';
const {width, height} = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const HBOListTest = ({title, logo, hideSeeAll, idApi}) => {
  const navigation = useNavigation();
  const [data, setListMovies] = useState([]);
  const getListMovies = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setListMovies(data.results);
    }
  };
  useEffect(() => {
    getListMovies(idApi);
  }, [idApi]);

  const Movies = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.push('Movies', item)}>
        <View className="space-y-1 mr-1">
          <FastImage
            defaultSource={require('../../assets/images/Progress.png')}
            source={{
              uri: image185(item.poster_path) || fallbackMoviePoster,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.low,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.center}
            style={styles.Image}>
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
          </FastImage>
          <Text numberOfLines={1} className="text-neutral-300 ml-1 w-24">
            {item.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
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
            keyExtractor={item => item.id}
            estimatedListSize={{
              height: 120,
              width: Dimensions.get('screen').width,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Movies item={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default HBOListTest;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
  GO: {
    position: 'absolute',
    left: 0,
    top: -9,
    width: width * 0.13,
    height: height * 0.04,
  },
  MAX: {
    position: 'absolute',
    top: 7,
    left: 7,
    width: width * 0.12,
    height: height * 0.009,
  },
  AXN: {
    position: 'absolute',
    top: 7,
    left: 7,
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
    width: width * 0.13,
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
